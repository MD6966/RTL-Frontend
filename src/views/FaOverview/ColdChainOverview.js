/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';

import { Page } from 'components';
import ExpansionPanelPagination from './components/ExpansionPanelPagination';
import { getColdChainSensors } from 'store/actions';
import {
  Tabs,
  Tab,
  Divider,
  CircularProgress,
  Grid,
  Typography,
  Box
} from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { isBrowser, isMobile } from 'react-device-detect';
import { MapOverview } from './components';
import Alerts from './components/Alerts';

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
  fdivider: {
    marginBottom: theme.spacing(2)
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  todos: {
    marginTop: theme.spacing(6)
  }
}));

const tabs = [
  { value: 0, label: 'Overview' },
  { value: 1, label: 'Module List' }
];

const ColdChainOverview = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user_id = useSelector((state) => state.auth.user.id);
  const isLoading = useSelector((state) => state.chain.loading);
  const dashboards = useSelector((state) => state.auth.user.dashboards);
  const [index, setIndex] = useState(0);
  const [blocked, setBlocked] = useState(false);

  const handleIndexChange = (event, value) => {
    let v = { value };
    setIndex(v.value);
  };

  const handleChangeIndex = (index) => {
    setIndex(index);
  };

  useEffect(() => {
    if (index === 0) {
      dispatch(getColdChainSensors(user_id, 'fa'));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  useEffect(() => {
    const index = dashboards.findIndex(
      (d) => d.title === 'Fixed Asset Tracking System'
    );
    setBlocked(dashboards[index].isBlocked);
  });

  return (
    <Page
      className={classes.root}
      title="Fixed Asset Tracking System"
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
      ) : isBrowser && !blocked ? (
        <>
          <Tabs
            className={classes.tabs}
            onChange={handleIndexChange}
            scrollButtons="auto"
            value={index}
            variant="scrollable"
          >
            {tabs.map((tab) => (
              <Tab
                key={tab.value}
                label={tab.label}
                value={tab.value}
              />
            ))}
          </Tabs>
          <Divider className={classes.fdivider} />
          <div className={classes.content}>
            <SwipeableViews
              index={index}
              onChangeIndex={handleChangeIndex}
              resistance
            >
              {isLoading ? (
                <CircularProgress color="secondary" />
              ) : (
                <div>
                  <Grid
                    alignItems="center"
                    container
                    justify="center"
                  >
                    <Grid
                      item
                      lg={12}
                      md={12}
                      sm={12}
                      xl={12}
                    >
                      <Typography variant="h2">Module Overview</Typography>
                    </Grid>
                    <Grid
                      item
                      lg={12}
                      md={12}
                      sm={12}
                      xl={12}
                    >
                      <MapOverview />
                    </Grid>
                    <Grid
                      item
                      lg={12}
                      md={12}
                      sm={12}
                      xl={12}
                    >
                      <Divider className={classes.divider} />
                    </Grid>
                    <Grid
                      item
                      lg={12}
                      md={12}
                      sm={12}
                      xl={12}
                    >
                      <Alerts tab={index} />
                    </Grid>
                  </Grid>
                </div>
              )}
              <div>
                <Grid
                  alignItems="center"
                  container
                  justify="center"
                >
                  <Grid
                    item
                    lg={11}
                    md={11}
                    sm={11}
                    xl={11}
                  >
                    <ExpansionPanelPagination />
                  </Grid>
                </Grid>
              </div>
            </SwipeableViews>
          </div>
        </>
      ) : isMobile && !blocked ? (
        <>
          <Tabs
            className={classes.tabs}
            onChange={handleIndexChange}
            scrollButtons="auto"
            value={index}
            variant="scrollable"
          >
            {tabs.map((tab) => (
              <Tab
                key={tab.value}
                label={tab.label}
                value={tab.value}
              />
            ))}
          </Tabs>
          <Divider className={classes.divider} />
          <div className={classes.content}>
            {index === 1 ? (
              <ExpansionPanelPagination />
            ) : index === 0 ? (
              <Grid
                alignItems="center"
                container
                justify="center"
              >
                <Grid
                  item
                  lg={12}
                  md={12}
                  sm={12}
                  xl={12}
                >
                  <Typography variant="h3">Module Overview</Typography>
                </Grid>
                <Grid
                  item
                  lg={12}
                  md={12}
                  sm={12}
                  xl={12}
                >
                  <MapOverview />
                </Grid>
                <Grid
                  item
                  lg={12}
                  md={12}
                  sm={12}
                  xl={12}
                >
                  <Divider className={classes.divider} />
                </Grid>
                <Grid
                  item
                  lg={12}
                  md={12}
                  sm={12}
                  xl={12}
                >
                  <Typography variant="h3">Recent Alerts</Typography>
                </Grid>
                <Grid
                  item
                  lg={12}
                  md={12}
                  sm={12}
                  xl={12}
                >
                  <Alerts tab={index} />
                </Grid>
              </Grid>
            ) : null}
          </div>
        </>
      ) : null}
    </Page>
  );
};

export default ColdChainOverview;
