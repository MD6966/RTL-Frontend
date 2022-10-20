import React, { useState } from 'react';
import { useSelector } from 'react-redux';
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
  colors,
  InputAdornment,
  Typography
} from '@material-ui/core';
import { fuelMacroSettings } from 'store/actions';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(3)
  },
  saveButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900]
    }
  }
}));

const Settings = (props) => {
  const { className, ...rest } = props;
  const { enqueueSnackbar } = useSnackbar();
  const id = useSelector((state) => state.auth.user.id);

  const classes = useStyles();
  const [values, setValues] = useState({
    oilThreshold: '',
    maintananceThreshold: '',
    literThreshold: ''
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

  const handleSubmit = (event) => {
    event.preventDefault();
    fuelMacroSettings(
      id,
      values.oilThreshold,
      values.maintananceThreshold,
      values.literThreshold
    );
    enqueueSnackbar('Thresholds Updated', {
      variant: 'success'
    });
  };

  return (
    <>
      <Grid container alignItems="center" justify="center">
        <Grid item xs={11} lg={11} md={11} xl={11}>
          <Typography variant="h2" className={classes.root}>
            Macro Settings:
          </Typography>
          <Card {...rest} className={clsx(classes.root, className)}>
            <form onSubmit={handleSubmit}>
              <CardHeader title="Macro Settings" />
              <Divider />
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item md={4} xs={12}>
                    <TextField
                      fullWidth
                      helperText="Enter Oil Threshold to set (Number Of Hours)"
                      label="Oil Threshold"
                      name="oilThreshold"
                      type="number"
                      onChange={handleChange}
                      value={values.oilThreshiold}
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">Hrs</InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <TextField
                      fullWidth
                      helperText="Enter Maintanance Threshold to set (Number Of Hours)"
                      label="Maintanance Threshold"
                      name="maintananceThreshold"
                      onChange={handleChange}
                      value={values.maintananceThreshold}
                      variant="outlined"
                      type="number"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">Hrs</InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <TextField
                      fullWidth
                      helperText="Enter Tank Liters to set"
                      label="Tank Size (In Liters)"
                      name="literThreshold"
                      onChange={handleChange}
                      value={values.literThreshold}
                      type="number"
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">Ltr</InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                </Grid>
              </CardContent>
              <Divider />
              <CardActions>
                <Button
                  className={classes.saveButton}
                  type="submit"
                  variant="contained"
                  onSubmit={handleSubmit}>
                  Submit
                </Button>
              </CardActions>
            </form>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

Settings.propTypes = {
  className: PropTypes.string
};

export default Settings;
