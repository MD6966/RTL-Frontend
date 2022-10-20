/* eslint-disable linebreak-style */
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Divider, Grid } from '@material-ui/core';
import Alerts from './Alerts';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3)
  }
}));

export default function General(props) {
  const classes = useStyles();
  const { tab } = props;

  return (
    <>
      <Grid
        alignItems="center"
        container
        justify="center"
      >
        <Grid
          item
          lg={11}
          md={11}
          sm={11}
          xl={11}
        >
          <Alerts tab={tab} />
          <Divider className={classes.root} />
        </Grid>
      </Grid>
    </>
  );
}
