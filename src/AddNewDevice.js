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
        backgroundColor:"pink",
        backgroundColor: "white",
        textAlign: "center",
margin:"10px"
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


const AddNewDevice = () => {
const classes = useStyle()
    return ( 
        <div>
            <Grid container className={classes.container}>

                <Grid item md={12}>
<Typography className={classes.btn} variant="h2" >Add Device details</Typography>
                
                    
                </Grid>
             

                <Grid item md={8} sm={12} justify="right">
  <div style={{ display: "flex", alignItems: "right",flexWrap:"wrap" }}>
                  
                </div>
                </Grid>
              

                    
                    
                
                
                <Grid item md={8} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <form noValidate autoComplete="off" >
                <TextField className={classes.field} fullWidth label="ID" variant="filled"  required></TextField>
                <TextField className={classes.field} fullWidth label="Name" variant="filled"  required></TextField>
                 <TextField className={classes.field} fullWidth label="Owned by:" variant="filled"  required></TextField>
                    </form>
                      <ImageUpload />
                </Grid>

                    
                

                                  

               
              

                                       
                                   
              



            </Grid>
            <div  style={{display:"flex", justifyContent:"center"}}><Button className={classes.btn}  variant="contained">Submit</Button></div> 
            
        </div>
     );
}
 
export default AddNewDevice;