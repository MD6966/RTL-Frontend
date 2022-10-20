import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';
import PaymentIcon from '@material-ui/icons/Payment';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import StoreIcon from '@material-ui/icons/Store';
import FuelIcon from '@material-ui/icons/LocalGasStation';
import BulbIcon from '@material-ui/icons/WbIncandescentOutlined';
import AcIcon from '@material-ui/icons/AcUnit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThermometerHalf,
  faFish,
  faTint
} from '@fortawesome/free-solid-svg-icons';
import FireplaceIcon from '@material-ui/icons/Fireplace';
import gradients from 'utils/gradients';


const useStyles = makeStyles((theme) => ({
  root: {},
  listItem: {
    '&:hover': {
      backgroundColor: theme.palette.background.default
    }
  },
  avatarBlue: {
    backgroundImage: gradients.blue
  },
  avatarGreen: {
    backgroundImage: gradients.green
  },
  avatarOrange: {
    backgroundImage: gradients.orange
  },
  avatarIndigo: {
    backgroundImage: gradients.indigo
  },
  arrowForwardIcon: {
    color: theme.palette.icon
  }
}));

const NotificationList = (props) => {
  const { notifications, className, ...rest } = props;

  const classes = useStyles();

  const avatars = {
    order: (
      <Avatar className={classes.avatarBlue}>
        <PaymentIcon />
      </Avatar>
    ),
    temperature: (
      <Avatar className={classes.avatarBlue}>
        <FontAwesomeIcon icon={faThermometerHalf} />
      </Avatar>
    ),
    user: (
      <Avatar className={classes.avatarOrange}>
        <PeopleIcon />
      </Avatar>
    ),
    coldchain: (
      <Avatar className={classes.avatarGreen}>
        <AcIcon />
      </Avatar>
    ),
    lms: (
      <Avatar className={classes.avatarIndigo}>
        <FontAwesomeIcon icon={faFish} />
      </Avatar>
    ),
    lms2: (
      <Avatar className={classes.avatarIndigo}>
        <FontAwesomeIcon icon={faTint} />
      </Avatar>
    ),
    fuel: (
      <Avatar className={classes.avatarOrange}>
        <FuelIcon />
      </Avatar>
    ),
    led: (
      <Avatar className={classes.avatarGreen}>
        <BulbIcon />
      </Avatar>
    ),
    geyser: (
      <Avatar className={classes.avatarOrange}>
        <FireplaceIcon />
      </Avatar>
    ),
    tempsys: (
      <Avatar className={classes.avatarOrange}>
        <FontAwesomeIcon icon={faThermometerHalf} />
      </Avatar>
    ),
    gassys: (
      <Avatar className={classes.avatarOrange}>
        <FireplaceIcon />
      </Avatar>
    ),
  };

  return (
    <List {...rest} className={clsx(classes.root, className)} disablePadding>
      {notifications.map((notification, i) => (
        <ListItem
          className={classes.listItem}
          component={RouterLink}
          divider={i < notifications.length - 1}
          key={notification.id}
          to="#">
          <ListItemAvatar>{avatars[notification.type]}</ListItemAvatar>
          <ListItemText
            primary={notification.title}
            primaryTypographyProps={{ variant: 'body1' }}
            secondary={notification.created_at}
          />
        </ListItem>
      ))}
    </List>
  );
};

NotificationList.propTypes = {
  className: PropTypes.string,
  notifications: PropTypes.array.isRequired
};

export default NotificationList;
