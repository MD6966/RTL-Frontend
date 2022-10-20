import React, { useState, useEffect } from 'react';
import { Animated } from 'react-animated-css';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar, Paper } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import gradients from 'utils/gradients';
import { useDispatch, useSelector } from 'react-redux';
import { Tooltip } from '@material-ui/core';
import { gen_control } from 'store/actions/fuelActions';
import { CircularProgress } from '@material-ui/core';

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
  avatarRed: {
    backgroundImage: gradients.red,
    height: 70,
    width: 70,
    fontSize:'1.5rem',
  },
  avatarGreen: {
    backgroundImage: gradients.green,
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
    borderRadius:'20px',
    '&:hover' : {
      backgroundColor:'#DDF5F3',
      cursor: 'pointer',
    },
},
}));

const GenStatus = (props) => {
  const { className, status, sensor, ...rest } = props;

  const classes = useStyles();
  const dispatch = useDispatch();
  const [animate, toggleAnimate] = useState(true);
  const [s, setS] = useState(null);
  const [gen, setGen] = useState(sensor.gen_status);

  let id = sensor._id;
  const fuel = useSelector((state) => state.fuel.fuel);
  const index = fuel.findIndex((f) => f._id === id);
  const sys_status = useSelector((state) => state.fuel.fuel[index].sysOffline);

  const genControl = () => { 
    
    if(status === 1){
      setGen(0)
      setS('On')
      dispatch(gen_control(id, 0));
    } 
    else if (status === 0){
      setGen(1);
      setS('Off')
      dispatch(gen_control(id, 1));
    }
  };

  useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);
      if (status === 1) {
        setS('On');
      } else {
        setS('Off');
      }
    }, 500);
  }, [status]);

  return (
    <>

<Paper {...rest}  className={clsx(classes.Paper, className)}> 
                      <div className={classes.avatarContianer}>
                      {
        sys_status === true ? (
          <Tooltip
            arrow
            title="Unable to start generator due to system disconnectivity."
          >
            { 
              status === 1 ? (
                <Avatar className={classes.avatarGreen}>
                  <FontAwesomeIcon 
                    // cursor="pointer"
                    icon={faPowerOff}
                    onClick={genControl} 
                  />
                </Avatar>
              ) : (
                <Avatar className={classes.avatarRed}>
                  <FontAwesomeIcon
                    // cursor="pointer"
                    icon={faPowerOff}
                    onClick={genControl} 
                  />
                </Avatar>
              )
            }
          </Tooltip>
        ) : (
          <>
          { sensor.gen_mode === 'Automatic' ? (
            <Tooltip
            arrow
            title = "Automatic Mode is Enable Generator can't be turned ON Manually."
            >
             { 
                 status === 1 ? (
                  <Avatar className={classes.avatarGreen}>
                    <FontAwesomeIcon 
                      // cursor="pointer"
                      icon={faPowerOff}
                      onClick={genControl}
                    />
                  </Avatar>
                ) : (
                  <Avatar className={classes.avatarRed}>
                    <FontAwesomeIcon
                      // cursor="pointer"
                      icon={faPowerOff}
                      onClick={genControl} 
                    />
                  </Avatar>
                )
              }
              
            </Tooltip>
          ) : (
            <Avatar className={classes.avatarRed}>
            {
              sensor.gen_loading === true ? (
                <CircularProgress
                  color="inherit"
                  size={25}
                />
              ) : (
                status === 1 ? (
                  <Avatar className={classes.avatarGreen}>
                    <FontAwesomeIcon 
                      cursor="pointer"
                      icon={faPowerOff}
                      onClick={genControl}
                    />
                  </Avatar>
                ) : (
                  <Avatar className={classes.avatarRed}>
                    <FontAwesomeIcon
                      cursor="pointer"
                      icon={faPowerOff}
                      onClick={genControl} 
                    />
                  </Avatar>
                )
              )
            }
          </Avatar>
          )

          }
          
          </>
        )
      }
                  </div>
                  <div className={classes.content}>
                    <Typography style={{marginTop:'4%', fontSize:'1rem', color:'#00008b'}}  component="h3"
          gutterBottom
          variant="overline"> Gen Status </Typography>
                  </div>
                  <div className={classes.content}>
                  <Animated
            animationIn="bounceIn"
            animationInDuration={400}
            animationOut="fadeOut"
            animationOutDuration={400}
            isVisible={animate}
          >
            <Typography style={{marginTop:'2%', fontSize:'2rem', fontWeight:'bold',color:'#00008b'}} variant='h3'> {s} </Typography>
          
          </Animated>
                  </div>
                      </Paper>
      
      
    </>
  );
};

GenStatus.propTypes = {
  className: PropTypes.string
};

export default GenStatus;
