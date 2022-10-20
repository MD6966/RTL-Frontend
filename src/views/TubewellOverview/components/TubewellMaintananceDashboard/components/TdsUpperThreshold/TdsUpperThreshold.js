/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
import { Label } from 'components';
import gradients from 'utils/gradients';
import { Animated } from 'react-animated-css';
import FormDialog_UpperLmt from './FormDialog2';



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
    paddingTop: '10px'
  },
  label: {
    marginLeft: theme.spacing(1)
  },
  avatar: {
    backgroundImage: gradients.blue,
    height: 48,
    width: 48
  },
  headingText: {
    fontSize: '16px'
  }
}));

const TdsUpperThreshold = (props) => {
  const { className, id, threshold, type, time,  ...rest } = props;
  const classes = useStyles();
  const [animate, toggleAnimate] = useState(true);
  const [t, setT] = useState(null);
  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
      setT(threshold);
    }, 500);
  }, [threshold]);

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
          Tds Upper Threshold
        </Typography>
        <div className={classes.details}>
          <Animated
            animationIn="bounceIn"
            animationInDuration={400}
            animationOut="fadeOut"
            animationOutDuration={400}
            isVisible={animate}
          >
            <Typography variant="h3">{t}
              <Label
                className={classes.label}
                color="error"
              /> 
            </Typography>
          </Animated>
          <FormDialog_UpperLmt
            id={id}
            type={type}
          />
        </div>
        <Animated
          animationIn="bounceIn"
          animationInDuration={400}
          animationOut="fadeOut"
          animationOutDuration={400}
          isVisible={animate}
        >
          <Typography
            style={{paddingTop: '20px', fontSize: '10px'}}
          >
            Updated At: {time}
          </Typography>
        </Animated>
      </div>
      <Avatar className={classes.avatar}>
        <img
          alt="O2"
          height="60%"
          src="/images/icons/threshold.png"
          width="60%"
        />
      </Avatar>
    </Card>
  );
};

TdsUpperThreshold.propTypes = {
  className: PropTypes.string,
  threshold: PropTypes.number
};

export default TdsUpperThreshold;
