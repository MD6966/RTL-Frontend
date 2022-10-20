/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
import gradients from 'utils/gradients';
import { Animated } from 'react-animated-css';
import { Power, PowerOff } from '@material-ui/icons';
import Blink from 'react-blink-text';

let url = require('../../../../1234.mp3');

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

const useAudio = () => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);  

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  },
  [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const BatteryStatus = (props) => {
  const { className, status, sensor, type, ...rest } = props;
  const classes = useStyles();
  const [animate, toggleAnimate] = useState(true);
  const [s, setS] = useState(null);
  const [playing, toggle] = useAudio(url);

  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
      if ( status === 'Disconnected') {
        setS(status)
        toggle();
      }
    }, 500);
  }, [status]);

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
          Battery Bank Connection Status
        </Typography>
        <div className={classes.details}>
          <Animated
            animationIn="bounceIn"
            animationInDuration={400}
            animationOut="fadeOut"
            animationOutDuration={400}
            isVisible={animate}
          >
            {
              status === 'Disconnected' ? (
                <Blink
                  color="red"
                  fontSize="25px"
                  fontWeight="600"
                  text="Disconnected"

                />
              ) : (
                <Typography
                  variant="h3"
                >Connected</Typography>
              )
            }
          </Animated>
        </div>
      </div>
      {
        status === 'Connected' ? (
          <Avatar className={classes.avatarGreen}>
            <Power />
          </Avatar>
        ) : (
          <Avatar className={classes.avatarRed}>
            <PowerOff />
          </Avatar>
        )
      }
    </Card>
  );
};

BatteryStatus.propTypes = {
  className: PropTypes.string
};

export default BatteryStatus;
