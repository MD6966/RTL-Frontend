import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getColdChainAlerts } from 'store/actions';
import { CircularProgress, Typography, Grid } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(3)
  },
  progress: {
    padding: theme.spacing(6)
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
  const columns = useSelector((state) => state.chain.alertColumns);
  const data = useSelector((state) => state.chain.alertData);
  const loading = useSelector((state) => state.chain.alertLoading);
  const title = useSelector((state) => state.chain.alertTitle);
  const { tab } = props;

  useEffect(() => {
    if (tab === 0) {
      dispatch(getColdChainAlerts(id, 'fa'));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  return (
    <>
      <Typography variant="h2" className={classes.root}>
        Recent Alerts:
      </Typography>
      {loading ? (
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={12} xl={12} lg={12}>
            <CircularProgress className={classes.progress} color="secondary" />
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
