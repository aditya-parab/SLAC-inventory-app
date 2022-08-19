
import ItemCard from "./components/ItemCard";
import { Grid } from "@material-ui/core";




const FoundExistingItem = () => {
    

    return ( 
        <div>
            <Grid container justify="center">

            <ItemCard/>

            </Grid>


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