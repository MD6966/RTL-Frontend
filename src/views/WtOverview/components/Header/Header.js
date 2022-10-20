/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Hidden } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  summaryButton: {
    backgroundColor: theme.palette.white
  },
  barChartIcon: {
    marginRight: theme.spacing(1)
  },
  image: {
    width: '100%',
    maxHeight: 400
  }
}));

const Header = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const user = useSelector(state => state.auth.user);
  const [today] = useState(new Date());
  const [curHr] = useState(today.getHours());
  const [time, setTime] = useState('Morning');

  useEffect(() => {
    if (curHr < 12) {
      setTime('Morning');
    } else if (curHr < 18) {
      setTime('Afternoon');
    } else {
      setTime('Evening');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid
        alignItems="center"
        container
        justify="space-between"
        spacing={3}
      >
        <Grid
          item
          md={6}
          xs={12}
        >
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
          >
            Water Tank Monitoring System
          </Typography>
          <Typography
            component="h1"
            gutterBottom
            variant="h3"
          >
            Good {time}, {user.name}
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle1"
          >
            Here’s what’s happening with your Fuel Monitoring sensors today
          </Typography>
        </Grid>
        <Hidden smDown>
          <Grid
            item
            md={6}
          >
            <img
              alt="Cover"
              className={classes.image}
              src="/images/undraw_growth_analytics_8btt.svg"
            />
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
