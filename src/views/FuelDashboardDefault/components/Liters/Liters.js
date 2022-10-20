import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar, Paper } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFillDrip } from '@fortawesome/free-solid-svg-icons';
import gradients from 'utils/gradients';
import { Animated } from 'react-animated-css';

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
  label: {
    marginLeft: theme.spacing(1)
  },
  avatar: {
    backgroundImage: gradients.blue,
    height: 70,
    width: 70,
    fontSize:'1.5rem'
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

  },
  Paper: {
   
    backgroundColor: '#D0F2FF',
    padding:theme.spacing(3),
    // marginLeft: theme.spacing(2),
    borderRadius:'20px',
    '&:hover' : {
      backgroundColor:'#DDF5F3',
      cursor: 'pointer',
    },
},
}));

const Liters = (props) => {
  const { className, liters, ...rest } = props;

  const classes = useStyles();
  const [animate, toggleAnimate] = useState(true);
  const [l, setL] = useState(null);

  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
      setL(liters);
    }, 500);
  }, [liters]);

  return (
    <>
     <Paper {...rest}  className={clsx(classes.Paper, className)}> 
                      <div className={classes.avatarContianer}>
                      <Avatar className={classes.avatar}>
        <FontAwesomeIcon icon={faFillDrip} />
      </Avatar>
                  </div>
                  <div className={classes.content}>
                    <Typography style={{marginTop:'4%', fontSize:'1rem', color:'#00008b'}}  component="h3"
          gutterBottom
          variant="overline"> Available Liters </Typography>
                  </div>
                  <div className={classes.content}>
                  <Animated
            animationIn="bounceIn"
            animationInDuration={400}
            animationOut="fadeOut"
            animationOutDuration={400}
            isVisible={animate}
          >
            <Typography style={{marginTop:'2%', fontSize:'2rem', fontWeight:'bold',color:'#00008b'}} variant='h3'> {l} liters </Typography>
          
          </Animated>
                  </div>
                      </Paper>
      {/* <div>
        <Typography component="h3" gutterBottom variant="overline">
          Available Liters
        </Typography>
        <div className={classes.details}>
          <Animated
            animationIn="bounceIn"
            animationOut="fadeOut"
            animationInDuration={400}
            animationOutDuration={400}
            isVisible={animate}>
            <Typography variant="h3">{l} liters</Typography>
          </Animated>
        </div>
      </div>
      <Avatar className={classes.avatar}>
        <FontAwesomeIcon icon={faFillDrip} />
      </Avatar> */}
    </>
  );
};

Liters.propTypes = {
  className: PropTypes.string
};

export default Liters;
