import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import ImageUpload from "./ImageUpload";
import {Grid} from "@material-ui/core";


const useStyle = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: "block",
        backgroundColor: "white",
        textAlign:"center"
    },
    btn : {
      marginTop: 10,
      marginBottom: 20,
      color:"white",
        background: '#90030B',
      textAlign:"center"
    },
        container: {
    marginTop: 10,
      textAlign:"center"
    },
})
 


const AddNewLocation = () => {
    const classes = useStyle()
    return (  
        
        <div>
            <Grid container className={classes.container}>

                <Grid item md={12}>
                    <Typography className={classes.btn} variant="h2" >Add location details</Typography>
                    <Typography className={classes.btn} variant="h4" >Upload picture and add information</Typography>
                </Grid>
            
            
 
                <Grid item md={12}>

                </Grid>            

                
                
                <Grid item md={12} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <ImageUpload/>
                    
            <form noValidate autoComplete="off" style={{maxWidth:"500px"}}>
                <TextField className={classes.field} label="ID" variant="filled" fullWidth required></TextField>
                <TextField className={classes.field} label="Name" variant="filled" fullWidth required></TextField>
                 <TextField className={classes.field} label="Owned by:" variant="filled" fullWidth required></TextField>
                    </form>
                    
                </Grid>
                <Grid item md={12}>
                                    <Button className={classes.btn} variant="contained" color="secondary" href="/map" >Submit</Button>
                </Grid>



            </Grid>
            
        </div>
    );
}
 
export default AddNewLocation;