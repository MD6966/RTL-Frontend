/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar, LinearProgress } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGasPump } from '@fortawesome/free-solid-svg-icons';
import { Animated } from 'react-animated-css';
import gradients from 'utils/gradients';
import { Label } from 'components';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.light
  },
  content: {
    flexGrow: 1
  },
  details: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  label: {
    marginLeft: theme.spacing(1),
    backgroundColor: theme.palette.error.main
  },
  progress: {
    margin: theme.spacing(0, 1),
    flexGrow: 1
  },
  avatar: {
    backgroundImage: gradients.orange,
    height: 48,
    width: 48
  }
}));

const PM10 = (props) => {
  const { className, value, ...rest } = props;
  const classes = useStyles();
  const [animate, toggleAnimate] = useState(true);
  const [f, setF] = useState(null);

  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
      setF(value);
    }, 500);
  }, [value]);

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
          PM<sub>(10)</sub>
        </Typography>
        <div className={classes.details}>
          <Animated
            animationIn="bounceIn"
            animationInDuration={400}
            animationOut="fadeOut"
            animationOutDuration={400}
            isVisible={animate}
          >
            <Typography variant="h3">{f}
              <Label
                className={classes.label}
                color="error"
              >
               µg/m3
              </Label>
            </Typography>
          </Animated>
        </div>
      </div>
      <Avatar className={classes.avatar}>
        <img
          height="30"
          src="images\icons\env1.png"
          width="30"
        />
      </Avatar>
    </Card>
  );
};

PM10.propTypes = {
  className: PropTypes.string
};

export default PM10;
