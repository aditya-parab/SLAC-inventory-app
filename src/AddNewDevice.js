import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import ImageUpload from "./ImageUpload";
import Image from '@material-ui/icons/CloudUpload'
import { Grid } from "@material-ui/core";
import {Box} from "@material-ui/core";


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
            <Grid container className={classes.container} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

<Typography style={{background:"#90030B",color:"white"}} variant="h2">Add Device details</Typography>
                
        <Grid container style={{display:"flex", justifyContent:"center", marginTop:"80px"}}>
             <div style={{color:"#D9D9D9", scale:"3",marginBottom:"80px", border:"solid",padding:"10px" ,marginTop:"30px"}}> <Image/> </div> 
                </Grid>

        <div style={{marginTop:"70px"}}>           <Grid item md={8} >
            <form noValidate autoComplete="off" >
                <TextField className={classes.field} style={{width:"75%"}} label="ID" variant="filled"  required></TextField>
                <TextField className={classes.field} style={{width:"75%"}} label="Name" variant="filled"  required></TextField>
                 <TextField className={classes.field} style={{width:"75%"}} label="Owned by:" variant="filled"  required></TextField>
                    </form>
                </Grid>

                    
                  <div  style={{display:"flex", justifyContent:"center"}}><Button className={classes.btn}  variant="contained">Submit</Button></div> </div>

        </Grid>
 
          
               
        </div>
     );
}
 
export default AddNewDevice;