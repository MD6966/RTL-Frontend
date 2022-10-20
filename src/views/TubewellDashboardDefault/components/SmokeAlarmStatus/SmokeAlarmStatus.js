/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Animated } from 'react-animated-css';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
import gradients from 'utils/gradients';
import AddAlert from '@material-ui/icons/AddAlert'
import Blink from 'react-blink-text';

let url = require('../../../../1234.mp3');

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.white
  },
  details: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingTop: '12px'
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
  },
  headingText: {
    fontSize: '16px'
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

const SmokeAlarmStatus = (props) => {
  const { className, status, ...rest } = props;
  const [playing, toggle] = useAudio(url);

  const classes = useStyles();
  const [animate, toggleAnimate] = useState(true);
  const [s, setS] = useState(null);

  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
      if (status === true) {
        setS('ON');
        toggle();
      } else {
        setS('OFF');
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
          className={classes.headingText}
          component="h3"
          gutterBottom
          variant="overline"
        >
          Fire Alarm Status
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
              s === 'ON' ? (
                <Blink
                  color="red"
                  fontSize="25px"
                  fontWeight="600"
                  text="ON"

                />
              ) : (
                <Typography
                  variant="h3"
                >OFF</Typography>
              )
            }
          </Animated>
        </div>
      </div>
      {status === true ? (
        <Avatar className={classes.avatarRed}>
          <AddAlert />
        </Avatar>
        
      ) : (
        <Avatar className={classes.avatarGreen}>
          <AddAlert />
        </Avatar>
      )}
    </Card>
  );
};

SmokeAlarmStatus.propTypes = {
  className: PropTypes.string
};

export default SmokeAlarmStatus;
