/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar, LinearProgress, Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGasPump } from '@fortawesome/free-solid-svg-icons';
import { Animated } from 'react-animated-css';
import gradients from 'utils/gradients';
import { Label } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { resetButton } from 'store/actions/emAction';
import { useSnackbar } from 'notistack';

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
  label: {
    marginLeft: theme.spacing(1),
    backgroundColor: theme.palette.error.main
  },
  details: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
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

const Units = (props) => {
  const { className, value, sensor, time, ...rest } = props;
  const classes = useStyles();
  let id = sensor._id;
  const energy = useSelector((state) => state.em.sensor);
  const index = energy.findIndex((f) => f._id === id);
  const dispatch = useDispatch();
  const [animate, toggleAnimate] = useState(true);
  const { enqueueSnackbar } = useSnackbar();
  const [f, setF] = useState(null);
  const [status, setStatus] = useState(false);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
      setF(value);
    }, 500);
  }, [value]);

  const handleReset = () => {
    if (status === false) {
      setStatus(true)
      dispatch(resetButton(id, true));
    }
    enqueueSnackbar('Units has been Reset Successfully', {
      variant: 'success'
    });
    setOpen(false);
  }

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
          Units
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
            >{f}
              <Label
                className={classes.label}
                color="error"
              >
              kwh
              </Label>
            </Typography>
          </Animated>
        </div>
        <Animated
          animationIn="bounceIn"
          animationInDuration={400}
          animationOut="fadeOut"
          animationOutDuration={400}
          isVisible={animate}
        >
          <Typography
            style={{paddingTop: '10px', fontSize: '10px'}}
          >
            Updated At: {time}
          </Typography>
        </Animated>
      </div>
      <Button
        color="secondary"
        onClick={handleReset}
        style={{marginRight: '25px'}}
        variant="outlined"
      >Reset
      </Button>
      <Avatar className={classes.avatar}>
        <img
          height="25"
          src="images\icons\units.png"
          width="25"
        />
      </Avatar>
    </Card>
  );
};

Units.propTypes = {
  className: PropTypes.string
};

export default Units;
