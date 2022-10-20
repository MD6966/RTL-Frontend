import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid, Hidden, Tabs, AppBar, Tab } from '@material-ui/core';
import Temperature_DashboardDefault from '../../Temperature_DashboardDefault/Temperature_DashboardDefault';
import Table from './Table/Table';
import ChartComponent from './ChartComponent/ChartComponent';
import TemperatureSettingDashboard from './TemperatureSettingDashboard';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
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
  const { sensor, fans } = props;
  const [index, setIndex] = useState(0);
  const settings = useSelector((state) => state.auth.user.settings);

  const handleIndexChange = (event, value) => {
    let v = { value };
    setIndex(v.value);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          aria-controls={`panel-content${props.index}`}
          expandIcon={<ExpandMoreIcon />}
          id={`panel-header${props.index}`}>
          <Typography className={classes.heading}>{sensor.name}</Typography>
          <Hidden mdDown>
            <Typography className={classes.information}>
              Temperature: {sensor.temperature} °C
            </Typography>
            
            <Typography className={classes.information}>
              Humidity: {sensor.humidity} %
            </Typography>

          </Hidden>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid alignItems="center" container direction="row" justify="center">
            <Grid
              alignItems="center"
              container
              direction="row"
              justify="center">
              <Grid item md={12} xl={12} xs={12}>
                <AppBar
                  color={
                    settings === 'light'
                      ? 'inherit'
                      : settings === 'dark'
                      ? 'primary'
                      : null
                  }
                  position="static">
                  <Tabs
                    centered
                    indicatorColor="secondary"
                    onChange={handleIndexChange}
                    scrollButtons="auto"
                    textColor="secondary"
                    value={index}>

                    <Tab label="Overview" />
                    <Tab label="Setting" />
                    <Tab label="Logs" />
                    <Tab label="Graphs" />
                    
                  </Tabs>
                </AppBar>
              </Grid>
              <Grid item md={12} xl={12} xs={12}>
                {index === 0 ? (
                  <Temperature_DashboardDefault
                    sensor={sensor}
                    settings={settings}
                    fans = {fans}
                  />
                ) : index === 1 ? (
                  <TemperatureSettingDashboard sensor={sensor} />
                ) : index === 2 ? (
                  <Table sensor={sensor} />
                ) : index === 3 ? (
                  <ChartComponent sensor={sensor} />
                ) : null}
              </Grid>
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
