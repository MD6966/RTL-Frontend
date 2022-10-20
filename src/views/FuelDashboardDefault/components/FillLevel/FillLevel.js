import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar, LinearProgress, Paper } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGasPump } from '@fortawesome/free-solid-svg-icons';
import { Animated } from 'react-animated-css';

import gradients from 'utils/gradients';

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
    height: 70,
    width: 70,
    fontSize:'1.5rem'
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

const FillLevel = (props) => {
  const { className, fill, ...rest } = props;
  const classes = useStyles();
  const [animate, toggleAnimate] = useState(true);
  const [f, setF] = useState(null);

  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
      setF(fill);
    }, 500);
  }, [fill]);

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
          variant="overline"> Tank Fill Level </Typography>
                  </div>
                  <div className={classes.content}>
                  <Animated
            animationIn="bounceIn"
            animationInDuration={400}
            animationOut="fadeOut"
            animationOutDuration={400}
            isVisible={animate}
          >
            <Typography style={{marginTop:'2%', fontSize:'2rem', fontWeight:'bold',color:'#00008b'}} variant='h3'> {f}% </Typography>
          
          </Animated>
          <LinearProgress
            className={classes.progress}
            value={fill}
            variant="determinate"
            color="secondary"
          />
                  </div>
                      </Paper>
      {/* <div className={classes.content}>
        <Typography component="h3" gutterBottom variant="overline">
          Tank Fill Level
        </Typography>
        <div className={classes.details}>
          <Animated
            animationIn="bounceIn"
            animationOut="fadeOut"
            animationInDuration={400}
            animationOutDuration={400}
            isVisible={animate}>
            <Typography variant="h3">{f}%</Typography>
          </Animated>
          <LinearProgress
            className={classes.progress}
            value={fill}
            variant="determinate"
            color="secondary"
          />
        </div>
      </div>
      <Avatar className={classes.avatar}>
        <FontAwesomeIcon icon={faGasPump} />
      </Avatar> */}
    </>
  );
};

FillLevel.propTypes = {
  className: PropTypes.string
};

export default FillLevel;
