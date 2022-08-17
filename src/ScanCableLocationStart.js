
import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core';
import { Grid } from '@material-ui/core';
import {Typography, IconButton} from '@material-ui/core';
import QrReader from 'react-qr-reader';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Button} from '@material-ui/core';


const ScanCableLocationStart = () => {
    const classes = useStyles();
    const [scanResultWebCam, setScanResultWebCam] =  useState('');

    const handleErrorWebCam = (error) => {
        console.log(error);
    }
    
    const handleScanWebCam = (result) => {
        if (result){
            setScanResultWebCam(result);
            console.log(scanResultWebCam)
        }
    }


    return ( 
        <Grid container 
        direction="column"
        alignItems="center"
        justify="center"
         spacing={2}>
    
            <Grid item xl={4} lg={4} md={8} sm={12} xs={12} >
            <IconButton href="/">
                <ArrowBackIcon style={{color:"white"}}></ArrowBackIcon>
                </IconButton>
                
                <Typography 
                className={classes.btn} 
                variant="h3">
                    Scan the Location of Cable Start
                </Typography>
                <QrReader 
                        delay={300}
                        style={{width: '100%'}}
                        onError={handleErrorWebCam}
                        onScan={handleScanWebCam}
                        />
                        </Grid>

<Grid item md={8}>
<Button variant="contained" style={{backgroundColor:"green"}} href="/scancablelocationend">
                    complete
                </Button>
</Grid>
</Grid>
    
       
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
      marginBottom: 20,
      color:"white",
      background: '#90030B',
    }
}));
 
export default ScanCableLocationStart;