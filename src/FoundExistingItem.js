import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import dummyimage from './img/oscilloscope.png'

import { Grid } from "@material-ui/core";
import {Card,CardContent,Box,CardMedia} from "@material-ui/core";
import MoveIcon from '@material-ui/icons/ZoomOutMap';
import MapIcon from '@material-ui/icons/Map';


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


const FoundExistingItem = () => {
    
const classes = useStyle()
    return ( 
        <div>
            <Box width='300px'>
                <Card>
                    <CardMedia
                        component='img'
                        height='140'
                        image={dummyimage}
                        alt="dummy image"
                    
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component='div'>ID name</Typography>
                    <Typography variant="body2" color="text.secondary"></Typography>
                </CardContent>
            </Card>
            </Box>

</div>
     );
}
 
export default FoundExistingItem;




/*

        <div>

            <Grid container className={classes.container}>

                <Grid item md={12}>

                    <Typography className={classes.btn} variant="h4" >Item# 780AX5</Typography>
                </Grid>
            
            
 
                <Grid item md={12}>
                    <Button className={classes.btn} variant="contained">Edit</Button>
                </Grid>

                           

                
                
                <Grid item md={12} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src={dummyimage} style={{ maxWidth: "250px"}}/>
                    
            <form noValidate autoComplete="off" style={{maxWidth:"500px"}}>
                <Typography className={classes.btn} label="ID" >ID:</Typography>
                <Typography className={classes.btn} >Name</Typography>
                 <Typography className={classes.btn} >Owned by:</Typography>
                    </form>
                    
                </Grid>
                <Grid item md={12}>
                    <Button className={classes.btn} variant="contained" color="secondary" href="/scanlocation" >Submit</Button>
                                    <Button 
                variant="contained"
                endIcon={<MoveIcon/>}
                href="/scanlocation">
                Move
          </Button>
          
                <Button 
                variant="contained"
                endIcon={<MapIcon/>}
                href="/map">
                Map
                </Button>

                </Grid>



            </Grid>
            
        </div>


*/