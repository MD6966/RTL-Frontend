/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Animated } from 'react-animated-css';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar, CircularProgress } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import gradients from 'utils/gradients';
import Button from '@material-ui/core/Button'; 
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { set_Tw_forceMotor} from 'store/actions/tubewellAction'; 
import Tooltip from '@material-ui/core/Tooltip';


 
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundImage: 'linear-gradient(to left, #c31432, #a10043, #780049, #4d0845, #240b36)'
  },
  details: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingTop: '10px'
  },
  label: {
    marginLeft: theme.spacing(1)
  },
  avatarRed: {
    backgroundImage: gradients.red,
    height: 48,
    width: 48
  },
  avatarBlue: {
    backgroundImage: gradients.blue,
    height: 48,
    width: 48
  },
  avatarGreen: {
    backgroundImage: gradients.green,
    height: 48,
    width: 48
  },
  headingText: {
    fontSize: '16px'
  }
}));

const MotorStatus = (props) => {
  const { className, value, sensor, ...rest } = props;
  const { id } = props;
  const tw = useSelector((state) => state.tw.tubewell);
  const index = tw.findIndex((f) => f._id === id);
  // const forceMotor  = useSelector((state) => state.tw.tubewell[index].forceMotor);
  const MotorLoading = useSelector((state) => state.tw.motorLoading);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [animate, toggleAnimate] = useState(true);
  const [s, setS] = useState(null);
  const dispatch = useDispatch();
  const [motor, setmotor] = useState(0);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => { 
    
    if(tw[index].motor === 0){
      setmotor(1)
      setS('On')
      dispatch(set_Tw_forceMotor(tw[index]._id, 1));
    } 
    else if (tw[index].motor === 1){
      setmotor(0);
      setS('Off')
      dispatch(set_Tw_forceMotor(tw[index]._id, 0));
    }
   
    setOpen(false);
  };
  
  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
      
      if (value === 1) {
        setS('ON');
      } else {
        setS('OFF');
      }
    
    }, 500);
  }, [value]);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div>
        <Typography
          className={classes.headingText}
          component="h3"
          gutterBottom
          style={{color: '#ffffff'}}
          variant="overline"
        >
         Hydro Pump Status
        </Typography>
        <div className={classes.details}>
          <Animated
            animationIn="bounceIn"
            animationInDuration={400}
            animationOut="fadeOut"
            animationOutDuration={400}
            isVisible={animate}
          >
            { tw[index].motor === 1 ? (
              <Typography
                style={{color: '#ffffff'}}
                variant="h3"
              > ON </Typography>
            ) : (
              <Typography
                style={{color: '#ffffff'}}
                variant="h3"
              > OFF </Typography>
            )}
            
          </Animated>
          
          <Dialog
            aria-labelledby="form-dialog-title"
            onClose={handleClose}
            open={open}
          >
            <DialogTitle id="form-dialog-title">Force Control Hydro Pump </DialogTitle>
            <DialogContent>
              <DialogContentText>Automatic switching would be turned off, you have to turn off Hydro Pump manually.</DialogContentText>
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
            Start
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
      
      {/* {
        forceMotor === true && sensor.Ia >= sensor.I_lwrLmt ? (
          <Typography
            style={{color: '#ffffff'}}
            variant="h6"
          >
          Force Hydro Pump :<span style={{fontWeight: 'bold'}}> ON </span></Typography>) : 
          (<Typography style={{color: '#ffffff'}}>Force Hydro Pump :<span style={{fontWeight: 'bold'}}> OFF </span></Typography>)
          
      } */}

      {
        (sensor.fillLevel >= sensor.fillLevel_upperLmt) && (sensor.auto === true) ? (
          <Tooltip
            arrow
            title="Hydro Pump Contolling is disabled because Fill Level Upper Threshold exceeded."
          >
            { 
              tw[index].motor === 1 ? (
                <Avatar className={classes.avatarGreen}>
                  <FontAwesomeIcon 
                    // cursor="pointer"
                    icon={faPowerOff}
                    // onClick={handleSubmit} 
                  />
                </Avatar>
              ) : (
                <Avatar className={classes.avatarRed}>
                  <FontAwesomeIcon
                    // cursor="pointer"
                    icon={faPowerOff}
                    // onClick={handleClickOpen} 
                  />
                </Avatar>
              )
            }
          </Tooltip>
        ) : (
          <>
            {/* { 
              tw[index].motor === 1 ? (
                <Avatar className={classes.avatarGreen}>
                  {
                    MotorLoading ? (
                      <CircularProgress
                        color="inherit"
                        size={25}
                      />
                    ) : (
                      <FontAwesomeIcon 
                        cursor="pointer"
                        icon={faPowerOff}
                        onClick={handleSubmit}
                      />
                    )
                  }
                </Avatar>
                
              ) : (
                <Avatar className={classes.avatarRed}>
                  <FontAwesomeIcon
                    cursor="pointer"
                    icon={faPowerOff}
                    onClick={handleClickOpen} 
                  />
                </Avatar>
              )
            } */}

            <Avatar className={classes.avatarRed}>
              {
                MotorLoading ? (
                  <CircularProgress
                    color="inherit"
                    size={25}
                  />
                ) : (
                  tw[index].motor === 1 ? (
                    <Avatar className={classes.avatarGreen}>
                      <FontAwesomeIcon 
                        cursor="pointer"
                        icon={faPowerOff}
                        onClick={handleSubmit}
                      />
                    </Avatar>
                  ) : (
                    <Avatar className={classes.avatarRed}>
                      <FontAwesomeIcon
                        cursor="pointer"
                        icon={faPowerOff}
                        onClick={handleClickOpen} 
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

MotorStatus.propTypes = {
  className: PropTypes.string
};

export default MotorStatus;