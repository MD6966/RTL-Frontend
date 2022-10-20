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
import FuelDashboardDefault from '../../FuelDashboardDefault/FuelDashboardDefault';
import ChartComponent from './ChartComponent';
import Table from './Table';
import FuelMaintananceDashboard from './FuelMaintananceDashboard';
import FuelSettingsDashboard from './FuelSettingsDashboard';
import gradients from 'utils/gradients';

const useStyles = makeStyles((theme) => ({
  // root: {
  //   width: '100%',
  //   // boxShadow: '0px 11px 14px -7px rgba(0, 0, 0, 0.04), 0px 23px 36px 3px rgba(0, 0, 0, 0.04), 0px 9px 44px 8px rgba(0, 0, 0, 0.04)'
  // },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  information: {
    marginLeft: theme.spacing(2),
    fontSize: theme.typography.pxToRem(12),
    fontWeight: theme.typography.fontWeightSmall
  }
}));

export default function SimpleExpansionPanel(props) {
  const classes = useStyles();
  const { sensor,  } = props;
  const [index, setIndex] = useState(0);
  const settings = useSelector((state) => state.auth.user.settings);

  const handleIndexChange = (event, value) => {
    let v = { value };
    setIndex(v.value);
  };
  return (
    <div className={classes.root}>
       <Typography style={{fontSize: '2rem', textAlign:'center', margin:'2rem'}}> {sensor.name}</Typography>
          <ExpansionPanel>
          <ExpansionPanelSummary  expandIcon={<ExpandMoreIcon />}>
          <Typography style={{fontSize:'1.5rem', }} > Monitoring </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <FuelDashboardDefault
                  sensor={sensor}
                  settings={settings}
                />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary  expandIcon={<ExpandMoreIcon />} >
          <Typography style={{fontSize:'1.5rem', }} > Settings </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <FuelSettingsDashboard sensor={sensor} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary  expandIcon={<ExpandMoreIcon />} >
          <Typography style={{fontSize:'1.5rem', }} > Maintainance  </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <FuelMaintananceDashboard sensor={sensor} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary  expandIcon={<ExpandMoreIcon />} >
          <Typography style={{fontSize:'1.5rem', }} > Logs </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <Table sensor={sensor} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary  expandIcon={<ExpandMoreIcon />} >
          <Typography style={{fontSize:'1.5rem', }} > Graphs </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <ChartComponent sensor={sensor} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        
      

      {/* <ExpansionPanel>
        <ExpansionPanelSummary
          aria-controls={`panel-content${props.index}`}
          expandIcon={<ExpandMoreIcon />}
          id={`panel-header${props.index}`}
        >
          <Typography className={classes.heading}>{sensor.name}</Typography>
          <Hidden mdDown>
            <Typography className={classes.information}>
              Fuel Tank Lid: {sensor.door_status === 0 ? (
                'CLOSE' ) : (
                'OPEN'
              )
              }
            </Typography>
            <Typography className={classes.information}>
              Gen Status: {sensor.gen_status === 0 ? (
                'OFF'
              ) : (
                'ON'
              )}
            </Typography>
            <Typography className={classes.information}>
              Temperature: {sensor.temperature}
            </Typography>
            <Typography className={classes.information}>
              Gen Mode:{' '}
              {sensor.gen_mode}
            </Typography>
            <Typography className={classes.information}>
              {
                (sensor.sysOffline !== null && sensor.sysOffline !== undefined) ? (
                  <>System Status: {sensor.sysOffline === true ? ('OFFLINE'): ('ONLINE')}</>
                ) : (
                  null
                )
              }
              
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
                  <Tab label="Maintanance" />
                  <Tab label="Logs" />
                  <Tab label="Graphs" />
                  
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
                <FuelDashboardDefault
                  sensor={sensor}
                  settings={settings}
                />
              ) : index === 1 ? (
                <FuelSettingsDashboard sensor={sensor} />
              ) : index === 3 ? (
                <Table sensor={sensor} />
              ) : index === 4 ? (
                <ChartComponent sensor={sensor} />
              ) : index === 2 ? (
                <FuelMaintananceDashboard sensor={sensor} />
              ) : null}
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel> */}
    </div>
  );
}
