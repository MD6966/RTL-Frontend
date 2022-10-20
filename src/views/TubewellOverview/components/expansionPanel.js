/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Grid, Hidden } from '@material-ui/core';
import TubewellDashboardDefault from '../../TubewellDashboardDefault/TubewellDashboardDefault';
import ChartComponent from './ChartComponent';
import Table from './Table';
import TubewellMaintananceDashboard from './TubewellMaintananceDashboard';
import image from '../../../../src/22.jpg';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    boxShadow: '0px 11px 14px -7px rgba(0, 0, 0, 0.04), 0px 23px 36px 3px rgba(0, 0, 0, 0.04), 0px 9px 44px 8px rgba(0, 0, 0, 0.04)'
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightBold
  },
  information: {
    marginLeft: theme.spacing(2),
    fontSize: theme.typography.pxToRem(14),
    fontWeight: theme.typography.fontWeightMedium
  },
  background: {
    backgroundColor: theme.palette.background.light 
  },

  backgroundAppbar: {
    backgroundColor: theme.palette.background.light 
  }
}));

export default function SimpleExpansionPanel(props) {
  const classes = useStyles();
  const { sensor } = props;
  const [index, setIndex] = useState(0);
  const settings = useSelector((state) => state.auth.user.settings);

  const handleIndexChange = (event, value) => {
    let v = { value };
    setIndex(v.value);
  };

  return (
    <div
      className={classes.root}
    >
      <ExpansionPanel
        className={classes.background}
        style={{backgroundImage: settings === 'light'
        ? `url(${image})`
        : settings === 'dark'
          ? null
          : null, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}
      >
        <ExpansionPanelSummary
          aria-controls={`panel-content${props.index}`}
          expandIcon={<ExpandMoreIcon />}
          id={`panel-header${props.index}`}
        >
          <Typography className={classes.heading}>{sensor.name}</Typography>
          <Hidden mdDown>
            <Typography className={classes.information}>
              Tank Fill Level: {sensor.fillLevel}%
            </Typography>
            <Typography className={classes.information}>
              Hydro Pump Status: {sensor.motor === 1 ? (
                'ON'
              ) : (
                'OFF'
              )}
            </Typography>
            <Typography className={classes.information}>
              Gallons Available: {((sensor.liters / 100) * sensor.fillLevel)}
            </Typography>
            <Typography className={classes.information}>
              PH Value: {sensor.ph.toFixed(2)}
            </Typography>
            <Typography className={classes.information}>
              TDS Value: {sensor.tds.toFixed(2)}
            </Typography>
          </Hidden>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid
            alignItems="center"
            container
            direction="row"
            justify="center"
          >
            <Grid
              item
              md={12}
              xl={12}
              xs={12}
            >
              <AppBar
                className={classes.backgroundAppbar}
                color={
                  settings === 'light'
                    ? 'inherit'
                    : settings === 'dark'
                      ? 'primary'
                      : null
                }
                position="static"
              >
                <Tabs
                  centered
                  indicatorColor="secondary"
                  onChange={handleIndexChange}
                  scrollButtons="auto"
                  textColor="secondary"
                  value={index}
                >
                  <Tab label="Overview" />
                  <Tab label="Settings" />
                  <Tab label="Logs" />
                  <Tab label="Charts" />
                </Tabs>
              </AppBar>
            </Grid>
            <Grid
              item
              md={12}
              xl={12}
              xs={12}
            >
              {index === 0 ? (
                <TubewellDashboardDefault
                  sensor={sensor}
                  settings={settings}
                />
              ) : index === 1 ? (
                <TubewellMaintananceDashboard sensor={sensor} />
              ) : index === 2 ? (
                <Table sensor={sensor} />
              ) : index === 3 ? (
                <ChartComponent sensor={sensor} />
              ) : null}
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
