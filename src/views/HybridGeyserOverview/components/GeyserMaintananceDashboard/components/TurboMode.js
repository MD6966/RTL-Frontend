import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
import { Animated } from 'react-animated-css';
import { ToggleButtonGroup } from '@material-ui/lab';
import { ToggleButton } from '@material-ui/lab';
import gradients from 'utils/gradients';
import { useDispatch } from 'react-redux';
import { Tooltip } from '@material-ui/core';
import { faThermometerHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.light,
  },
  rootT: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.error.main,
  },
  details: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  avatar: {
    backgroundImage: gradients.blue,
    height: 48,
    width: 48
  }
}));

const TurboMode = (props) => {
  const { className, sensor, id, threshold, ...rest } = props;
  const classes = useStyles();
  const [animate, toggleAnimate] = useState(true);
  const [alignment, setAlignment] = React.useState('Off');
  const dispatch = useDispatch();

  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
    }, 500);
  }, [500]);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  }; 

  return (
    <>
    {alignment === 'Off' ? (
      <Card {...rest} className={clsx(classes.root, className)}>
      <div>
        <Typography component="h3" gutterBottom variant="overline">
          Turbo Mode
        </Typography>
        <div className={classes.details}>
          <Animated
            animationIn="bounceIn"
            animationOut="fadeOut"
            animationInDuration={400}
            animationOutDuration={400}
            isVisible={animate}>
            <Typography variant="h3">{alignment} </Typography>
          </Animated> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
          <Tooltip title = "Activate at your own risk." >
          <ToggleButtonGroup
            color="success"
            size="small"
            value={alignment}
            exclusive
          onChange={handleChange}
          >
            <ToggleButton value="On">ON</ToggleButton>
            <ToggleButton value="Off">OFF</ToggleButton>
          </ToggleButtonGroup>
        </Tooltip>
        </div>
      </div>
      <Avatar className={classes.avatar}>
      <TrackChangesIcon />
      </Avatar>
     
    </Card>
    ) : (
      <Card {...rest}  className={clsx(classes.rootT, className)}>
      <div>
        <Typography style={{color: "white"}} component="h3" gutterBottom variant="overline">
          Turbo Mode
        </Typography>
        <div className={classes.details}>
          <Animated
            animationIn="bounceIn"
            animationOut="fadeOut"
            animationInDuration={400}
            animationOutDuration={400}
            isVisible={animate}>
            <Typography style={{color: "white"}} variant="h3">{alignment} </Typography>
          </Animated> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
          <Tooltip title = "Activate at your own risk." >
          <ToggleButtonGroup
            color="success"
            value={alignment}
            size="small"
            exclusive
            onChange={handleChange}
          >
            <ToggleButton value="On">ON</ToggleButton>
            <ToggleButton value="Off">OFF</ToggleButton>
          </ToggleButtonGroup>
        </Tooltip> 
        </div>
      </div>
      <Avatar className={classes.avatar}>
        <TrackChangesIcon />
      </Avatar> 
     
    </Card>
    )

    }
    </>
  );
};

TurboMode.propTypes = {
  className: PropTypes.string
};

export default TurboMode;
