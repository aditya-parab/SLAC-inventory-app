
import React, {useState, useRef} from 'react';
import { Grid, CardContent, Container, Card} from '@material-ui/core';
import QrReader from 'react-qr-reader';
import { Link } from 'react-router-dom';
import { makeStyles} from '@material-ui/core';
import SearchBar from "material-ui-search-bar";



const Home = () => {
    const classes = useStyles();
    const [scanResultWebCam, setScanResultWebCam] =  useState('');
    const [state, setState] =  useState({
      value:""
    });
    

    //dummy function for now
    const handleSearch = (newValue) => {
      setState({ value: newValue })
    }
     
    

    const handleErrorWebCam = (error) => {
        console.log(error);
    }
    
    const handleScanWebCam = (result) => {
        if (result){
            setScanResultWebCam(result);
        }
    }


    return ( 
        <Container className={classes.container}>
            <Card>
                <CardContent >
                <Grid justify = "center" container spacing={2} >
                <Grid item xl={4} lg={4} md={6} sm={12} xs={12} >
                <h3 className={classes.title}>Scan the Item</h3>
                        <QrReader 
                        delay={300}
                        style={{width: '100%'}}
                        onError={handleErrorWebCam}
                        onScan={handleScanWebCam}
                        />
                        <h3>Scanned result: {scanResultWebCam}</h3>
                  

           
                <Link  to="/generate">Generate</Link>
                <Link to="/map">Map</Link>
                <Link to="/move">Move</Link>
                </Grid>
                <SearchBar
    value={state.value}
    onChange={(newValue) => setState({ value: newValue })}
    onRequestSearch={() => handleSearch(state.value)}
  />
                
                </Grid>

                </CardContent>
   
            </Card>
        
        </Container>
         



     );
}

const useStyles = makeStyles((theme) => ({
    conatiner: {
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
 
export default Home;