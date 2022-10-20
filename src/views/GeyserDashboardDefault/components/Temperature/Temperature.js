/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import gradients from 'utils/gradients';
// import { Animated } from 'react-animated-css';
import { faThermometerHalf } from '@fortawesome/free-solid-svg-icons';

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
  avatar: {
    backgroundImage: gradients.orange,
    height: 48,
    width: 48
  }
}));

const Temperature = (props) => {
  const { className, value, sensor, type, ...rest } = props;
  const classes = useStyles();
  const [animate, toggleAnimate] = useState(true);
  const [s, setS] = useState(null);

  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
      setS(value)
    }, 500);
  }, [value]);

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
        Temperature
        </Typography>
        <div className={classes.details}>
            <Typography
              variant="h3"
            >{value} °C</Typography>
        </div>
      </div>
      <Avatar className={classes.avatar}>
        <FontAwesomeIcon icon={faThermometerHalf} style={{color: '#000000'}} />
      </Avatar>
      
     
    </Card>
  );
};

Temperature.propTypes = {
  className: PropTypes.string
};

export default Temperature;
