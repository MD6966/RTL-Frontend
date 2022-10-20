/* eslint-disable linebreak-style */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgress, Typography, Grid } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import { makeStyles } from '@material-ui/styles';
import { getLightAlerts } from 'store/actions/lightAction';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(3)
  }
}));

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

export default function Alerts(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const id = useSelector((state) => state.auth.user.id);
  const columns = useSelector((state) => state.hl.alertColumns);
  const data = useSelector((state) => state.hl.alertData);
  const loading = useSelector((state) => state.hl.alertLoading);
  const title = useSelector((state) => state.hl.alertTitle); 
  const { tab } = props;

  useEffect(() => {
    if (tab === 1) {
      dispatch(getLightAlerts(id));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  return (
    <>
      <Typography
        className={classes.root}
        variant="h2"
      >
        Recent Alerts:
      </Typography>
      {loading ? (
        <Grid
          alignItems="center"
          container
          justify="center"
        >
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <CircularProgress
              className={classes.progress}
              color="secondary"
            />
          </Grid>
        </Grid>
      ) : !loading && data.length === 0 ? (
        <Typography variant="h5">No Recent Alerts</Typography>
      ) : (
        <MUIDataTable
          columns={columns}
          data={data}
          options={options}
          title={title}
        />
      )}
    </>
  );
}
