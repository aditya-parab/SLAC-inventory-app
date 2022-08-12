
import React, {useState} from 'react';
import { UseStyle } from './HookStyles';
import { Grid } from '@material-ui/core';
import {Typography, IconButton} from '@material-ui/core';
import QrReader from 'react-qr-reader';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Button} from '@material-ui/core';


const ScanItem = () => {
    const classes = UseStyle();
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
        <Grid container justify = "center" spacing={2} >
            <Grid item>
                <IconButton href="/">
                <ArrowBackIcon style={{color:"white"}}></ArrowBackIcon>
                </IconButton>
          
            </Grid>

            <Grid item xl={4} lg={4} md={8} sm={12} xs={12} >
                <Typography 
                className={classes.btn} 
                variant="h3">
                    Scan the item you want to move
                </Typography>
                <QrReader 
                        delay={300}
                        style={{width: '100%'}}
                        onError={handleErrorWebCam}
                        onScan={handleScanWebCam}
                        />
                <Button variant="contained" href="/scanlocation">
                    scan location
                </Button>
            </Grid>

        


        </Grid>
     );
}
 
export default ScanItem;