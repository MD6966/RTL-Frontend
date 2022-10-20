/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar, CircularProgress } from '@material-ui/core';
import { Label } from 'components';
import gradients from 'utils/gradients';
// import { Animated } from 'react-animated-css';
import FormDialog_LowerLmt from './FormDialog2';
import { useSelector } from 'react-redux';
import { BsFillBrightnessHighFill } from 'react-icons/bs';


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

const DimLevelThreshold = (props) => {
  const { className, id, type, dim_level, sensor, ...rest } = props;
  const classes = useStyles();
  const [animate, toggleAnimate] = useState(true);
  const routineLoading = useSelector(state => (state.hl.routineLoading));

  const [dim, setDim] = useState(null);
  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
      setDim(dim_level);
    }, 500);
  }, [dim_level]);
  
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
         Brightness 
        </Typography>
        <div className={classes.details}>
          {routineLoading ? (
            <CircularProgress
              color="secondary"
              size={20}
            />
          ):(
            <>
              {sensor.dim_high_routineEnable === true || sensor.dim_medium_routineEnable === true || sensor.dim_low_routineEnable === true ? (
                <Typography
                  variant="h3"
                >{sensor.routine_dimLevel} % 
                  <Label
                    className={classes.label}
                    color="error"
                  /> 
                </Typography>
              ) : (
                <Typography
                  variant="h3"
                >{dim} % 
                  <Label
                    className={classes.label}
                    color="error"
                  /> 
                </Typography>
              )}
            </>
          )}
          <FormDialog_LowerLmt
            id={id}
            sensor={sensor}
            type={type}
          />
        </div>
      </div>
      <Avatar className={classes.avatar}>
        <BsFillBrightnessHighFill />
      </Avatar>
    </Card>
  );
};

DimLevelThreshold.propTypes = {
  className: PropTypes.string,
  threshold: PropTypes.number
};

export default DimLevelThreshold;
