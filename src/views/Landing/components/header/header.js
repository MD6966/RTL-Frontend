/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Box } from '@material-ui/core';
import { Animated } from 'react-animated-css';
import './header.css';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    overflowY: 'auto'
  },
  avatar: {
    width: 300,
    height: 300,
    backgroundColor: '#ffffff',
    boxShadow: theme.shadows[6],
    borderColor: '#ffffff'
  }
}));

export default function Header() {
  const classes = useStyles();
  const [a, setA] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setA(true);
    }, 1000);
  }, []);

  return (
    <>
      <header
        className="header"
        id="header"
      >
        <div className="header-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-xl-12">
                <Animated
                  animationIn="fadeInDown"
                  animationInDuration={400}
                  animationOut="fadeOut"
                  isVisible
                >
                  <Box
                    display="flex"
                    justifyContent="center"
                  >
                    <Animated
                      animationIn="flipInX"
                      animationOut="flipInX"
                      isVisible={a}
                    >
                      <Avatar className={classes.avatar}>
                        <img
                          alt="logo"
                          height="40%"
                          src="images/logos/IoT-logo.webp"
                          width="40%"
                        />
                      </Avatar>
                    </Animated>
                  </Box>

                  <div className="text-container">
                    <h1>RubiTron IoT Dashboard</h1>
                    <p className="p-large">
                    A professionally Built dashboard that is developed with
                    one common goal in mind, to help you monitor your IoT
                    devices with ease.Built with the latest UI / UX
                    technologies.

                    </p>
                    <Link to="/auth/login">
                      <button className="btn-solid-lg page-scroll">
                        GET STARTED NOW
                      </button>
                    </Link>
                  </div>
                </Animated>
                <div className="arrow bounce" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <svg
        className="header-frame"
        data-name="Layer 1"
        preserveAspectRatio="none"
        viewBox="0 0 1920 310"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs />
        <title>header-frame</title>
        <path
          className="cls-1"
          d="M0,283.054c22.75,12.98,53.1,15.2,70.635,14.808,92.115-2.077,238.3-79.9,354.895-79.938,59.97-.019,106.17,18.059,141.58,34,47.778,21.511,47.778,21.511,90,38.938,28.418,11.731,85.344,26.169,152.992,17.971,68.127-8.255,115.933-34.963,166.492-67.393,37.467-24.032,148.6-112.008,171.753-127.963,27.951-19.26,87.771-81.155,180.71-89.341,72.016-6.343,105.479,12.388,157.434,35.467,69.73,30.976,168.93,92.28,256.514,89.405,100.992-3.315,140.276-41.7,177-64.9V0.24H0V283.054Z"
          fill="#3f51b5"
        />
      </svg>
    </>
  );
}
