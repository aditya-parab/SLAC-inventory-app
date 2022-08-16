import { Card, CardHeader,CardContent } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle"





const Success = () => {
    const classes = useStyles()


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
 
export default Success;