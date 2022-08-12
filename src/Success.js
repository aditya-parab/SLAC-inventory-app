import { Card, CardHeader,CardMedia,CardContent } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { UseStyle } from "./HookStyles";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle"





const Success = () => {
    const classes = {
        titlename: {
        
    display: 'flex',
    justifyContent: 'center',
    alignItems:  'center',
    background: '#90030B',
    color: '#fff',
    padding: 20    
        }
        
    }

    const tempstyle = {
        largeicon: {
            marginTop:20,
            width: 80,
            height: 80,
            Color:"green"
        }
    }
    
    return ( 

    <Grid container justify="center" style={{marginTop:20}}>
        <Grid align="center" item xl={4} lg={4} md={6} sm={12} xs={12}>
            <Card >
                    <CardHeader style={classes.titlename}  title="Item was successfully added!"></CardHeader>     
            <CheckCircleIcon  style={tempstyle.largeicon}/>        
                    <CardContent >
                        <Button variant="contained" href="/">Home</Button>
                    </CardContent>
            </Card>
        </Grid>
    </Grid>
            
      
      



     );
}
 
export default Success;