import React from 'react'
import ParticlesContainer from './components/ParticlesContainer'
import { Page } from 'components'
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Typography, Divider, Link, CardMedia, Grid, Box } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import LockIcon from '@material-ui/icons/Lock';
import gradients from 'utils/gradients';
// import RegisterUserForm from './components/RegisterUserForm';
import RegisterNewUserForm from './components/RegisterNewUserForm';
const useStyles = makeStyles((theme) => ({
    root: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing(6, 2),
     
      
    },
    mainCard: { 
      width:'70%',
      height:'100%',
      padding:theme.spacing(6,2,0),
      borderRadius:'10px'

    }, 
    card: {
      width: theme.breakpoints.values.md,
      maxWidth: '100%',
      overflow: 'unset',
      display: 'flex',
      position: 'relative',
      '& > *': {
        flexGrow: 1,
        flexBasis: '50%',
        width: '50%'
      }
    },
    content: {
      padding: theme.spacing(8, 4, 3, 4)
    },
    media: {
      padding: theme.spacing(3),
      color: theme.palette.white,
        width:'626px',
      height: '626px',
      marginTop:'9%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      [theme.breakpoints.down('md')]: {
        display: 'none'
      }
    },
    icon: {
      backgroundImage: gradients.green,
      color: theme.palette.white,
      borderRadius: theme.shape.borderRadius,
      padding: theme.spacing(1),
      position: 'absolute',
      top: -32,
      // left: 60,
      height: 64,
      width: 64,
      fontSize: 32
    },
    loginForm: {
      marginTop: theme.spacing(3)
    },
    divider: {
      margin: theme.spacing(2, 0)
    },
    person: {
      marginTop: theme.spacing(2),
      display: 'flex'
    },
    avatar: {
      marginRight: theme.spacing(2)
    },
    box: {
      marginTop: theme.spacing(-5),
      marginBottom: theme.spacing(2)
    },
    grid : {
      display:'flex',
                  justifyContent:'center',
                  marginBottom:'10%'
    }
  }));

const RegisterUser = () => {
    const classes = useStyles()

  
  return (
    <div
    style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      
      }}
    >
        <ParticlesContainer /> 
        <div
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            marginTop:'8%'
          }}
        >
            <Page
            //  className={classes.root}
             title="Register"
            >
              <Grid container>
                <Grid item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={classes.grid}
                >
                  <Card className={classes.mainCard} elevation={4}>
                  <CardContent className={classes.content}>
                    <LockIcon className={classes.icon} />
                    <Box className={classes.box}>
                    <Typography
                gutterBottom
                variant="h3"
              >
                Sign up
              </Typography>
              <Typography variant="subtitle2">
                Sign up on the internal platform
              </Typography>
                    </Box>
              <RegisterNewUserForm /> 
              
              <Typography gutterBottom style={{textAlign:'center',
            marginTop:'2%'
            }}> 
            
            
            Already Have an account?   <Link component={RouterLink} to ='/auth/login'> Login Here</Link> </Typography>
              <Divider className={classes.divider} />

                    </CardContent>
              </Card>
                </Grid>

              </Grid>


            </Page>

        </div>
       
    </div>
  )
}

export default RegisterUser
