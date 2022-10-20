/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Animated } from 'react-animated-css';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import gradients from 'utils/gradients';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { set_WtforceMotor} from 'store/actions/wtAction';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.light
  },
  details: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
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
  }
}));

const MotorStatus = (props) => {
  const { className, value, ...rest } = props;
  const { id } = props;
  const wt = useSelector((state) => state.wt.sensor);
  const index = wt.findIndex((f) => f._id === id);
  const fillLevel1 = useSelector((state) => state.wt.sensor[index].fillLevel1);
  const threshold_lowerTank = useSelector((state)=> state.wt.sensor[index].threshold_lowerTank);
  const maintenance = useSelector((state)=> state.wt.sensor[index].maintenance);
  const forceMotor  =   useSelector((state) => state.wt.sensor[index].forcedMotor);

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
   
    
    if(motor === 0){
      setmotor(1)
      setS('On')
      dispatch(set_WtforceMotor(id, 1));
    } 
    else if (motor === 1){
      setmotor(0);
      setS('off')
      dispatch(set_WtforceMotor(id, 0));
    }
   
    setOpen(false);
  };

  // const handleChange = (event) => {
  //   // setValue(event.target.value);
  // };

  
  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
      
      if (value === 1) {
        setS('On');
      } else {
        setS('Off');
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
          component="h3"
          gutterBottom
          variant="overline"
        >
         Motor Status
        </Typography>
        <div className={classes.details}>
          <Animated
            animationIn="bounceIn"
            animationInDuration={400}
            animationOut="fadeOut"
            animationOutDuration={400}
            isVisible={animate}
          >
            <Typography variant="h3">{s}</Typography>
          </Animated>
          <Dialog
            aria-labelledby="form-dialog-title"
            onClose={handleClose}
            open={open}
          >
            <DialogTitle id="form-dialog-title">Force Control Motor </DialogTitle>
            <DialogContent>
              <DialogContentText>Automatic switching would be turned off, you have to turn off motor manually.</DialogContentText>
              {/* <TextField
            autoFocus
            fullWidth
            id="threshold"
            label="threshold"
            margin="dense"
            onChange={handleChange}
            type="number"
          /> */}
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
      
      {
        fillLevel1 <= threshold_lowerTank || maintenance === true ? <Typography>Force Motor :<span style={{fontWeight: 'bold'}}> Disable </span></Typography>
          : forceMotor === true ? <Typography>Force Motor :<span style={{fontWeight: 'bold'}}> ON </span></Typography> : 
            <Typography>Force Motor :<span style={{fontWeight: 'bold'}}> OFF </span></Typography>
      }
        
      { 
        fillLevel1 <= threshold_lowerTank || maintenance === true ? (
          <Avatar className={classes.avatarRed}>
            <FontAwesomeIcon 
              icon={faPowerOff}
              opacity="0.2"
              title="Disable"
            // onClick={handleSubmit}
            // cursor="pointer" 
            />
          </Avatar>
        ): (
          value === 1 || motor === 1  ? (
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

        ) }
    </Card>
  );
};

MotorStatus.propTypes = {
  className: PropTypes.string
};

export default MotorStatus;
