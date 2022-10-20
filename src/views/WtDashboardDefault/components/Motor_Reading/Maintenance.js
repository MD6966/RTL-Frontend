/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Animated } from 'react-animated-css';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
import gradients from 'utils/gradients';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { useSnackbar } from 'notistack';
import { set_WtmaintenanceMode} from 'store/actions/wtAction';
import { useDispatch, useSelector } from 'react-redux';
import BuildIcon from '@material-ui/icons/Build';
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
  avatarGreen: {
    backgroundImage: gradients.green,
    height: 48,
    width: 48
  }
}));

const MotorStatus = (props) => {
  const { id } = props;
  const wt = useSelector((state) => state.wt.sensor);
  const index = wt.findIndex((f) => f._id === id);
  const maintenance = useSelector(state => state.wt.sensor[index].maintenance);
  const { className, value, ...rest } = props;
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [animate, toggleAnimate] = useState(true);
  const [s, setS] = useState(null);
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
   
    
    if(maintenance === false){
      setS('On')
      dispatch(set_WtmaintenanceMode(id, 1));
      enqueueSnackbar('Motor Maintenance On', {
        variant: 'success'
      });
    } 
    else if (maintenance === true){
      setS('off')
      dispatch(set_WtmaintenanceMode(id, 0));
      enqueueSnackbar('Motor Maintenance Off', {
        variant: 'success'
      });
    }
   
    setOpen(false);
  };

  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
      
      if (maintenance === true) {
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
         Maintenance Mode : {s}
        </Typography>
        <div className={classes.details}>
          <Animated
            animationIn="bounceIn"
            animationInDuration={400}
            animationOut="fadeOut"
            animationOutDuration={400}
            isVisible={animate}
          />
          <Dialog
            aria-labelledby="form-dialog-title"
            onClose={handleClose}
            open={open}
          >
            <DialogContent>
              <DialogContentText>Would you like maintenance of your motor?.</DialogContentText>
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
       
      { maintenance === true ? (
        <Avatar className={classes.avatarGreen}>
          <BuildIcon 
            cursor="pointer"
            icon={BuildIcon}
            onClick={handleSubmit} 
          />
        </Avatar>
      ) : (
        <Avatar className={classes.avatarRed}>
          <BuildIcon
            cursor="pointer"
            icon={BuildIcon}
            onClick={handleClickOpen} 
          />
        </Avatar>
      )}
    </Card>
  );
};

MotorStatus.propTypes = {
  className: PropTypes.string
};

export default MotorStatus;
