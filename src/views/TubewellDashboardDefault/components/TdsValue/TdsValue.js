/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Animated } from 'react-animated-css';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
import gradients from 'utils/gradients';

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
  avatarOrange: {
    backgroundImage: gradients.orange,
    height: 48,
    width: 48
  },
  headingText: {
    fontSize: '16px'
  }
}));

const TdsValue = (props) => {
  const { className, value, sensor, ...rest } = props;

  const classes = useStyles();
  const [animate, toggleAnimate] = useState(true);
  const [v, setV] = useState(null);

  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
      setV(value);
    }, 500);
  }, [value]);

  return (
    <>
      <Animated
        animationIn="bounceIn"
        animationInDuration={400}
        animationOut="fadeOut"
        animationOutDuration={400}
        isVisible={animate}
      >
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
          TDS Value
            </Typography>
            <div className={classes.details}>
              {
                v <= sensor.tds_lwrLmt ? (
                  <Typography
                    style={{color: '#c31432'}}
                    variant="h3"
                  >{v}</Typography>
                ) : ( v >= sensor.tds_upperLmt ? (
                  <Typography
                    style={{color: '#c31432'}}
                    variant="h3"
                  >{v}</Typography>
                ) : (
                  <Typography
                    variant="h3"
                  >{v}</Typography>
                ))}
            </div>
          </div>
          <Avatar className={classes.avatarOrange}>
            <img
              height="25"
              src="images\icons\tdsIcon.png"
              width="25"
              alt="tds"
            />
          </Avatar>
        </Card>
      </Animated>
    </>
  );
};

TdsValue.propTypes = {
  className: PropTypes.string
};

export default TdsValue;
