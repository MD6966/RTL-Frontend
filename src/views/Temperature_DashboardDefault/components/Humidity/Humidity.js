import React, { useState, useEffect } from 'react';
import { Animated } from 'react-animated-css';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faThermometerHalf } from '@fortawesome/free-solid-svg-icons';
import gradients from 'utils/gradients';
import { WiHumidity } from 'react-icons/wi';

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
  avatar: {
    backgroundImage: gradients.blue,
    height: 48,
    width: 48
  }
}));

const Humidity = (props) => {
  const { className, status, ...rest } = props;

  const classes = useStyles();
  const [animate, toggleAnimate] = useState(true);
  const [h, setH] = useState(null);

  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
      setH(status);
    }, 500);
  }, [status]);

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <div>
        <Typography component="h3" gutterBottom variant="overline">
          Humidity
        </Typography>
        <div className={classes.details}>
          <Animated
            animationIn="bounceIn"
            animationOut="fadeOut"
            animationInDuration={400}
            animationOutDuration={400}
            isVisible={animate}>
            <Typography variant="h3">{h} %</Typography>
          </Animated>
        </div>
      </div>
      <Avatar className={classes.avatar}>
      <WiHumidity style={{width: '30px', height:'30px'}} /> 
      </Avatar> 
    </Card>
  );
};

Humidity.propTypes = {
  className: PropTypes.string
};

export default Humidity;
