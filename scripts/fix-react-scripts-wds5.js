#!/usr/bin/env node
/**
 * postinstall shim for create-react-app (react-scripts@5.0.1) + webpack-dev-server v5.
 *
 * Why this exists
 * ---------------
 * This project pins `webpack-dev-server` to >=5.x through package.json "overrides"/
 * "resolutions" so that the published CVE fixes are actually installed (the alerts on
 * webpack-dev-server <=5.2.0 have no 4.x backport). react-scripts@5.0.1 is the final,
 * unmaintained CRA release and its dev-server config still uses three options that
 * webpack-dev-server v5 removed:
 *
 *   https                     -> replaced by `server`
 *   onBeforeSetupMiddleware   -> merged into `setupMiddlewares`
 *   onAfterSetupMiddleware    -> merged into `setupMiddlewares`
 *
 * Without this shim `npm start` dies with:
 *   Invalid options object. Dev Server has been initialized using an options object
 *   that does not match the API schema. - options has an unknown property
 *   'onAfterSetupMiddleware'.
 *
 * `npm run build` is unaffected (it does not use the dev server).
 *
 * This script is idempotent, dependency-free, and a no-op unless BOTH react-scripts is
 * installed AND webpack-dev-server's installed major version is >= 5. It runs from the
 * "postinstall" hook, so it is re-applied automatically on every fresh install by npm
 * or yarn. It edits node_modules only - no source file of ours is modified.
 */
'use strict';

const fs = require('fs');

const MARKER = '[WDS5-SHIM]';

function resolveOrNull(request) {
  try {
    // Resolve from the project root (postinstall's cwd), not from this script's dir.
    return require.resolve(request, { paths: [process.cwd()] });
  } catch (err) {
    return null;
  }
}

function installedMajor(name) {
  const pkgPath = resolveOrNull(name + '/package.json');
  if (!pkgPath) return null;
  try {
    return parseInt(JSON.parse(fs.readFileSync(pkgPath, 'utf8')).version, 10);
  } catch (err) {
    return null;
  }
}

function main() {
  const configPath = resolveOrNull('react-scripts/config/webpackDevServer.config.js');
  if (!configPath) {
    console.log('[wds5-shim] react-scripts not installed; nothing to do.');
    return;
  }

  const wdsMajor = installedMajor('webpack-dev-server');
  if (wdsMajor === null) {
    console.log('[wds5-shim] webpack-dev-server not installed; nothing to do.');
    return;
  }
  if (wdsMajor < 5) {
    console.log(
      '[wds5-shim] webpack-dev-server is v' +
        wdsMajor +
        '; v4 config is fine, skipping (this shim only applies to v5+).'
    );
    return;
  }

  let source = fs.readFileSync(configPath, 'utf8');

  if (source.indexOf(MARKER) !== -1) {
    console.log('[wds5-shim] already applied to react-scripts dev-server config.');
    return;
  }

  const httpsAnchor = '    https: getHttpsConfig(),';
  if (source.indexOf(httpsAnchor) === -1) {
    console.warn(
      '[wds5-shim] WARNING: expected `https: getHttpsConfig(),` in react-scripts config and did not find it.\n' +
        '           react-scripts was probably replaced or already migrated. Leaving it alone.'
    );
  } else {
    const httpsReplacement = [
      '    // ' + MARKER + ' webpack-dev-server v5 replaced `https` with `server`.',
      '    server: (() => {',
      '      const httpsConfig = getHttpsConfig();',
      "      if (!httpsConfig) return 'http';",
      '      return { type: \'https\', options: httpsConfig === true ? {} : httpsConfig };',
      '    })(),',
    ].join('\n');
    source = source.replace(httpsAnchor, httpsReplacement);
  }

  // The two v4 lifecycle hooks are contiguous in react-scripts@5.0.1.
  const middlewareRe =
    /\n {4}onBeforeSetupMiddleware\(devServer\) \{[\s\S]*?\n {4}\},\n {4}onAfterSetupMiddleware\(devServer\) \{[\s\S]*?\n {4}\},/;

  if (middlewareRe.test(source)) {
    const middlewareReplacement = [
      '',
      '    // ' + MARKER + ' v5 removed onBeforeSetupMiddleware/onAfterSetupMiddleware in favour of setupMiddlewares.',
      '    setupMiddlewares(middlewares, devServer) {',
      '      // Keep `evalSourceMapMiddleware` before `redirectServedPath` otherwise it will not have any effect',
      '      middlewares.unshift({',
      "        name: 'eval-source-map',",
      '        middleware: evalSourceMapMiddleware(devServer),',
      '      });',
      '',
      '      if (fs.existsSync(paths.proxySetup)) {',
      '        // This registers user provided middleware for proxy reasons',
      '        require(paths.proxySetup)(devServer.app);',
      '      }',
      '',
      "      // Redirect to `PUBLIC_URL` or `homepage` from `package.json` if url not match",
      '      middlewares.push({',
      "        name: 'redirect-served-path',",
      '        middleware: redirectServedPath(paths.publicUrlOrPath),',
      '      });',
      '',
      "      // This service worker file is effectively a 'no-op' that will reset any",
      '      // previous service worker registered for the same host:port combination.',
      '      middlewares.push({',
      "        name: 'noop-service-worker',",
      '        middleware: noopServiceWorkerMiddleware(paths.publicUrlOrPath),',
      '      });',
      '',
      '      return middlewares;',
      '    },',
    ].join('\n');
    source = source.replace(middlewareRe, middlewareReplacement);
  } else {
    console.warn(
      '[wds5-shim] WARNING: expected onBefore/onAfterSetupMiddleware hooks in react-scripts config and did not find them.\n' +
        '           react-scripts was probably replaced or already migrated. Leaving it alone.'
    );
    return; // do not write a half-patched file
  }

  fs.writeFileSync(configPath, source);
  console.log('[wds5-shim] patched react-scripts dev-server config for webpack-dev-server v' + wdsMajor + '.');
}

try {
  main();
} catch (err) {
  // Never fail the install over a compatibility shim; surface the problem loudly instead.
  console.warn('[wds5-shim] could not apply compatibility patch:', err && err.message ? err.message : err);
}
