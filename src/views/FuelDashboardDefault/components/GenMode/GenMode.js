/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar, Paper } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceThree} from '@fortawesome/free-solid-svg-icons';
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
  avatarGreen: {
    backgroundImage: gradients.green,
    height: 70,
    width: 70,
    fontSize:'1.5rem',
  },
  avatarRed: {
    backgroundImage: gradients.red,
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

const GenMode = (props) => {
  const { className, Mode, ...rest } = props;
  const classes = useStyles();
  const [animate, toggleAnimate] = useState(true);

  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
     
    }, 500);
  }, [Mode]);

  return (
    <>
      <Paper {...rest}  className={clsx(classes.Paper, className)}> 
                      <div className={classes.avatarContianer}>
                   
                    {Mode === 'OFF' ? (
        <Avatar className={classes.avatarRed}>
          <FontAwesomeIcon icon={faDiceThree} />
        </Avatar>
      ) : (
      
        <Avatar className={classes.avatarGreen}>
          <FontAwesomeIcon icon={faDiceThree} />
          
        </Avatar>
      )}

                  </div>
                  <div className={classes.content}>
                    <Typography style={{marginTop:'4%', fontSize:'1rem', color:'#00008b'}}  component="h3"
          gutterBottom
          variant="overline"> Gen Mode  </Typography>
                  </div>
                  <div className={classes.content}>
                  <Animated
            animationIn="bounceIn"
            animationInDuration={400}
            animationOut="fadeOut"
            animationOutDuration={400}
            isVisible={animate}
          >
            <Typography style={{marginTop:'2%', fontSize:'2rem', fontWeight:'bold',color:'#00008b'}} variant='h3'> {Mode} </Typography>
          
          </Animated>
                  </div>
                      </Paper>



      {/* <div>
        <Typography
          component="h3"
          gutterBottom
          variant="overline"
        >
          Gen Mode
        </Typography>
        <div className={classes.details}>
          <Animated
            animationIn="bounceIn"
            animationInDuration={400}
            animationOut="fadeOut"
            animationOutDuration={400}
            isVisible={animate}
          >
            <Typography variant="h3">{Mode}</Typography>
          </Animated>
        </div>
      </div>
      {Mode === 'OFF' ? (
        <Avatar className={classes.avatarRed}>
          <FontAwesomeIcon icon={faDiceThree} />
        </Avatar>
      ) : (
      
        <Avatar className={classes.avatarGreen}>
          <FontAwesomeIcon icon={faDiceThree} />
          
        </Avatar>
      )} */}
    </>
  );
};

GenMode.propTypes = {
  className: PropTypes.string
};

export default GenMode;
