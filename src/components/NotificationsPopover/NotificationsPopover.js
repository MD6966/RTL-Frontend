import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Popover,
  CardHeader,
  CardActions,
  Divider,
  Button,
  colors
} from '@material-ui/core';

import { NotificationList, EmptyList } from './components';
import { clearNotifications } from 'store/actions';

const useStyles = makeStyles(() => ({
  root: {
    width: 350,
    maxWidth: '100%'
  },
  actions: {
    backgroundColor: colors.grey[50],
    justifyContent: 'center'
  }
}));

const NotificationsPopover = (props) => {
  const { notifications, anchorEl, ...rest } = props;
  const dispatch = useDispatch();

  const classes = useStyles();

  const handleClick = () => {
    dispatch(clearNotifications());
  };

  return (
    <Popover
      {...rest}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}>
      <div className={classes.root}>
        <CardHeader title="Notifications" />
        <Divider />
        {notifications.length > 0 ? (
          <NotificationList notifications={notifications} />
        ) : (
          <EmptyList />
        )}
        <Divider />
        <CardActions className={classes.actions}>
          <Button onClick={handleClick} size="small">
            Clear Notifications
          </Button>
        </CardActions>
      </div>
    </Popover>
  );
};

NotificationsPopover.propTypes = {
  anchorEl: PropTypes.any,
  className: PropTypes.string,
  notifications: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default NotificationsPopover;
