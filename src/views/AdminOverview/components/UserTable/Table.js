/* eslint-disable linebreak-style */
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import MUIDataTable from 'mui-datatables';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import { DashboardModal, SensorModal, DashboardList } from './components';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  },
  dates: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  calendarTodayIcon: {
    marginRight: theme.spacing(1)
  }
}));

const Table = (props) => {
  const classes = useStyles();
  const { users, isLoading } = props;

  const options = {
    filter: true,
    filterType: 'dropdown',
    responsive: 'scrollMaxHeight',
    selectableRows: 'none',
    fixedHeaderOptions: {
      xAxis: false,
      yAxis: true
    }
  };

  const columns = [
    {
      name: 'id',
      label: 'User ID'
    },
    {
      name: 'name',
      label: 'Name'
    },
    {
      name: 'email',
      label: 'Email'
    },
    {
      name: 'dashboards',
      label: 'See Dashboards',
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <DashboardList
            dashboards={value.dashboards}
            id={value.id}
          />
        )
      }
    },
    {
      name: 'dashboard',
      label: 'Add Dashboard',
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <DashboardModal id={value} />
        )
      }
    },
    {
      name: 'sensors',
      label: 'See Registered Modules',
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <SensorModal id={value} />
        )
      }
    }
  ];

  return (
    <Grid container>
      <Grid
        item
        lg={12}
        xl={12}
        xs={12}
      >
        <Typography variant="h2">User List</Typography>
      </Grid>
      <Grid
        item
        lg={12}
        xl={12}
        xs={12}
      >
        <div className={classes.results}>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <MUIDataTable
              columns={columns}
              data={users}
              options={options}
              title={'All Registered Users'}
            />
          )}
        </div>
      </Grid>
    </Grid>
  );
};

export default Table;
