/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Page } from 'components';
import { get_geyser_sensor } from 'store/actions';
import ModuleList from './components/ModuleList';
import General from './components/General';
import { Tabs, Tab, Divider, Box, Typography } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
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
  },
  view: { padding: theme.spacing(2) }
}));

const tabs = [
  { value: 0, label: 'Module List' },
  { value: 1, label: 'Recent Alerts' }
  
];

const GeyserOverview = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const geyser = useSelector((state) => state.geyser.geyser);
  const user_id = useSelector((state) => state.auth.user.id);
  const isLoading = useSelector((state) => state.geyser.generalLoading);
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
    const arr = [];
    if (index === 0) {
      dispatch(get_geyser_sensor(user_id));
    }
    // geyser.map( (obj) => {
    //   let object  ={
    //     module_id: obj._id,
    //     isLoading: false,
    //   }
    //   arr.push(object);
    // }
    // )
    
    // dispatch(copyModules(arr));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  useEffect(() => {
    const index = dashboards.findIndex(
      (d) => d.title === 'Smart Geyser System'
    );
    setBlocked(dashboards[index].isBlocked);
  });

  return (
    <Page
      className={classes.root}
      title="Smart Geyser System"
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
                geyser={geyser}
              />
              <General tab={index} />
              {}
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
                geyser={geyser}
                tab={index}
              />
            ) : null}
          </div>
        </>
      ) : null}
    </Page>
  );
};

export default GeyserOverview;
