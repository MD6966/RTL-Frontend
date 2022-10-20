import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar, Paper } from '@material-ui/core';
// import FormDialog from './FormDialog';
import { Animated } from 'react-animated-css';
import { faGasPump } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import gradients from 'utils/gradients';

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
    fontSize:'1.5rem',
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
avatarContianer: {
  display:'flex', 
  justifyContent:'center', 
  alignItems:'center',
  
},
}));

const Threshold = (props) => {
  const { className, id, threshold, ...rest } = props;
  const classes = useStyles();
  const [animate, toggleAnimate] = useState(true);
  const [t, setT] = useState(null);

  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
      setT(threshold);
    }, 500);
  }, [threshold]);

  return (
    <>
    
    <Paper {...rest}  className={clsx(classes.Paper, className)}> 
                      <div className={classes.avatarContianer}>
                      <Avatar className={classes.avatar}>
      <FontAwesomeIcon icon={faGasPump} />
      </Avatar>
                  </div>
                  <div className={classes.content}>
                    <Typography style={{marginTop:'4%', fontSize:'1rem', color:'#00008b'}}  component="h3"
          gutterBottom
          variant="overline"> Tank Capacity  </Typography>
                  </div>
                  <div className={classes.content}>
                  <Animated
            animationIn="bounceIn"
            animationInDuration={400}
            animationOut="fadeOut"
            animationOutDuration={400}
            isVisible={animate}
          >
            <Typography style={{marginTop:'2%', fontSize:'2rem', fontWeight:'bold',color:'#00008b'}} variant='h3'> {t} liters </Typography>
          
          </Animated>
                  </div>
                      </Paper>
      {/* <div>
        <Typography component="h3" gutterBottom variant="overline">
          Tank Capacity
        </Typography>
        <div className={classes.details}>
          <Animated
            animationIn="bounceIn"
            animationOut="fadeOut"
            animationInDuration={400}
            animationOutDuration={400}
            isVisible={animate}>
            <Typography variant="h3">{t} liters </Typography>
          </Animated>
        </div>
      </div>
      <Avatar className={classes.avatar}>
      <FontAwesomeIcon icon={faGasPump} />
      </Avatar> */}
    </>
  );
};

Threshold.propTypes = {
  className: PropTypes.string
};

export default Threshold;
