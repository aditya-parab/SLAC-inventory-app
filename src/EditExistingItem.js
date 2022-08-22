import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import dummyimage from './img/oscilloscope.png'
import { Grid } from "@material-ui/core";
import { Card, CardContent, Box, CardMedia, CardHeader } from "@material-ui/core";
import {IconButton} from "@material-ui/core";
import MoveIcon from '@material-ui/icons/ZoomOutMap';
import Edit from '@material-ui/icons/Edit'


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



const EditExistingItem = () => {
        const classes = useStyle()
    return ( 
        <div>

            <Grid container justify="center">
                                <Box width='300px' height="250px">
                <Card>
                    <CardHeader
                        title="Item# 780AX5"
                        className={classes.btn}
                    />
                    

                    <CardMedia
                        component='img'
                        
                        image={dummyimage} 
                        style={{height:"100%", width:"100%"}}
                        alt="dummy image"
                    
                    />
                    <CardContent>

                        <div style={{display:"flex",justifyContent:"space-between"}}>
                                        <Button className={classes.btn} 
                variant="contained"
                endIcon={<MoveIcon/>}
                href="/scanlocation">
                Move
                        </Button>
                        
                            <Button 
                                className={classes.btn} 
                variant="contained"
                endIcon={<Edit/>}
                href="/editexistingitem">
                Edit
          </Button>
            </div>

                    
                        
         
            <form noValidate autoComplete="off" style={{maxWidth:"500px"}}>
                <TextField className={classes.field} label="ID" variant="filled" fullWidth required></TextField>
                <TextField className={classes.field} label="Name" variant="filled" fullWidth required></TextField>
                 <TextField className={classes.field} label="Owned by:" variant="filled" fullWidth required></TextField>
                <div  style={{display:"flex", justifyContent:"center"}}><Button className={classes.btn}  variant="contained">Submit</Button></div> 
                    </form>
                
                       



                </CardContent>
            </Card>
            </Box>
</Grid>


        </div>
     );
}
 
export default EditExistingItem;