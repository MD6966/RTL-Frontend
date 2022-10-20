/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  AppBar,
  Typography
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 4
  },
  flexGrow: {
    flexGrow: 1
  },
}));

const BottomBar = (props) => {
  const { onOpenNavBarMobile, className, ...rest } = props;

  const classes = useStyles();


  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      style={{backgroundColor: '#ffffff', zIndex: 'auto', height: '5vh'}}
    >
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={5}
          md={4}
          sm={4}
          xs={4}
        />
        <Grid
          item
          lg={2}
          md={4}
          sm={4}
          style={{marginTop: '15px', textAlign: 'center'}}
          xs={4}
        >
          
          <Typography
            style={{textAlign: 'center', fontSize: '13px', color: '#505253'}}
            variant="outline"
          > Powered by <a href="https://www.esyncnsecure.com/">Sync & Secure</a></Typography>
         
        </Grid>
        <Grid
          item
          lg={5}
          md={4}
          sm={4}
          xs={4}
        />
      </Grid>
    </AppBar>
  );
};

BottomBar.propTypes = {
  className: PropTypes.string,
  onOpenNavBarMobile: PropTypes.func
};

export default BottomBar;
