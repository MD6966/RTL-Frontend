import React, { useState, useEffect } from 'react';
import { Animated } from 'react-animated-css';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
import gradients from 'utils/gradients';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThermometerHalf } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  details: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
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
  avatarBlue: {
    backgroundImage: gradients.blue,
    height: 48,
    width: 48
  }
}));

const TempDisplay = (props) => {
  const { className, temperature, ...rest } = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <div>
        <Typography component="h3" gutterBottom variant="overline">
          Temperauture (°C)
        </Typography>
        <div className={classes.details}>
          <Typography variant="h3">{temperature} °C</Typography>
        </div>
      </div>
      <Avatar className={classes.avatarRed}>
        <FontAwesomeIcon icon={faThermometerHalf} />
      </Avatar>
    </Card>
  );
};

TempDisplay.propTypes = {
  className: PropTypes.string
};

export default TempDisplay;
