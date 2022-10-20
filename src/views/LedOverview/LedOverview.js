/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Box, Typography } from '@material-ui/core';
import { Page } from 'components';
import { getCNCSensors } from 'store/actions';
import ModuleList from './components/ModuleList';

const useStyles = makeStyles((theme) => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3)
  },
  expansionPanel: {
    marginTop: theme.spacing(3)
  },
  notifications: {
    marginTop: theme.spacing(6)
  },
  projects: {
    marginTop: theme.spacing(6)
  },
  todos: {
    marginTop: theme.spacing(6)
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));

const LedOverview = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const led = useSelector((state) => state.led.led);
  const loading = useSelector((state) => state.led.generalLoading);
  const user_id = useSelector((state) => state.auth.user.id);
  const dashboards = useSelector((state) => state.auth.user.dashboards);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    dispatch(getCNCSensors(user_id));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const index = dashboards.findIndex(
      (d) => d.title === 'CNC Monitoring System'
    );
    setBlocked(dashboards[index].isBlocked);
  });

  return (
    <Page
      className={classes.root}
      title="CNC Monitoring System"
    >
      {blocked ? (
        <>
          <img
            alt="blocked"
            className={classes.divider}
            src="images/blocked.webp"
          />
          <Box
            className={classes.divider}
            display="flex"
            justifyContent="center"
          >
            <Typography variant="h3">
              This dashboard has been blocked by admin. Please contact support
              to unblock your dashboard.
            </Typography>
          </Box>
        </>
      ) : (
        <ModuleList
          led={led}
          loading={loading}
        />
      )}
    </Page>
  );
};

export default LedOverview;
