/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Animated } from 'react-animated-css';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import gradients from 'utils/gradients';
import AddAlert from '@material-ui/icons/AddAlert'
import Blink from 'react-blink-text';
import { gas_alarm } from 'store/actions/gasAction';
import { useDispatch } from 'react-redux';

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

const useAudio = (url,alarm) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);  
  console.log("playing_status", playing);

  const toggle = () => setPlaying(!playing);
  console.log("audio",alarm)
  useEffect(() => {
    playing ? audio.play() : setPlaying(alarm);
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

const GasAlarm = (props) => {
  const { className, alarm, sensor, ...rest } = props;
  const [playing, toggle] = useAudio(url, alarm);

  const classes = useStyles();
  const dispatch = useDispatch();
  const [animate, toggleAnimate] = useState(true);
  const [a, setA] = useState(null);

  const alarm_handle = () => {
    if(alarm === true ){
      // toggle();
      dispatch(gas_alarm(sensor._id, false));
    }
    else if (alarm === false) {
      // toggle();
      dispatch(gas_alarm(sensor._id, true));
    }
  }

  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
      if (alarm === true) {
        setA('ON');
        toggle();
      } else {
        setA('OFF');
      }
    }, 500);
  }, [alarm]);

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
          style={{marginBottom: '10px'}}
        >
          Gas Alarm Status
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
              a === 'ON' ? (
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
      {alarm === true ? (
        <Avatar className={classes.avatarRed}>
          <AddAlert cursor="pointer" onClick={alarm_handle} />
        </Avatar>
        
      ) : (
        <Avatar className={classes.avatarGreen}>
          <AddAlert cursor="pointer" onClick={alarm_handle} />
        </Avatar>
      )}
    </Card>
  );
};

GasAlarm.propTypes = {
  className: PropTypes.string
};

export default GasAlarm;
