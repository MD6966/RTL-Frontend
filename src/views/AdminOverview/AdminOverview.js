/* eslint-disable linebreak-style */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Page } from 'components';
import { getAllUsers } from 'store/actions';
import {
  UserTable,
  SensorTable,
  AddSensorForm,
  Complaints,
  Learn
} from './components';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3)
  },
  margin: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  }
}));

const AdminOverview = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const isLoading = useSelector((state) => state.users.isLoading);

  useEffect(() => {
    dispatch(getAllUsers());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Page
      className={classes.root}
      title="Overview"
    >
      <Box
        className={classes.margin}
        display="flex"
        justifyContent="center"
      >
        <UserTable
          isLoading={isLoading}
          users={users}
        />
      </Box>
      {/* <Box
        className={classes.margin}
        display="flex"
        justifyContent="center"
      >
        <SensorTable />  ///////////////////
      </Box> */}
      {/* <Box
        className={classes.margin}
        display="flex"
        justifyContent="center"
      >
        <AddSensorForm />
      </Box>  */}
       {/* <Box
        className={classes.margin}
        display="flex"
        justifyContent="center"
      >
        <Complaints />
      </Box>  */}
      <Box
        className={classes.margin}
        display="flex"
        justifyContent="center"
      >
        <Learn />
      </Box>
    </Page>
  );
};

export default AdminOverview;
