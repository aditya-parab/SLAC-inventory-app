import {createTheme, ThemeProvider} from '@material-ui/core';
import QRGENSCEN from './QRGENSCAN';
import Home from './Home';
import ScanItem from './ScanItem';
import ScanLocation from './ScanLocation'
import Success from './Success';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const theme = createTheme(
{
  palette: {
  }
}
)


function App() { 




  return (

    <ThemeProvider theme={theme}>
  <Router>

  <Switch>
    <Route path="/scanitem"> <ScanItem></ScanItem>  </Route>
   </Switch>

   <Switch>
    <Route path="/scanlocation"> <ScanLocation/>  </Route>
   </Switch>


   <Switch>
    <Route  path="/generate">   <QRGENSCEN></QRGENSCEN>  </Route>
        </Switch>
        
        <Switch>
    <Route  path="/success">   <Success/> </Route>
   </Switch>

   <Switch>
    <Route exact path="/" > <Home></Home>  </Route>
   </Switch>  




</Router>
    </ThemeProvider>
  
   
  );
}


export default App;
