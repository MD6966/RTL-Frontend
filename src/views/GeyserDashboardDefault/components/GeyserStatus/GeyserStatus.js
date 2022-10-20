/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
import { Animated } from 'react-animated-css';
import gradients from 'utils/gradients';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { Dialog } from '@material-ui/core';
import { DialogTitle } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import { DialogContentText } from '@material-ui/core';
import { DialogActions } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { setGeyserControl } from 'store/actions/geyserAction';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { Tooltip } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.light
  },
  content: {
    flexGrow: 1
  },
  details: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  progress: {
    margin: theme.spacing(0, 1),
    flexGrow: 1
  },
  avatar: {
    backgroundImage: gradients.orange,
    height: 48,
    width: 48
  },
  avatarRed: {
    backgroundImage: gradients.red,
    height: 48,
    width: 48
  },
  avatarGreen: {
    backgroundImage: gradients.green,
    height: 48,
    width: 48
  },
  label: {
    marginLeft: theme.spacing(1),
    backgroundColor: theme.palette.error.main
  }
}));

const GeyserStatus = (props) => {
  const { className, status, sensor, type, control_update, ...rest } = props;
  const classes = useStyles();
  const [animate, toggleAnimate] = useState(true);
  const [s, setS] = useState(null);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const geyserLoading = useSelector((state) => state.geyser.moduleloading);
  const [l, setL] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const loading = () => {
    console.log("loading function Called")
    geyserLoading.map( (obj) => {
      if(obj._id === sensor._id)
      {
        setL(obj.isLoading);
        console.log("If+++++",l)
      }
      else
      {
        setL(false);
        console.log("else+++++",l)
      }
     })
  }
  const handleSubmit = () => {
    // console.log("++++++++",l)
    
    setL(true);
    if(sensor.geyser_control === 0){
    const res = dispatch(setGeyserControl(sensor._id, 1));
    //  loading()
     console.log(res);
      if(res)
      {
        console.log(res);
        setTimeout(() => {
        setL(false);
      }, 1500);
      }
      else
      {
        console.log("else",res)
        setTimeout(() => {
        setL(false);
      }, 1500);
      }
      
    } 
    else if (sensor.geyser_control === 1){
      // console.log(sensor._id);
      const res = dispatch(setGeyserControl(sensor._id, 0));
      console.log(res);
      if(res)
      {
        console.log(res);
        setTimeout(() => {
        setL(false);
      }, 700);
      }
      else
      {
        console.log("else",res)
        setTimeout(() => {
        setL(false);
      }, 700);
      }
    }
   
    setOpen(false);
  };
  // useEffect ( () => {
  //   console.log("useEffect",id)
  //   geyserLoading.map( (obj) => {
  //     if(obj._id === id)
  //     {
  //       setL(obj.isLoading);
  //       console.log("If+++++",l)
  //     }
  //     else
  //     {
  //       setL(obj.isLoading);
  //       console.log("else+++++",l)
  //     }
  //     // { obj._id === id 
  //     //  ? 
  //     //     setL(obj.isLoading)

  //     //  : 
  //     //   setL(obj.isLoading);
  //     //   console.log("else ++++++++++++-----------",obj.isLoading,)
         
  //     // } 
  //    })
  // })

  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
      if (status === true) {
        setS('On');
      } else {
        setS('Off');
      }
    }, 500);
  }, [status]);

  return (
    
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.content}>
        <Typography
          component="h3"
          gutterBottom
          variant="overline"
        > 
        Geyser Status
        </Typography>
        <div className={classes.details}>
        <Animated
            animationIn="bounceIn"
            animationInDuration={400}
            animationOut="fadeOut"
            animationOutDuration={400}
            isVisible={animate}
          >
          <Typography
            variant="h3"
          >{s}
          </Typography>
          </Animated>
          <Dialog
            aria-labelledby="form-dialog-title"
            onClose={handleClose}
            open={open}
          >
            <DialogTitle id="form-dialog-title">Geyer Status</DialogTitle>
            <DialogContent>
              <DialogContentText>Do you want to OFF Geyser?</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                color="primary"
                onClick={handleClose}
              >
            Cancel
              </Button>
              <Button
                color="primary"
                onClick={handleSubmit}
              >
            Disable
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
      {
        sensor.routine_enable === true ? (
          <Tooltip
            arrow
            title="Geyser Contolling is disabled because Schedulling is enabled"
            >
            <Avatar className={classes.avatarRed}>
              {
                l ? (
                  <CircularProgress
                    color="inherit"
                    size={25}
                  />
                ) : (
                  sensor.geyser_control === 1 ? (
                    <Avatar className={classes.avatarGreen}>
                      <FontAwesomeIcon 
                        // cursor="pointer"
                        icon={faPowerOff}
                        // onClick={handleClickOpen} 
                      />
                    </Avatar>
                  ) : (
                    <Avatar className={classes.avatarRed}>
                      <FontAwesomeIcon
                        // cursor="pointer"
                        icon={faPowerOff}
                        // onClick={handleSubmit}
                        
                      />
                    </Avatar>
                  )
                )
              }
            </Avatar>
          </Tooltip>
        ) : (
          <>
          <Avatar className={classes.avatarRed}>
              {
                l ? (
                  <CircularProgress
                    color="inherit"
                    size={25}
                  />
                ) : (
                  sensor.geyser_control === 1 ? (
                    <Avatar className={classes.avatarGreen}>
                      <FontAwesomeIcon 
                        cursor="pointer"
                        icon={faPowerOff}
                        onClick={handleClickOpen} 
                      />
                    </Avatar>
                  ) : (
                    <Avatar className={classes.avatarRed}>
                      <FontAwesomeIcon
                        cursor="pointer"
                        icon={faPowerOff}
                        onClick={handleSubmit}
                        
                      />
                    </Avatar>
                  )
                )
              }
            </Avatar>
          </>
        )
      }
      
    </Card>
  );
};

GeyserStatus.propTypes = {
  className: PropTypes.string
};

export default GeyserStatus;
