import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  Button
} from '@material-ui/core';
import { uploadPicture } from 'store/actions';

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlgin: 'center'
  },
  name: {
    marginTop: theme.spacing(1)
  },
  avatar: {
    height: 100,
    width: 100
  },
  removeBotton: {
    width: '100%'
  }
}));

const ProfileDetails = (props) => {
  const { user, className, ...rest } = props;
  const dispatch = useDispatch();
  const [picture, setPicture] = useState({
    filename: 'Choose File',
    file: null
  });

  const handleChange = (e) => {
    setPicture({
      filename: e.target.files[0].name,
      file: e.target.files[0]
    });
  };

  const handleUpload = () => {
    dispatch(uploadPicture(picture.file, user.id));
  };

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent className={classes.content}>
        {user.profilePic === null ? (
          <Avatar
            className={classes.avatar}
            src={`${process.env.REACT_APP_URL}user.svg`}
          />
        ) : (
          <Avatar
            className={classes.avatar}
            src={`${process.env.REACT_APP_URL}${user.profilePic}`}
          />
        )}
        <Typography className={classes.name} gutterBottom variant="h3">
          {user.name}
        </Typography>
        <Typography color="textSecondary" variant="body1">
          {user.email}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          you have {user.dashboards.length} dashboards registered
        </Typography>
      </CardContent>
      <CardActions>
        <input
          hidden
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          onChange={handleChange}
          type="file"
        />
        <label htmlFor="contained-button-file">
          <Button
            component="span"
            color="primary"
            variant="text"
            className={classes.uploadButton}>
            {picture.filename}
          </Button>
        </label>
        <Button className={classes.uploadButton} onClick={handleUpload}>
          Upload picture
        </Button>
      </CardActions>
    </Card>
  );
};

ProfileDetails.propTypes = {
  className: PropTypes.string
};

export default ProfileDetails;
