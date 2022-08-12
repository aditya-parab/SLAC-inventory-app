import React, {useState,useRef} from 'react';
import { makeStyles, TextField, Button} from '@material-ui/core';
import QRCode from 'qrcode';
import { Grid, Container} from '@material-ui/core';
import QrReader from 'react-qr-reader';



const QRGENSCEN = () => {

    const [text, setText] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [scanResultFile, setScanResultFile] = useState('');
    const classes = useStyles();
    const qrRef = useRef(null);




    const generateQrCode = async () => {
        try {
              const response = await QRCode.toDataURL(text);
              setImageUrl(response);
        }catch (error) {
          console.log(error);
        }
      }


      const handleErrorFile = (error) => {
        console.log(error);
      }
      const handleScanFile = (result) => {
          if (result) {
              setScanResultFile(result);
          }
      }
      const onScanFile = () => {
        qrRef.current.openImageDialog();
      }



  
    return ( 
      <Container className={classes.container} >
          <Grid justify = "center" container spacing={2} >
          <Grid item xl={4} lg={4} md={6} sm={12} xs={12} >
                <TextField label="Enter Text Here" onChange={(e) => setText(e.target.value)}/>
                <Button className={classes.btn} variant="contained" 
                   onClick={() => generateQrCode()}>Generate</Button>
                  <br/>
                  <br/>
                  <br/>
                  {imageUrl ? (
                    <a href={imageUrl} download>
                        <img src={imageUrl} alt="img"/>
                    </a>) : null}

          </Grid>
      
          <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
            <Button className={classes.btn} variant="contained" color="secondary" onClick={onScanFile}>Scan Qr Code</Button>
                        <QrReader
                                  ref={qrRef}
                                  delay={300}
                                  style={{width: '50%'}}
                                  onError={handleErrorFile}
                                  onScan={handleScanFile}
                                  legacyMode
                                />

                        <h3>Scanned Code: {scanResultFile}</h3>
          </Grid>

          </Grid>
       

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
      marginBottom: 20,
      color:"white",
      background: '#90030B',
    }
}));


export default QRGENSCEN;