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
import { lmsMacroSettings } from 'store/actions';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
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
  const id = useSelector((state) => state.auth.user.id);
  const { enqueueSnackbar } = useSnackbar();

  const classes = useStyles();
  const [values, setValues] = useState({
    threshold: '',
    upperThreshold: ''
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
    lmsMacroSettings(id, values.threshold, values.upperThreshold);
    enqueueSnackbar('thresholds updated', {
      variant: 'success',
      persist: false
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
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      helperText="Enter Lower Theshold (Aerator On)"
                      label="Lower Threshold (In mg/L)"
                      name="threshold"
                      onChange={handleChange}
                      value={values.threshold}
                      variant="outlined"
                      type="number"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">mg/L</InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      helperText="Enter Upper Theshold (Aerator Off)"
                      label="Upper Threshold (In mg/L)"
                      name="upperThreshold"
                      onChange={handleChange}
                      value={values.upperThreshold}
                      type="number"
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">mg/L</InputAdornment>
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
                  variant="contained">
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
  className: PropTypes.string,
  profile: PropTypes.object.isRequired
};

export default Settings;
