import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { changePasswordAction } from 'store/actions/userActions';
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
  CircularProgress
} from '@material-ui/core';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {},
  saveButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900]
    }
  }
}));

const PasswordSettings = props => {
  const { user,className, ...rest } = props;
 
  const user_id =user.id
  const dispatch = useDispatch()
  const classes = useStyles();
  const[helperText, setHelperText] = useState('Enter Old Password')
  const[nHelperText, setNhelperText] = useState('Enter New Password')
  const [values, setValues] = useState({
    password: '',
    newPassword: ''
  });
  const [data ,setData] = useState({
    loading:false
  })


  const handleChange = event => {
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
    if(values.password.length < 8)
    {
      setHelperText('Password must be 8 characters long')
    }
    else if(values.newPassword.length < 8)
    {
      setNhelperText('Password length should be greater than 8')
    }
    else {
      setHelperText('Enter Old Password')
      setNhelperText('Enter New Password')
      setData({
        ...data,
        loading : true
      })
      dispatch(changePasswordAction(values,user_id)).then((res) => {
        // console.log('RESPONSE',res.res.data.message) yahan alert lagana hai
        setData({
          ...data,
          loading : false
        })
        alert(res.res.data.message)
      }
      )

    }
  
   
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <form onSubmit={handleSubmit}>
        <CardHeader title="Change Password" />
        <Divider />
        <CardContent>
          <Grid container spacing={4}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText={helperText}
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
                helperText={nHelperText}
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
            { data.loading ? <CircularProgress color='inherit' size='1.5rem'  /> : 'Change Password'}
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
