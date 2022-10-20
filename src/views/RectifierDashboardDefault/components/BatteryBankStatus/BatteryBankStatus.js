/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
import gradients from 'utils/gradients';
import { Animated } from 'react-animated-css';
import { LinearProgress } from '@material-ui/core';
import BatteryFullIcon from '@material-ui/icons/BatteryFull';

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
  },
  content: {
    flexGrow: 1
  },
  avatarGreen: {
    backgroundImage: gradients.green,
    height: 48,
    width: 48
  },
  avatarRed: {
    backgroundImage: gradients.red,
    height: 48,
    width: 48
  },
  progress: {
    margin: theme.spacing(0, 1),
    flexGrow: 1
  },
  label: {
    marginLeft: theme.spacing(1),
    backgroundColor: theme.palette.error.main
  }
}));

const BatteryBankStatus = (props) => {
  const { className, status, sensor, value, ...rest } = props;
  const classes = useStyles();
  const [animate, toggleAnimate] = useState(true);
  const [s, setS] = useState(null);
  const [v, setV] = useState(null);

  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
      setS(status)
      setV(value)
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
          Battery Bank Status (Voltage/Percentage)
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
            >{value} V / {status}%  
            </Typography>
          </Animated>
          <LinearProgress
            className={classes.progress}
            color="secondary"
            value={status}
            variant="determinate"
          />
        </div>
      </div>
      
      <Avatar className={classes.avatarGreen}>
        <BatteryFullIcon />
      </Avatar>
    </Card>
  );
};

BatteryBankStatus.propTypes = {
  className: PropTypes.string
};

export default BatteryBankStatus;
