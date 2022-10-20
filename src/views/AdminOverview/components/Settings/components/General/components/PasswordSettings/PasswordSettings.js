import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Divider,
  TextField,
  colors
} from '@material-ui/core';
import axios from 'axios';
import { makeConfig } from 'store/actions';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles((theme) => ({
  root: {},
  saveButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900]
    }
  }
}));

const PasswordSettings = (props) => {
  const { className, ...rest } = props;
  const { enqueueSnackbar } = useSnackbar();

  const classes = useStyles();
  const [values, setValues] = useState({
    password: '',
    newPassword: ''
  });

  const handleChange = (event) => {
    event.persist();

    setValues({
      ...values,
      [event.target.name]:
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const config = await makeConfig('application/json');
    const body = values;
    const data = await axios.post(
      `${process.env.REACT_APP_URL}admin/changePassword`,
      body,
      config
    );
    enqueueSnackbar(data.message, {
      variant: data.variant
    });
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <form onSubmit={handleSubmit}>
        <CardHeader title="Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={4}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Enter Old Password"
                label="Old Password"
                name="password"
                onChange={handleChange}
                required
                value={values.password}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Enter New Password"
                label="New Password"
                name="newPassword"
                onChange={handleChange}
                required
                value={values.newPassword}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            className={classes.saveButton}
            type="submit"
            variant="contained">
            Change Password
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

PasswordSettings.propTypes = {
  className: PropTypes.string,
  profile: PropTypes.object.isRequired
};

export default PasswordSettings;
