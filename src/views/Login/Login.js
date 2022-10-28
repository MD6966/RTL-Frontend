/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {CircularProgress} from '@material-ui/core';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider
} from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import { Page } from 'components';
import gradients from 'utils/gradients';
import { LoginForm } from './components';
import ParticlesContainer from './components/ParticlesContainer';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch } from 'react-redux';
import { forgetPassword } from 'store/actions';
import { Alert } from '@material-ui/lab';
import { useSnackbar } from 'notistack';
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(6, 2)
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
    width: '626px',
    height: '626px',
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
    left: theme.spacing(3),
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
  }
}));

const Login = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [openDialog, setOpenDialog] = useState(false)
  const [value, setvalue]= useState('')
  // const [data ,setData] = useState({
  //   loading:false
  // })

  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const dispatch = useDispatch();
  const handlesubmit = () => {
    
    if(value.length > 0)
    {
      dispatch(forgetPassword(value))
    .then((res) => {
      // console.log('Response is>>>>>>>>>>>', res.res.data.message
      enqueueSnackbar( res.res.data.message,{
        variant: 'success'
      });
      setOpenDialog(false); 
  
    } )
    }
    else {

      enqueueSnackbar( "Please Enter Email",{
        variant: 'error'
      });
      setOpenDialog(true);  
    }

  };
  const handleClose = () => {
    
      setOpenDialog(false);

  };

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }}
    >
      <ParticlesContainer />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      >
        <Page
          className={classes.root}
          title="Login"
        >
          <Card className={classes.card}>
            <CardContent className={classes.content}>
              <LockIcon className={classes.icon} />
              <Typography
                gutterBottom
                variant="h3"
              >
                Sign in
              </Typography>
              <Typography variant="subtitle2">
                Sign in on the internal platform
              </Typography>
              <LoginForm className={classes.loginForm} />
              <Typography gutterBottom style={{textAlign:'center',
            marginTop:'2%'
            }}>
              <div style={{margin:'1%'}}>
            <Button color="primary" onClick={handleClickOpen} > Forgot Password </Button>
            <Dialog open={openDialog} onClose={handleClose}
           fullWidth={true}
            
            >
              <DialogTitle>Forgot Password </DialogTitle>
              <DialogContent >
              <DialogContentText>
                Enter Your Email Below:                                                         
                                                                                           
                                                                                             
              </DialogContentText>
              <TextField type='email' fullWidth value={value} onChange={(e)=> setvalue(e.target.value)} />
              
              <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handlesubmit} color="primary"> Forget 
          {/* {
          data.loading ?
          <CircularProgress
          className={classes.color}
            color="secondary"
            size='1.5rem'
            /> :
            "Forget"
        

         } */}
          
          </Button>
        </DialogActions>

              </DialogContent>


            </Dialog>

            </div>
               New User??  <Link component={RouterLink} to ='/auth/register'> Register Here</Link> </Typography>
              <Divider className={classes.divider} />
            </CardContent>
            <CardMedia
              className={classes.media}
              image="/images/iot.webp"
              title="Cover"
            />
          </Card>
        </Page>
      </div>
    </div>
  );
};

export default Login;
