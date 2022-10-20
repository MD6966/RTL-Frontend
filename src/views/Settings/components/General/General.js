import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import {
  ProfileDetails,
  GeneralSettings,
  PasswordSettings,
} from './components';
import AddSensor from './components/AddSensor';
const useStyles = makeStyles(() => ({
  root: {}
}));

const General = props => {
  const { className, ...rest } = props;
  const user = useSelector(state => state.auth.user);

  const classes = useStyles();

  return (
    <Grid
      {...rest}
      className={clsx(classes.root, className)}
      container
      spacing={3}>
      <Grid item lg={4} md={6} xl={3} xs={12}>
        <ProfileDetails user={user} />
      </Grid>
      <Grid item lg={8} md={6} xl={9} xs={12}>
        <GeneralSettings user={user} />
      </Grid>
      <Grid item lg={12} md={12} xl={12} xs={12}>
        <PasswordSettings user={user} />
      </Grid>
      <Grid item lg={12} md={12} xl={12} xs={12}>
        <AddSensor user={user} />
      </Grid>
    </Grid>
  );
};

General.propTypes = {
  className: PropTypes.string
};

export default General;
