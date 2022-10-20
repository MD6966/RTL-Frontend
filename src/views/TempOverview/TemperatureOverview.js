import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import { Page } from 'components';
import { getLmsSensors, clearLms } from 'store/actions';
import { Tabs, Tab, Divider } from '@material-ui/core';
import ModuleList from './components/ModuleList';
import General from './components/General';
import MacroChartComponent from './components/MacroChartComponent';
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
  swipe: {
    padding: theme.spacing(2)
  }
}));

const tabs = [
  { value: 0, label: 'Module List' },
  { value: 1, label: 'Recent Alerts' },
  { value: 2, label: 'Comparison Chart' }
];

const QaOverview = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const lms = useSelector((state) => state.lms.lms);
  const user_id = useSelector((state) => state.auth.user.id);
  const isLoading = useSelector((state) => state.lms.generalLoading);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index === 0) {
      dispatch(getLmsSensors(user_id, 'qa'));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const handleIndexChange = (event, value) => {
    let v = { value };
    setIndex(v.value);
  };

  const handleChangeIndex = (index) => {
    setIndex(index);
  };

  return (
    <Page className={classes.root} title="Temperature Monitoring System">
      {isBrowser ? (
        <>
          <Tabs
            className={classes.tabs}
            onChange={handleIndexChange}
            scrollButtons="auto"
            value={index}
            variant="scrollable">
            {tabs.map((tab) => (
              <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
          </Tabs>
          <Divider className={classes.divider} />
          <div className={classes.content}>
            <SwipeableViews
              enableMouseEvents
              index={index}
              onChangeIndex={handleChangeIndex}>
              <div className={classes.swipe}>
                <ModuleList lms={lms} loading={isLoading} />
              </div>
              <div className={classes.swipe}>
                <General tab={index} />
              </div>
              <div className={classes.swipe}>
                <MacroChartComponent tab={index} />
              </div>
            </SwipeableViews>
          </div>
        </>
      ) : isMobile ? (
        <>
          <Tabs
            className={classes.tabs}
            onChange={handleIndexChange}
            scrollButtons="auto"
            value={index}
            variant="scrollable">
            {tabs.map((tab) => (
              <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
          </Tabs>
          <Divider className={classes.divider} />
          <div className={classes.content}>
            {index === 1 ? (
              <General tab={index} />
            ) : index === 0 ? (
              <ModuleList lms={lms} loading={isLoading} tab={index} />
            ) : index === 2 ? (
              <MacroChartComponent tab={index} />
            ) : null}
          </div>
        </>
      ) : null}
    </Page>
  );
};

export default QaOverview;
