/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import WarningIcon from '@material-ui/icons/Warning';
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  Hidden,
  Box,
  Typography,
  DialogActions,
  DialogContent,
  Dialog,
  DialogTitle,
  Input,
  colors,
  Popper,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ClickAwayListener
} from '@material-ui/core';
import LockIcon from '@material-ui/icons/LockOutlined';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import MenuIcon from '@material-ui/icons/Menu';
import { Settings as SettingsIcon } from 'react-feather';
import axios from 'utils/axios';
import useRouter from 'utils/useRouter';
import {
  PricingModal,
  NotificationsPopover,
  SettingsPopover
} from 'components';
import { logout } from 'store/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 4
  },
  flexGrow: {
    flexGrow: 1
  },
  search: {
    backgroundColor: 'rgba(255,255,255, 0.1)',
    borderRadius: 4,
    flexBasis: 300,
    height: 36,
    padding: theme.spacing(0, 2),
    display: 'flex',
    alignItems: 'center'
  },
  searchIcon: {
    marginRight: theme.spacing(2),
    color: 'inherit'
  },
  searchInput: {
    flexGrow: 1,
    color: 'inherit',
    '& input::placeholder': {
      opacity: 1,
      color: 'inherit'
    }
  },
  searchPopper: {
    zIndex: theme.zIndex.appBar + 100
  },
  searchPopperContent: {
    marginTop: theme.spacing(1)
  },
  trialButton: {
    marginLeft: theme.spacing(2),
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900]
    }
  },
  trialIcon: {
    marginRight: theme.spacing(1)
  },
  notificationsButton: {
    marginLeft: theme.spacing(1)
  },
  notificationsBadge: {
    backgroundColor: colors.orange[600]
  },
  logoutButton: {
    marginLeft: theme.spacing(1)
  },
  logoutIcon: {
    marginRight: theme.spacing(1)
  }
}));

const TopBar = (props) => {
  const { onOpenNavBarMobile, className, ...rest } = props;

  const classes = useStyles();
  const { history } = useRouter();
  const settingsRef = useRef(null);
  const dispatch = useDispatch();
  const notificationsRef = useRef(null);
  const [openNotifications, setOpenNotifications] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const [open , setOpen] = useState(false)
  const notifications = useSelector(
    (state) => state.notification.notifications
  );

  const handleLogout = () => {
    // dispatch(logout());
    // history.push('/');
    setOpen(true)
  };

  const handleNotificationsOpen = () => {
    setOpenNotifications(true);
  };

  const handleNotificationsClose = () => {
    setOpenNotifications(false);
  };

  const handleSettingsOpen = () => {
    setOpenSettings(true);
  };

  const handleSettingsClose = () => {
    setOpenSettings(false);
  };
  const handleCancel = () => {
    setOpen(false)
   };
 
   const handleOk = () => {
 
     dispatch(logout());
     history.push('/');
   };

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      color="primary"
    >
      <Toolbar>
        <RouterLink to="/">
          <img
            alt="Logo"
            height="65px"
            src="/images/logos/logo.webp"
            width="170px"
          />
        </RouterLink>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <IconButton
            className={classes.notificationsButton}
            color="inherit"
            onClick={handleNotificationsOpen}
            ref={notificationsRef}
          >
            <Badge
              badgeContent={notifications.length}
              classes={{ badge: classes.notificationsBadge }}
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            className={classes.notificationsButton}
            color="inherit"
            onClick={handleSettingsOpen}
            ref={settingsRef}
          >
            <SettingsIcon />
          </IconButton>
          <Button
            className={classes.logoutButton}
            color="inherit"
            onClick={handleLogout}
          >
            <InputIcon className={classes.logoutIcon} />
            Sign out
          </Button>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onOpenNavBarMobile}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
      <NotificationsPopover
        anchorEl={notificationsRef.current}
        notifications={notifications}
        onClose={handleNotificationsClose}
        open={openNotifications}
      />
      <SettingsPopover
        anchorEl={settingsRef.current}
        onClose={handleSettingsClose}
        open={openSettings}
      />
      <Dialog open={open}  fullWidth={true} >
      <DialogTitle>
        <>
        <Box style={{display:'flex'}}>
        <Box>
        <WarningIcon style={{fontSize:'3rem', color:'red'}} /> 
        </Box>
        <Box>
       <Typography style={{fontSize:'2rem', fontWeight:800, marginLeft:'1rem', marginTop:'1.2rem'}}>  Confirm </Typography>
        </Box>
        </Box>
        </>
      </DialogTitle>
      <DialogContent >
        <Typography variant='h3' >
          Are you sure want to log out ? 
        </Typography>
      </DialogContent>
      <DialogActions>
      <Button onClick={handleCancel} color="primary">
          No
        </Button>
        <Button onClick={handleOk} color="primary" variant='contained'>
          Yes
        </Button>
      </DialogActions>
      </Dialog>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onOpenNavBarMobile: PropTypes.func
};

export default TopBar;
