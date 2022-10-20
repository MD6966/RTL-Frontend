/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';

import { Page } from 'components';
import ModuleList from './components/ModuleList';
import General from './components/General';
import { Tabs, Tab, Divider, Box, Typography } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
// import Settings from './components/Settings/Settings';
import { isBrowser, isMobile } from 'react-device-detect';
import { get_Em_sensor } from 'store/actions/emAction';

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
  },
  view: { padding: theme.spacing(2) }
}));

const tabs = [
  { value: 0, label: 'Module List' },
  { value: 1, label: 'Recent Alerts' },
  // { value: 2, label: 'Comparison Chart' },
  // { value: 3, label: 'Settings' }
];

const EmOverview = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const em = useSelector((state) => state.em.sensor);
  const user_id = useSelector((state) => state.auth.user.id);
  const isLoading = useSelector((state) => state.em.isLoading);
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
      dispatch(get_Em_sensor(user_id));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  useEffect(() => {
    const index = dashboards.findIndex(
      (d) => d.title === 'Energy Monitoring System'
    );
    setBlocked(dashboards[index].isBlocked);
  });


  return (
    <Page
      className={classes.root}
      title="Energy Monitoring System"
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
          <Divider className={classes.divider} />
          <div className={classes.content}>
            <SwipeableViews
              index={index}
              onChangeIndex={handleChangeIndex}
              resistance
            >
              <ModuleList
                className={classes.view}
                em={em}
                loading={isLoading}
              />
              <General tab={index} />
              {/* <MacroChartComponent tab={index} />
              <Settings tab={index} /> */}
            </SwipeableViews>
          </div>
        </ >
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
              <General tab={index} />
            ) : index === 0 ? (
              <ModuleList
                em={em}
                loading={isLoading}
                tab={index}
              />
            ) 
            // : index === 2 ? (
            //   <MacroChartComponent tab={index} />
            // ) : index === 3 ? (
            //   <Settings />
            // ) 
              : null }
          </div>
        </>
      ) : null}
    </Page>
  );
};

export default EmOverview;
