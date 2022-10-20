/* eslint-disable linebreak-style */
import React, { useState} from 'react';
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
import { setFanMode } from 'store/actions';
 
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

const FanAutoMode = (props) => {
  const { className, value, ...rest } = props;
  const { sensor } = props;
  const id = sensor._id;
  const temp = useSelector((state) => state.temp.temp);
  const index = temp.findIndex((f) => f._id === id);
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
    
    if(temp[index].fan_auto === false){
      dispatch(setFanMode(temp[index]._id, true));
    } 
    else if (temp[index].fan_auto === true){
      dispatch(setFanMode(temp[index]._id, false));
    }
   
    setOpen(false);
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div>
        <Typography
          // className={classes.headingText}
          component="h3"
          gutterBottom
          variant="overline"
        >
         Fan Mode
        </Typography>
        <div className={classes.details}>
          <Animated
            animationIn="bounceIn"
            animationInDuration={400}
            animationOut="fadeOut"
            animationOutDuration={400}
            isVisible={animate}
          >
            { temp[index].fan_auto === true ? (
              <Typography
                variant="h3"
              > Automatic </Typography>
            ) : (
              <Typography
                variant="h3"
              > Manual </Typography>
            )}
            
          </Animated>
          <Dialog
            aria-labelledby="form-dialog-title"
            onClose={handleClose}
            open={open}
          >
            <DialogTitle id="form-dialog-title">Fan Mode</DialogTitle>
            <DialogContent>
              <DialogContentText>Do you want to Disable Fan Mode - Automatice?</DialogContentText>
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
        temp[index].fan_auto === true ? (
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

      }
    </Card>
  );
};

FanAutoMode.propTypes = {
  className: PropTypes.string
};

export default FanAutoMode;