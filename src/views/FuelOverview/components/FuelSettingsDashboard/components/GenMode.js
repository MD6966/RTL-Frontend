import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar, Paper } from '@material-ui/core';
import { Animated } from 'react-animated-css';
import { ToggleButtonGroup } from '@material-ui/lab';
import { ToggleButton } from '@material-ui/lab';
import gradients from 'utils/gradients';
import { setGenMode } from 'store/actions';
import { useDispatch } from 'react-redux';
import { Tooltip } from '@material-ui/core';
import { faGasPump } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    height: 70,
    width: 70,
    fontSize:'1.5rem'
  },
  Paper: {
   
    backgroundColor: '#D0F2FF',
    padding:theme.spacing(3),
   marginTop: theme.spacing(2),
    borderRadius:'20px',
    '&:hover' : {
      backgroundColor:'#DDF5F3',
      cursor: 'pointer',
    },
},
avatarContianer: {
  display:'flex', 
  justifyContent:'center', 
  alignItems:'center',
  
},
content: {
  display:'flex',
  justifyContent:'center',
  alignItems:'center',

}
}));

const GenMode = (props) => {
  const { className, sensor, id, threshold, ...rest } = props;
  // console.log(sensor.gen_mode, '+++++++++++++++++++++++++++ props' )
  const classes = useStyles();
  const [animate, toggleAnimate] = useState(true);
  // const [m, setM] = useState('');
  const [alignment, setAlignment] = React.useState(sensor.gen_mode);
  const dispatch = useDispatch();

  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
    }, 500);
  }, [sensor.gen_mode]);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    dispatch(setGenMode(id, newAlignment));
  }; 

  return (
    <>
    <Paper className={classes.Paper} style={{backgroundColor:'#FFF7CD'}}> 
                      <div className={classes.avatarContianer}>
                      <Avatar className={classes.avatar}>
                      <FontAwesomeIcon icon={faGasPump} />
                      </Avatar>  
                  </div>
                  <div className={classes.content}>
                    <Typography variant='h3' style={{ fontSize:'1.25rem', color:'#7E5407'}}> Gen Mode </Typography>
                  </div>
                  <div className={classes.content}>
                  <Animated
            animationIn="bounceIn"
            animationOut="fadeOut"
            animationInDuration={400}
            animationOutDuration={400}
            isVisible={animate}>
           <Typography variant='h3' style={{marginTop:'2%', fontSize:'2rem', fontWeight:'bold',color:'#7E5407'}}> {alignment}</Typography>
          </Animated>
         
                  </div>
                  <div className={classes.content} style={{marginTop:'3%'}}>
                  { sensor.sysOffline === true ? (
        <Tooltip
        arrow
        title = "System is Offline can't change Mode."
        >
          <ToggleButtonGroup
            color="success"
            value={alignment}
            exclusive
          // onChange={handleChange}
          >
            <ToggleButton value="Automatic">Automatic</ToggleButton>
            <ToggleButton value="OFF">OFF</ToggleButton>
            <ToggleButton value="Manual">Manual</ToggleButton>
          </ToggleButtonGroup>
        </Tooltip>
      ) : (
        <ToggleButtonGroup
        color="success"
        value={alignment}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value="Automatic">Automatic</ToggleButton>
        <ToggleButton value="OFF">OFF</ToggleButton>
        <ToggleButton value="Manual">Manual</ToggleButton>
      </ToggleButtonGroup>
      )

      }
                  </div>
                      </Paper>
      {/* <div>
        <Typography component="h3" gutterBottom variant="overline">
          Gen Mode
        </Typography>
        <div className={classes.details}>
          <Animated
            animationIn="bounceIn"
            animationOut="fadeOut"
            animationInDuration={400}
            animationOutDuration={400}
            isVisible={animate}>
            <Typography variant="h3">{alignment} </Typography>
          </Animated>
        </div>
      </div>
      { sensor.sysOffline === true ? (
        <Tooltip
        arrow
        title = "System is Offline can't change Mode."
        >
          <ToggleButtonGroup
            color="success"
            value={alignment}
            exclusive
          // onChange={handleChange}
          >
            <ToggleButton value="Automatic">Automatic</ToggleButton>
            <ToggleButton value="OFF">OFF</ToggleButton>
            <ToggleButton value="Manual">Manual</ToggleButton>
          </ToggleButtonGroup>
        </Tooltip>
      ) : (
        <ToggleButtonGroup
        color="success"
        value={alignment}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value="Automatic">Automatic</ToggleButton>
        <ToggleButton value="OFF">OFF</ToggleButton>
        <ToggleButton value="Manual">Manual</ToggleButton>
      </ToggleButtonGroup>
      )

      } */}
     
    </>
  );
};

GenMode.propTypes = {
  className: PropTypes.string
};

export default GenMode;
