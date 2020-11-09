import React from 'react'
import { makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';




const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
      
    },
    margin: {
      margin: theme.spacing(5),
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      height: 50,
      paddingLeft: theme.spacing(4),
      backgroundColor: theme.palette.background.default,
    },
    img: {

      display: 'block',
    },
  }));



  
  const style = {
    root: {
      backgroundColor:"#212121",
      marginTop:40,
    
    color: 'white',
    
    },
    title: {
      fontSize: 24,
      textAlign:'center'
    },  
}



  function BuySellHome() {
    const classes = useStyles();
    
    return (
      <>
      <div className={classes.root}  style={{ padding: 5 }}>
        <Grid container spacing={1} >
          <Grid item xs = {12}>
          <Paper>
              <Card style={style.root} variant="outlined" >
                <div style={{ margin: 60 }}> 
                      <Grid container spacing={1} style = {{marginTop:20}}>
                          <Grid item xs = {12}/>
                          <Grid item xs = {4}>
                              <Paper style={{ marginTop: 10 }}>
                                  <Card variant="outlined" style = {{backgroundColor:"#212121", width:1000,
    
      marginTop: 20,
      height: 200,
      color: 'white'}}> 
      <h1>Welcome to The Book Shop</h1>
      <p>Good friends,good books,and a sleepy conscience:this is the ideal life</p>
      -Sineka.
                                  
                                  </Card>
                              </Paper>
                          </Grid>
                          
                          <Grid item xs = {1}/>
                      </Grid>
                </div>
              </Card>
            </Paper>
          </Grid>
        </Grid>
        
        <br/>
       
        </div>
      </>
    )
  }

export default BuySellHome 