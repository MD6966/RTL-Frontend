/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import gradients from 'utils/gradients';
import { Animated } from 'react-animated-css';
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

const RectificationStatus = (props) => {
  const { className, status, sensor, type, ...rest } = props;
  const classes = useStyles();
  const [animate, toggleAnimate] = useState(true);
  const [s, setS] = useState(null);
  const [playing, toggle] = useAudio(url);

  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
      if ( status === 'Down') {
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
          Rectification Status
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
              status === 'Down' ? (
                <Blink
                  color="red"
                  fontSize="25px"
                  fontWeight="600"
                  text="Down"

                />
              ) : (
                <Typography
                  variant="h3"
                >Up</Typography>
              )
            }
          </Animated>
        </div>
      </div>

      {
        status === 'Up' ? (
          <Avatar className={classes.avatarGreen}>
            <FontAwesomeIcon icon={faPowerOff} />
          </Avatar>
        ) : (
          <Avatar className={classes.avatarRed}>
            <FontAwesomeIcon icon={faPowerOff} />
          </Avatar>
        )
      }
    </Card>
  );
};

RectificationStatus.propTypes = {
  className: PropTypes.string
};

export default RectificationStatus;
