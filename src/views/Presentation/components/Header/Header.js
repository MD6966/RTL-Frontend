import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Button } from '@material-ui/core';
import useRouter from 'utils/useRouter';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.white
  },
  header: {
    width: theme.breakpoints.values.md,
    maxWidth: '100%',
    margin: '0 auto',
    padding: '80px 24px',
    [theme.breakpoints.up('md')]: {
      padding: '160px 24px'
    }
  },
  buttons: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center'
  },
  mediaContainer: {
    margin: '0 auto',
    maxWidth: 1600,
    padding: theme.spacing(0, 2),
    overflow: 'hidden'
  },
  media: {
    width: '100%'
  },
  stats: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(1)
  },
  statsInner: {
    width: theme.breakpoints.values.md,
    maxWidth: '100%',
    margin: '0 auto'
  }
}));

const Header = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const { history } = useRouter();

  const handleClick = () => {
    history.push('/auth/login');
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.background}>
        <div className={classes.header}>
          <Typography align="center" gutterBottom variant="h1">
            RubiTron IoT Dashboard Pro
          </Typography>
          <Typography align="center" component="h2" variant="subtitle1">
            A professionally Built dashboard that is developed with one common
            goal in mind, to help you monitor your IoT devices with ease. Built
            with the latest UI/UX technologies.
          </Typography>
          <div className={classes.buttons}>
            <Button
              color="primary"
              component="a"
              onClick={handleClick}
              target="/auth/login"
              variant="contained">
              Get Started Now
            </Button>
          </div>
        </div>
        <div className={classes.mediaContainer}>
          <img
            alt="Demos"
            className={classes.media}
            src="/images/presentation/header.jpg"
          />
        </div>
      </div>
      <div className={classes.stats}>
        <Grid
          alignItems="center"
          className={classes.statsInner}
          container
          justify="center"
          spacing={3}>
          <Grid item lg={3} md={6} xs={12}>
            <Typography color="inherit" gutterBottom variant="h3">
              3+
            </Typography>
            <Typography color="inherit" variant="body2">
              IoT Dashboards
            </Typography>
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <Typography color="inherit" gutterBottom variant="h3">
              UI/UX
            </Typography>
            <Typography color="inherit" variant="body2">
              Material Design
            </Typography>
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <Typography color="inherit" gutterBottom variant="h3">
              Real-time
            </Typography>
            <Typography color="inherit" variant="body2">
              Monitoring
            </Typography>
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <div>
              <img alt="React" src="/images/react.png" />
            </div>
            <Typography color="inherit" variant="body2">
              Made With React
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
