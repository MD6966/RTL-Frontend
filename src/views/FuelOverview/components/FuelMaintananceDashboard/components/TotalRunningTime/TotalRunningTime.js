import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Avatar, Paper } from '@material-ui/core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AlarmIcon from '@material-ui/icons/Alarm';
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
  label: {
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1)
  },
  
  avatar: {
    backgroundImage:gradients.pink,
    height: 70,
    width: 70,
  },
  Paper: {
   
    backgroundColor:'#FFE7D9',
    padding:theme.spacing(3),
    borderRadius:'20px',
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

const TotalRunningTime = (props) => {
  const { className, time, ...rest } = props;
  let [hours, setHours] = useState(null);
  let [minutes, setMinutes] = useState(null);
 
  useEffect(() => {
    console.log(time)
    if (time.includes(':')) {
      let duration = time.split(':');
      setHours(duration[0]);
      setMinutes(duration[1]);
    } else {
      setMinutes(time);
    }
  }, [time]);

  const classes = useStyles();

  return (
    <>
    <Paper {...rest}  className={clsx(classes.Paper, className)}> 
                      <div className={classes.avatarContianer}>
                      <Avatar className={classes.avatar}>
        <AlarmIcon style={{fontSize:'1.5rem'}} />
      </Avatar>
                  </div>
                  <div className={classes.content}>
                    <Typography style={{marginTop:'4%', fontSize:'1rem', color:'#7A0C2E'}}  component="h3"
          gutterBottom
          variant="overline"> Total Running Time </Typography>
                  </div>
                  <div className={classes.content}>
          {time !== null && time.includes(':') ? (
            <>
              <Typography variant="h3" style={{color:'#7A0C2E'}}>{hours} Hrs</Typography>
              <Typography className={classes.label} style={{color:'#7A0C2E'}} variant="h5">
                {minutes} mins
              </Typography>
            </>
          ) : time !== null ? (
            <Typography className={classes.label} style={{color:'#7A0C2E'}} variant="h5">
              {minutes} mins
            </Typography>
          ) : null}
        </div>
                      </Paper>
      {/* <div>
        <Typography component="h3" gutterBottom variant="overline">
          Total Running Time
        </Typography>
        <div className={classes.details}>
          {time !== null && time.includes(':') ? (
            <>
              <Typography variant="h3">{hours} Hrs</Typography>
              <Typography className={classes.label} variant="h5">
                {minutes} mins
              </Typography>
            </>
          ) : time !== null ? (
            <Typography className={classes.label} variant="h5">
              {minutes} mins
            </Typography>
          ) : null}
        </div>
      </div>
      <Avatar className={classes.avatarRed}>
        <AlarmIcon />
      </Avatar> */}
    </>
  );
};

TotalRunningTime.propTypes = {
  className: PropTypes.string,
  totalRunningTime: PropTypes.number
};

export default TotalRunningTime;
