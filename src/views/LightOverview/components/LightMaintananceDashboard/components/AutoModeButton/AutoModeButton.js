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
import { setRadarMode } from 'store/actions/lightAction'; 
import Tooltip from '@material-ui/core/Tooltip';


 
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.white,
    boxShadow: '0px 11px 14px -7px rgba(0, 0, 0, 0.04), 0px 23px 36px 3px rgba(0, 0, 0, 0.04), 0px 9px 44px 8px rgba(0, 0, 0, 0.04)',
    borderRadius: '30px'
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

const AutoModeButton = (props) => {
  const { className, sensor, ...rest } = props;
  const { id } = props;
  const hl = useSelector((state) => state.hl.light);
  const index = hl.findIndex((f) => f._id === id);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [animate, toggleAnimate] = useState(true);
  const [s, setS] = useState(null);
  const dispatch = useDispatch();
  const [value, setValue] = useState(null);
  const [radar, setRadar] = useState(hl[index].radar_enable);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {

    if(hl[index].radar_enable === false){
      setRadar(true);
      dispatch(setRadarMode(hl[index]._id, true));
    } 
    else if (hl[index].radar_enable === true){
      setRadar(false);
      dispatch(setRadarMode(hl[index]._id, false));
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
          component="h3"
          gutterBottom
          variant="overline"
        >
         Radar Mode
        </Typography>
        <div className={classes.details}>
          <Animated
            animationIn="bounceIn"
            animationInDuration={400}
            animationOut="fadeOut"
            animationOutDuration={400}
            isVisible={animate}
          >
            { hl[index].radar_enable === true ? (
              <Typography
                variant="h3"
              > Enabled </Typography>
            ) : (
              <Typography
                variant="h3"
              > Disabled </Typography>
            )}
            
          </Animated>
          <Dialog
            aria-labelledby="form-dialog-title"
            onClose={handleClose}
            open={open}
          >
            <DialogTitle id="form-dialog-title">Radar Mode</DialogTitle>
            <DialogContent>
              <DialogContentText>Do you want to Disable Radar Mode?</DialogContentText>
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
        (sensor.seg_routineEnable === true || sensor.dim_high_routineEnable === true || sensor.dim_medium_routineEnable === true || sensor.dim_low_routineEnable === true) && (sensor.allRoutines ===  true) ? (
          <> 
            <Tooltip
              arrow
              title="Routine is Enabled currently, Please Disable routine first, then control Radar."
            >
              { 
                hl[index].radar_enable === true ? (
                  <Avatar className={classes.avatarGreen}>
                    <FontAwesomeIcon 
                      cursor="pointer"
                      icon={faPowerOff}
                    // onClick={handleClickOpen}
                    />
                  </Avatar>
                ) : (
                  <Avatar className={classes.avatarRed}>
                    <FontAwesomeIcon
                      cursor="pointer"
                      icon={faPowerOff}
                    // onClick={handleSubmit}
                    />
                  </Avatar>
                )

              }
            </Tooltip>
          </>
        ) : (
          <> 
            { 
              hl[index].radar_enable === true ? (
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
          </>
        )
      }
      
    </Card>
  );
};

AutoModeButton.propTypes = {
  className: PropTypes.string
};

export default AutoModeButton;