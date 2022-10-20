/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import { Page } from 'components';
import { getLmsSensors, lmsLoading } from 'store/actions';
import { Tabs, Tab, Divider, Box, Typography } from '@material-ui/core';
import ModuleList from './components/ModuleList';
import General from './components/General';
import MacroChartComponent from './components/MacroChartComponent';
import Settings from './components/Settings';
import { isBrowser, isMobile } from 'react-device-detect';

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

const tabs = [
  { value: 0, label: 'Module List' },
  { value: 1, label: 'Recent Alerts' },
  { value: 2, label: 'Comparison Chart' },
  { value: 3, label: 'Settings' }
];

const LiquidOverview = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const lms = useSelector((state) => state.lms.lms);
  const user_id = useSelector((state) => state.auth.user.id);
  const isLoading = useSelector((state) => state.lms.generalLoading);
  const dashboards = useSelector((state) => state.auth.user.dashboards);
  const [index, setIndex] = useState(0);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    if (index === 0) {
      dispatch(getLmsSensors(user_id, 'farm'));
    }

    return () => {
      dispatch(lmsLoading());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  useEffect(() => {
    const index = dashboards.findIndex(
      (d) => d.title === 'Smart Farm Fisheries'
    );
    setBlocked(dashboards[index].isBlocked);
  });

  const handleIndexChange = (event, value) => {
    let v = { value };
    setIndex(v.value);
  };

  const handleChangeIndex = (index) => {
    setIndex(index);
  };

  return (
    <Page
      className={classes.root}
      title="Smart Farm Fisheries"
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
                lms={lms}
                loading={isLoading}
              />
              <General tab={index} />
              <MacroChartComponent tab={index} />
              <Settings tab={index} />
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
              <General tab={index} />
            ) : index === 0 ? (
              <ModuleList
                lms={lms}
                loading={isLoading}
                tab={index}
              />
            ) : index === 2 ? (
              <MacroChartComponent tab={index} />
            ) : index === 3 ? (
              <Settings />
            ) : null}
          </div>
        </>
      ) : null}
    </Page>
  );
};

export default LiquidOverview;
