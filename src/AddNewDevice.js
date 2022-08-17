import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import ImageUpload from "./ImageUpload";


const useStyle = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: "block",
        backgroundColor:"white"
    },
    btn : {
      marginTop: 10,
      marginBottom: 20,
      color:"white",
        background: '#90030B',
      textAlign:"center"
    }
})


const AddNewDevice = () => {
const classes = useStyle()
    return ( 
        <div>
            <Typography className={classes.btn} variant="h2" >Upload picture</Typography>
            
               {/* <Button className={classes.btn} variant="contained" color="secondary" onClick={onScanFile}>Scan Qr Code</Button> */}
            

<ImageUpload/>
            <form noValidate autoComplete="off">
                <TextField className={classes.field} label="ID" variant="filled" fullWidth required></TextField>
                <TextField className={classes.field} label="Name" variant="filled" fullWidth required></TextField>
                 <TextField className={classes.field} label="Owned by:" variant="filled" fullWidth required></TextField>
            </form>

            
        </div>
     );
}
 
export default AddNewDevice;