import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
import WbIncandescentOutlinedIcon from '@material-ui/icons/WbIncandescentOutlined';
import gradients from 'utils/gradients';
import { Animated } from 'react-animated-css';

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
  },
  avatarYellow: {
    backgroundImage: gradients.orange,
    height: 48,
    width: 48
  },
  avatarOff: {
    backgroundImage: gradients.grey,
    height: 48,
    width: 48
  }
}));

const ColorStatus = (props) => {
  const { className, color, ...rest } = props;
  const classes = useStyles();
  const [animate, toggleAnimate] = useState(true);
  const [c, setC] = useState(null);

  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
      setC(color);
    }, 500);
  }, [color]);

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <div>
        <Typography component="h3" gutterBottom variant="overline">
          Color
        </Typography>
        <div className={classes.details}>
          <Animated
            animationIn="bounceIn"
            animationOut="fadeOut"
            animationInDuration={400}
            animationOutDuration={400}
            isVisible={animate}>
            <Typography variant="h3">{c}</Typography>
          </Animated>
        </div>
      </div>
      {color === 'red' ? (
        <Avatar className={classes.avatarRed}>
          <WbIncandescentOutlinedIcon />
        </Avatar>
      ) : color === 'green' ? (
        <Avatar className={classes.avatarGreen}>
          <WbIncandescentOutlinedIcon />
        </Avatar>
      ) : color === 'yellow' ? (
        <Avatar className={classes.avatarYellow}>
          <WbIncandescentOutlinedIcon />
        </Avatar>
      ) : color === 'off' ? (
        <Avatar className={classes.avatarOff}>
          <WbIncandescentOutlinedIcon />
        </Avatar>
      ) : null}
    </Card>
  );
};

ColorStatus.propTypes = {
  className: PropTypes.string
};

export default ColorStatus;
