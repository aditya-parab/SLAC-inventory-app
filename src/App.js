import {createTheme, ThemeProvider} from '@material-ui/core';
import QRGENSCEN from './QRGENSCAN';
import Home from './Home';
import ScanItem from './ScanItem';
import ScanLocation from './ScanLocation'
import Success from './Success';
import AddNewItem from './AddNewItem';
import AddNewDevice from './AddNewDevice';
import AddNewLocation from './AddNewLocation';
import ScanCableEnd from './ScanCableEnd';
import ScanCableLocationStart from './ScanCableLocationStart';
import ScanCableLocationEnd from './ScanCableLocationEnd';
import FoundExistingItem from './FoundExistingItem';
import EditExistingItem from './EditExistingItem';
import Map from '@material-ui/icons/Map';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddNewCable from './AddNewCable';

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
    <Route path="/foundexistingitem"> <FoundExistingItem/>  </Route>
        </Switch>

                           <Switch>
    <Route path="/editexistingitem"> <EditExistingItem/>  </Route>
        </Switch>


  <Switch>
    <Route path="/scanitem"> <ScanItem></ScanItem>  </Route>
   </Switch>

   <Switch>
    <Route path="/scanlocation"> <ScanLocation/>  </Route>
        </Switch>

           <Switch>
    <Route path="/scancableend"> <ScanCableEnd/>  </Route>
        </Switch>

                   <Switch>
    <Route path="/scancablelocationstart"> <ScanCableLocationStart/>  </Route>
        </Switch>

        
                   <Switch>
    <Route path="/scancablelocationend"> <ScanCableLocationEnd/>  </Route>
        </Switch>


           
        
    <Switch>
    <Route path="/addnewitem"> <AddNewItem></AddNewItem>  </Route>
        </Switch>
        
    <Switch>
    <Route path="/addnewcable"> <AddNewCable></AddNewCable>  </Route>
        </Switch>

            <Switch>
    <Route path="/addnewdevice"> <AddNewDevice></AddNewDevice> </Route>
        </Switch>
        
                    <Switch>
    <Route path="/addnewlocation"> <AddNewLocation></AddNewLocation> </Route>
   </Switch>



   <Switch>
    <Route  path="/generate">   <QRGENSCEN></QRGENSCEN>  </Route>
        </Switch>
        
        <Switch>
    <Route  path="/success">   <Success/> </Route>
   </Switch>


   <Switch>
    <Route path="/map"> <Map/>  </Route>
        </Switch>

   <Switch>
    <Route exact path="/" > <Home></Home>  </Route>
   </Switch>  




</Router>
    </ThemeProvider>
  
   
  );
}


export default App;
