/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Page } from 'components';
import { getTemperature_Sensors } from 'store/actions/temperature_Actions';
import { Tabs, Tab, Divider, Box, Typography } from '@material-ui/core';
import ModuleList from './components/ModuleList';
import General from './components/General';
import MacroChartComponent from './components/MacroChartComponent';
import Settings from './components/Settings';
import { isBrowser, isMobile } from 'react-device-detect';
import SwipeableViews from 'react-swipeable-views';


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
  // { value: 2, label: 'Comparison Chart' },
  // { value: 3, label: 'Settings' }
];

const Temperature_Overview = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const temperature = useSelector((state) => state.temp.temp);
  const isLoading = useSelector((state) => state.temp.isLoading);
  const dashboards = useSelector((state) => state.auth.user.dashboards);
  const user_id = useSelector((state) => state.auth.user.id);
  const [index, setIndex] = useState(0);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    if (index === 0) {
      dispatch(getTemperature_Sensors());
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  useEffect(() => {
    const index = dashboards.findIndex(
      (d) => d.title === 'Temperature System'
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
      title="Temperature System"
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
                loading={isLoading}
                temperature={temperature}
              />
              <General tab={index} />
              {/* <MacroChartComponent tab={index} /> */}
              {/* <Settings tab={index} /> */}
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
                loading={isLoading}
                tab={index}
                temperature={temperature}
              />
            ) : 
            //  === 2 ? (
            //   <MacroChartComponent tab={index} />
            // ) : index === 3 ? (
            //   <Settings />
            // ) : 
            null}
          </div>
        </>
      ) : null}
    </Page>
  );
};

export default Temperature_Overview;
