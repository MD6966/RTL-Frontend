import React, { useState, useEffect } from 'react';
import { Animated } from 'react-animated-css';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
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

const GreenDuration = (props) => {
  const { className, duration, ...rest } = props;
  const classes = useStyles();
  const [animate, toggleAnimate] = useState(true);
  const [d, setD] = useState(null);

  useEffect(() => {
    toggleAnimate(false);

    setTimeout(() => {
      toggleAnimate(true);
      if (duration.includes(':')) {
        let time = duration.split(':');
        setD(`${time[0]} Hrs ${time[1]} Mins`);
      } else {
        setD(`${duration} Mins`);
      }
    }, 500);
  }, [duration]);

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <div>
        <Typography component="h3" gutterBottom variant="overline">
          Green Light Duration
        </Typography>
        <div className={classes.details}>
          <Animated
            animationIn="bounceIn"
            animationOut="fadeOut"
            animationInDuration={400}
            animationOutDuration={400}
            isVisible={animate}>
            <Typography variant="h3">{d}</Typography>
          </Animated>
        </div>
      </div>
      <Avatar className={classes.avatarGreen}>
        <CameraAltIcon />
      </Avatar>
    </Card>
  );
};

GreenDuration.propTypes = {
  className: PropTypes.string
};

export default GreenDuration;
