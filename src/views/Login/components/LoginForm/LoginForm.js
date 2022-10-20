/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import validate from 'validate.js';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  TextField,
  Typography,
  CircularProgress
} from '@material-ui/core';
import axios from 'axios';

import useRouter from 'utils/useRouter';
import { login } from 'store/actions';

const schema = {
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' }
  }
};

const useStyles = makeStyles((theme) => ({
  root: {},
  fields: {
    margin: theme.spacing(-1),
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      flexGrow: 1,
      margin: theme.spacing(1)
    }
  },
  submitButton: {
    marginTop: theme.spacing(2),
    width: '100%'
  },
  submitError: {
    color: theme.palette.error.main,
    alignText: 'center',
    marginBottom: theme.spacing(),
    marginTop: theme.spacing(2)
  },
  color: {
    color: '#ffffff'
  }
}));

const LoginForm = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const router = useRouter();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
    submitError: null
  });
  const [ip, setIp] = useState(null);

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  useEffect(() => {
    if (error.id === 'LOGIN_FAIL') {
      setFormState((formState) => ({
        ...formState,
        submitError: error.message
      }));
    }
  }, [error]);

  useEffect(() => {
    axios.get('https://api.ipify.org?format=json').then((data) => {
      setIp(data.data.ip);
    });
  }, []);

  const handleChange = (event) => {
    event.persist();

    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(login(formState.values, ip));
  };

  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;

  if (isAuthenticated) {
    return <Redirect to={user.dashboards[0].href} />;
  }

  return (
    <form
      {...rest}
      className={clsx(classes.root, className)}
      onSubmit={handleSubmit}
    >
      <div className={classes.fields}>
        <TextField
          error={hasError('email')}
          fullWidth
          helperText={hasError('email') ? formState.errors.email[0] : null}
          label="Email address"
          name="email"
          onChange={handleChange}
          value={formState.values.email || ''}
          variant="outlined"
        />
        <TextField
          error={hasError('password')}
          fullWidth
          helperText={
            hasError('password') ? formState.errors.password[0] : null
          }
          label="Password"
          name="password"
          onChange={handleChange}
          type="password"
          value={formState.values.password || ''}
          variant="outlined"
        />
      </div>
      {formState.submitError === null ? null : (
        <Typography
          className={classes.submitError}
          variant="body2"
        >
          {formState.submitError}
        </Typography>
      )}
      <Button
        className={classes.submitButton}
        color="secondary"
        disabled={!formState.isValid}
        size="large"
        type="submit"
        variant="contained"
      >
        {isLoading ? (
          <CircularProgress
            className={classes.color}
            color="secondary"
            size='1.5rem'
          />
        ) : (
          <Typography
            className={classes.color}
            variant="body2"
          >
            Login
          </Typography>
        )}
      </Button>
    </form>
  );
};

LoginForm.propTypes = {
  className: PropTypes.string
};

export default LoginForm;
