import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import MUIDataTable from 'mui-datatables';
import { CircularProgress, Grid } from '@material-ui/core';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { makeConfig } from 'store/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  label: {
    backgroundColor: theme.palette.background.paper
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

const Table = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.auth.admin);
  const [isLoading, setLoading] = useState(true);

  const [table, setTable] = useState({
    data: [],
    columns: [],
    title: 'Login History'
  });

  useEffect(() => {
    async function doFoo() {
      setLoading(true);

      const config = await makeConfig('application/json');

      const body = {
        id: user.id
      };

      axios
        .post(`${process.env.REACT_APP_URL}admin/getIpHistory`, body, config)
        .then((data) => {
          setTable({
            ...table,
            data: data.data.data,
            columns: data.data.columns
          });
        })
        .catch((err) => {
          console.log(err);
        });

      setLoading(false);
    }

    doFoo();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  return (
    <Grid container>
      <Grid item lg={12} xl={12} xs={12}>
        {isLoading ? (
          <CircularProgress color="secondary" />
        ) : (
          <div className={classes.results}>
            <MUIDataTable
              columns={table.columns}
              data={table.data}
              options={options}
              title={table.title}
            />
          </div>
        )}
      </Grid>
    </Grid>
  );
};

export default Table;
