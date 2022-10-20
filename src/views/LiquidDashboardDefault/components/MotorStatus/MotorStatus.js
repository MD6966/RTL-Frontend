import React, { useState, useEffect } from 'react';
import { Animated } from 'react-animated-css';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import gradients from 'utils/gradients';

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
  avatarGreen: {
    backgroundImage: gradients.green,
    height: 48,
    width: 48
  },
  avatarRed: {
    backgroundImage: gradients.red,
    height: 48,
    width: 48
  }
}));

const MotorStatus = (props) => {
  const { className, motor, ...rest } = props;

  const classes = useStyles();
  const [animate, toggleAnimate] = useState(true);
  const [m, setM] = useState(null);

  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
      if (motor === 1) {
        setM('On');
      } else {
        setM('Off');
      }
    }, 500);
  }, [motor]);

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <div>
        <Typography component="h3" gutterBottom variant="overline">
          Motor Status
        </Typography>
        <div className={classes.details}>
          <Animated
            animationIn="bounceIn"
            animationOut="fadeOut"
            animationInDuration={400}
            animationOutDuration={400}
            isVisible={animate}>
            <Typography variant="h3">{m}</Typography>
          </Animated>
        </div>
      </div>
      {motor === 0 ? (
        <Avatar className={classes.avatarRed}>
          <FontAwesomeIcon icon={faPowerOff} />
        </Avatar>
      ) : motor === 1 ? (
        <Avatar className={classes.avatarGreen}>
          <FontAwesomeIcon icon={faPowerOff} />
        </Avatar>
      ) : null}
    </Card>
  );
};

MotorStatus.propTypes = {
  className: PropTypes.string
};

export default MotorStatus;
