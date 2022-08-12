import { makeStyles } from '@material-ui/core/styles';

const UseStyle = makeStyles({ container: {
    marginTop: 10
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems:  'center',
    background: '#90030B',
    color: '#fff',
    padding: 20
  },
  btn : {
    
    marginTop: 10,
    marginBottom: 20,
    color:"#ffff",
    background: '#90030B',
    textAlign:"center"
  }
});

export { UseStyle };