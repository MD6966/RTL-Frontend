/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
import { Animated } from 'react-animated-css';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import gradients from 'utils/gradients';
import { useDispatch, useSelector } from 'react-redux';
import { set_Switch } from 'store/actions';

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
  content: {
    flexGrow: 1
  },
  details: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingTop: '15px'
  },
  progress: {
    margin: theme.spacing(0, 1),
    flexGrow: 1
  },
  avatar: {
    backgroundImage: gradients.indigo,
    height: 48,
    width: 48
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
  },
  avatarGrey: {
    backgroundImage: gradients.grey,
    height: 48,
    width: 48
  }
}));

const Lights = (props) => {
  const { className, lightstatus, sensor, index, ...rest } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const [animate, toggleAnimate] = useState(true);
  const [light, setLight] = useState(null);
  const street = useSelector((state) => state.hl.light);

  const handleLight = () => {

    if(sensor.lights[index] === '0' &&  (index === 0 || index === 1) && (sensor._id === street[0]._id)){
      dispatch(set_Switch(sensor._id, index, '1'));
    } 
    else if(sensor.lights[index] === '1' &&  (index === 0 || index === 1) && (sensor._id === street[0]._id )){
      dispatch(set_Switch(sensor._id, index,'0'));
    } 
    else if(sensor.lights[index] === '0' ) {
      dispatch(set_Switch(sensor._id, index,'2'));
    }
    else if(sensor.lights[index] === '2' || sensor.lights[index] === '1'){
      dispatch(set_Switch(sensor._id, index, '0'));
    }
  };

  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
      if (lightstatus === '1') {
        setLight('ON');
      } else if (lightstatus === '2') {
        setLight('ON');
      } else {
        setLight('OFF');
      }
    
    }, 500);
  }, [lightstatus]);

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
          Light no {index}
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
            >{light}</Typography>
          
          </Animated>
        </div>
        {(index === 0 || index === 1) && lightstatus === '1' ? (
          <Typography
            style={{marginTop: '7px'}}
            variant="h6"
          >Brightness: 100%</Typography>
        ) : ( lightstatus === '2' ? (
          <Typography
            style={{marginTop: '7px'}}
            variant="h6"
          >Brightness: {sensor.dimLevel}%</Typography>
        ) : ( lightstatus === '1' ? (
          <Typography
            style={{marginTop: '7px'}}
            variant="h6"
          >Brightness: 100%</Typography>
        ) : (
          <Typography
            style={{marginTop: '7px'}}
            variant="h6"
          >Brightness: 0%</Typography>
        )))}
      </div>

      { (
        lightstatus === '1' && (index === 0 || index === 1) && (sensor._id === street[0]._id) ? (
          <Avatar className={classes.avatarGreen}>
            <FontAwesomeIcon 
              // cursor="pointer"
              icon={faPowerOff}
              // onClick={handleLight}
            />
          </Avatar>
        ) : ( lightstatus === '2' && sensor.dimLevel === 100 ? (
          <Avatar className={classes.avatarGreen}>
            <FontAwesomeIcon 
              cursor="pointer"
              icon={faPowerOff}
              onClick={handleLight}
            />
          </Avatar>          
        ) : ( lightstatus === '2' ? (
          <Avatar className={classes.avatarGrey}>
            <FontAwesomeIcon 
              cursor="pointer"
              icon={faPowerOff}
              onClick={handleLight}
            />
          </Avatar>
        ) : ( lightstatus === '1' ? (
          <Avatar className={classes.avatarGreen}>
            <FontAwesomeIcon 
              cursor="pointer"
              icon={faPowerOff}
              onClick={handleLight}
            />
          </Avatar>
        ) : (
          <Avatar className={classes.avatarRed}>
            <FontAwesomeIcon 
              cursor="pointer"
              icon={faPowerOff}
              onClick={handleLight}
            />
          </Avatar>
        )))))}

      {/* { (
        (lightstatus === '1' || lightstatus === '2') && (index === 0 || index === 1) && (sensor._id === street[0]._id) ? (
          <Avatar className={classes.avatarGreen}>
            <FontAwesomeIcon 
              // cursor="pointer"
              icon={faPowerOff}
              // onClick={handleLight}
            />
          </Avatar>
        ) : ( lightstatus === '2' && sensor.dimLevel === 100 ? (
          <Avatar className={classes.avatarGreen}>
            <FontAwesomeIcon 
              cursor="pointer"
              icon={faPowerOff}
              onClick={handleLight}
            />
          </Avatar>          
        ) : ( lightstatus === '2' ? (
          <Avatar className={classes.avatarGrey}>
            <FontAwesomeIcon 
              cursor="pointer"
              icon={faPowerOff}
              onClick={handleLight}
            />
          </Avatar>
        ) : ( lightstatus === '1' ? (
          <Avatar className={classes.avatarGreen}>
            <FontAwesomeIcon 
              cursor="pointer"
              icon={faPowerOff}
              onClick={handleLight}
            />
          </Avatar>
        ) : (
          <Avatar className={classes.avatarRed}>
            <FontAwesomeIcon 
              cursor="pointer"
              icon={faPowerOff}
              onClick={handleLight}
            />
          </Avatar>
        )))))} */}
    </Card>
  );
};

Lights.propTypes = {
  className: PropTypes.string
};

export default Lights;
