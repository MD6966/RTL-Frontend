/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen, faDoorClosed } from '@fortawesome/free-solid-svg-icons';
import gradients from 'utils/gradients';
import { Animated } from 'react-animated-css';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundImage: 'linear-gradient(to left, #8231c8, #6d2aa8, #592389, #461c6b, #34154f)'
  },
  details: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingTop: '13px'
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
  },
  headingText: {
    fontSize: '16px'
  }
}));

const DoorStatus = (props) => {
  const { className, status, ...rest } = props;
  const classes = useStyles();
  const [animate, toggleAnimate] = useState(true);
  const [s, setS] = useState(null);

  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
      if (status === true) {
        setS('Lid Open');
      } else {
        setS('Lid Closed');
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
          style={{color: '#ffffff'}}
          variant="overline"
        >
          Tank Lid Status
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
              style={{color: '#ffffff'}}
              variant="h3"
            >{s}</Typography>
          </Animated>
        </div>
      </div>
      {status === true ? (
        <Avatar className={classes.avatarRed}>
          <FontAwesomeIcon icon={faDoorOpen} />
        </Avatar>
      ) : (
        <Avatar className={classes.avatarGreen}>
          <FontAwesomeIcon icon={faDoorClosed} />
        </Avatar>
      )}
    </Card>
  );
};

DoorStatus.propTypes = {
  className: PropTypes.string
};

export default DoorStatus;
