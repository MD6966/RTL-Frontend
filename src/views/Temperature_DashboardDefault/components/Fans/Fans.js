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
import axios from 'axios';
import { makeConfig } from 'store/actions';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.light,
    // boxShadow: '0px 11px 14px -7px rgba(0, 0, 0, 0.04), 0px 23px 36px 3px rgba(0, 0, 0, 0.04), 0px 9px 44px 8px rgba(0, 0, 0, 0.04)',
    // borderRadius: '30px'
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

const Fans = (props) => {
  const { className, sensor, index, key, fan, fan_id, ...rest } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const [animate, toggleAnimate] = useState(true);
  const [status, setStatus] = useState(fan.status);
//   const temp = useSelector((state) => state.temp.temp);


const handleFan = async () => {

  // const config = {
  //   headers: {
  //     'content-type': 'application/json'
  //   }
  // };
  const config = await makeConfig('application/json');

    if(fan.status === true)
        {
          const res = await axios.post(`${process.env.REACT_APP_URL}temperaturesystem/control`,{module_id: sensor._id, fan_id, fan_status: false} ,config);
        } 
        else if (fan.status === false)
        {
          const res = await axios.post(`${process.env.REACT_APP_URL}temperaturesystem/control`,{module_id: sensor._id, fan_id, fan_status: true} ,config);
        }
    };

  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
      if (fan.status === true ) {
        setStatus('ON');
      }
      else {
        setStatus('OFF');
      }
    
    }, 500);
  }, [fan.status]);

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
          {fan.name}
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
            >{status}</Typography>
          
          </Animated>
        </div>
      </div>

      {
         fan.status === true ? (
            <Avatar className={classes.avatarGreen}>
              {/* <img 
                  height="100%"
                  src="/images/icons/fan.png"
                  width="100%"
                  cursor="pointer"
                  // icon={faPowerOff}
                  onClick={handleFan}
                /> */}
                <FontAwesomeIcon 
                cursor="pointer"
                icon={faPowerOff}
                onClick={handleFan}
                />
          </Avatar> 
         ) : (
            <Avatar className={classes.avatarRed}>
                {/* <img 
                  height="100%"
                  src="/images/icons/fan.png"
                  width="100%"
                  cursor="pointer"
                  // icon={faPowerOff}
                  onClick={handleFan}
                /> */}
                
                <FontAwesomeIcon 
                cursor="pointer"
                icon={faPowerOff}
                onClick={handleFan}
                />
          </Avatar> 
         ) 
      }

      {/* { (
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
        )))))} */}
    </Card>
  );
};

Fans.propTypes = {
  className: PropTypes.string
};

export default Fans;
