import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar } from '@material-ui/core';
import { Animated } from 'react-animated-css';
import { ToggleButtonGroup } from '@material-ui/lab';
import { ToggleButton } from '@material-ui/lab';
import gradients from 'utils/gradients';
// import { setGenMode } from 'store/actions/geyserHybridAction';
import { useDispatch } from 'react-redux';
import { Tooltip } from '@material-ui/core';
import { faThermometerHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';
import { setSupplyMode } from '../../../../../store/actions/geyserHybridAction';
import { useSnackbar } from 'notistack';

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
  avatar: {
    backgroundImage: gradients.blue,
    height: 48,
    width: 48
  }
}));

const SourceMode = (props) => {
  const { className, sensor, id, threshold, ...rest } = props;
  const classes = useStyles();
  const [animate, toggleAnimate] = useState(true);
  const { enqueueSnackbar } = useSnackbar();
  // const [m, setM] = useState('');
  const [alignment, setAlignment] = React.useState(sensor.supply_mode);
  const dispatch = useDispatch();

  const handleChange = (event, newAlignment) => {
    // console.log(newAlignment,"Source Mode")
    if(newAlignment != null)
    {
      setAlignment(newAlignment);
    dispatch(setSupplyMode(sensor._id, newAlignment));
    }
    else
    {
      enqueueSnackbar('You have already selected this Mode', {
        variant: 'error'
      });
    }
    
    // console.log(sensor._id,'_+_+__+')
  }; 
  useEffect(() => {
    setAlignment(sensor.supply_mode)
  }, [sensor.supply_mode]);
  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <div>
        <Typography component="h3" gutterBottom variant="overline">
          Geyser Mode
        </Typography>
        <div className={classes.details}>
          <Animated
            animationIn="bounceIn"
            animationOut="fadeOut"
            animationInDuration={400}
            animationOutDuration={400}
            isVisible={animate}>
            <Typography variant="h3">{alignment} </Typography>
          </Animated> &nbsp;&nbsp;&nbsp;&nbsp;
          <ToggleButtonGroup
            color="success"
            size = "small"
            value={alignment}
            exclusive
            onChange={handleChange}
          > 
            <ToggleButton value = "Gas" >Gas</ToggleButton>
            <ToggleButton value= "Hybrid">Hybrid</ToggleButton>
            <ToggleButton value= "Electric">Electric</ToggleButton>
          </ToggleButtonGroup>
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

SourceMode.propTypes = {
  className: PropTypes.string
};

export default SourceMode;
