import { Button } from "@material-ui/core";
import {Typography} from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import {Box} from "@material-ui/core";

const AddNewItem = () => {
    const classes = useStyles()

    return (
        <div>

            
                    <Grid container style={{textAlign:"center",color:"white",background:"#90030B"}} direction="column" >
                <Typography variant="h2">This is a new QR code.</Typography>
            <Typography  variant="h4">What do you want to add?</Typography>
        </Grid> 
            <Grid container justify="center" direction="column" className={classes.container}  style={{marginTop:100}} >
                <Box display="flex" justifyContent="space-between">
                <Button className={classes.btn} style={{width:100, margin:"auto"}} href="/addnewdevice" variant="contained" >Device</Button>
                <Button className={classes.btn} style={{width:100, margin:"auto"}}  href="/scancableend" variant="contained" >Cable</Button>
                <Button className={classes.btn} style={{width:100, margin:"auto"}} href="/addnewlocation" variant="contained" >Location</Button>
                </Box>

            </Grid>
      

        
   
                
        </div>
        

        
      
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

export default AddNewItem;