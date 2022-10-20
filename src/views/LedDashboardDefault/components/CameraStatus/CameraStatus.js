import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
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
  }
}));

const CameraStatus = (props) => {
  const { className, camera, ...rest } = props;

  const classes = useStyles();
  const [animate, toggleAnimate] = useState(true);
  const [c, setC] = useState(null);

  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
      if (camera === 1) {
        setC('On');
      } else {
        setC('Off');
      }
    }, 500);
  }, [camera]);

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <div>
        <Typography component="h3" gutterBottom variant="overline">
          Camera Status
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
      {camera === 0 ? (
        <Avatar className={classes.avatarRed}>
          <CameraAltIcon />
        </Avatar>
      ) : camera === 1 ? (
        <Avatar className={classes.avatarGreen}>
          <CameraAltIcon />
        </Avatar>
      ) : null}
    </Card>
  );
};

CameraStatus.propTypes = {
  className: PropTypes.string
};

export default CameraStatus;
