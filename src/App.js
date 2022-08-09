import React, {useState, useRef} from 'react';
import {Container, Card, CardContent, makeStyles, Grid, TextField, Button} from '@material-ui/core';
import QRCode from 'qrcode';
import QrReader from 'react-qr-reader';
import QRGENSCEN from './QRGENSCAN';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() { 

;
  const classes = useStyles();
  


  return (
    <Router>
 <Container className={classes.container}>
          <Card>
           
              <CardContent>
                  <Grid  container spacing={2}  >

                  <Switch>
                      <Route exact path="/"> <Home></Home>  </Route>
                    
                     </Switch>  


                     <Switch>
                      <Route  path="/generate">   <QRGENSCEN></QRGENSCEN>  </Route>
                  
                     </Switch>

                  </Grid>
              </CardContent>
          </Card>
    </Container>
    </Router>
   
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
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
      marginBottom: 20
    }
}));
export default App;
