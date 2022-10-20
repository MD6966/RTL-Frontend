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
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';


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

const SupplySource = (props) => {
  const { className, value, sensor, type, ...rest } = props;
  const classes = useStyles();
  const [animate, toggleAnimate] = useState(true);
  const [s, setS] = useState(null);

  useEffect(() => {
    // console.log(sensor)
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
      setS(sensor.supply_mode)
    }, 500);
  }, [sensor.supply_mode]);

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
        Source
        </Typography>
        <div className={classes.details}>
            <Typography
              variant="h3"
            > {s} </Typography>
        </div>
      </div>
      { sensor.supply_mode === "Gas" ? (
        <Avatar className={classes.avatar}>
        <img
          height="30"
          src="images\icons\burner.png"
          width="30"
          alt="burner"
        />
      </Avatar>
      ) : sensor.supply_mode === "Electric" ? (
        <Avatar className={classes.avatar}>
        <img
          height="25"
          src="images\icons\current.png"
          width="25"
        />
      </Avatar>
      ) : sensor.supply_mode === "Hybrid" ? (
        <Avatar className={classes.avatar}>
        <SettingsInputAntennaIcon />
      </Avatar>
      ) : null
      }
     
     
    </Card>
  );
};

SupplySource.propTypes = {
  className: PropTypes.string
};

export default SupplySource;
