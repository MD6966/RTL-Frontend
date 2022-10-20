import React, { Fragment, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import {
  Drawer,
  Divider,
  Paper,
  Avatar,
  Typography,
  CircularProgress
} from '@material-ui/core';
import { Hidden } from '@material-ui/core';
import userIcon from '@material-ui/icons/VerifiedUserOutlined';
import RegisterIcon from '@material-ui/icons/HowToReg';
import FeedbackIcon from '@material-ui/icons/Feedback';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import EmailIcon from '@material-ui/icons/Email';
import useRouter from 'utils/useRouter';
import { Navigation } from 'components';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    overflowY: 'auto'
  },
  content: {
    padding: theme.spacing(2)
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginTop: theme.spacing(1)
  },
  divider: {
    marginTop: theme.spacing(2)
  },
  navigation: {
    marginTop: theme.spacing(2)
  }
}));

const NavBar = (props) => {
  const { openMobile, onMobileClose, className, ...rest } = props;

  const classes = useStyles();
  const router = useRouter();
  const admin = useSelector((state) => state.auth.admin);

  const navigationConfig = [
    {
      title: 'Admin Dashboard',
      pages: [
        {
          title: 'Users',
          href: '/admin/users',
          icon: userIcon
        },
        {
          title: 'Modules',
          href: '/admin/modules',
          icon: ViewModuleIcon
        },

        {
          title: 'Complaints',
          href: '/admin/complaints',
          icon: FeedbackIcon
        },
        {
          title: 'Email',
          href: '/admin/email',
          icon: EmailIcon
        },
        {
          title: 'Register User',
          href: '/admin/register',
          icon: RegisterIcon
        },
      



        

      ]
    }
  ];

  useEffect(() => {
    if (openMobile) {
      onMobileClose && onMobileClose();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.location.pathname]);

  const navbarContent = (
    <div className={classes.content}>
      <div className={classes.profile}>
        {admin.profilePic === null ? (
          <Avatar
            alt="Person"
            className={classes.avatar}
            component={RouterLink}
            src={`${process.env.REACT_APP_URL}user.svg`}
            to="/admin/settings"
          />
        ) : (
          <Avatar
            alt="Person"
            className={classes.avatar}
            component={RouterLink}
            src={admin.profilePic}
            to="/admin/settings"
          />
        )}
        <Typography className={classes.name} variant="h4">
          {admin.username}
        </Typography>
        <Typography variant="body2">User</Typography>
      </div>
      <Divider className={classes.divider} />
      {admin === null ? (
        <CircularProgress color="secondary" />
      ) : (
        <nav className={classes.navigation}>
          {navigationConfig.map((list) => (
            <Navigation
              component="div"
              key={list.title}
              pages={list.pages}
              title={list.title}
            />
          ))}
        </nav>
      )}
    </div>
  );

  return (
    <Fragment>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary">
          <div {...rest} className={clsx(classes.root, className)}>
            {navbarContent}
          </div>
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Paper
          {...rest}
          className={clsx(classes.root, className)}
          elevation={1}
          square>
          {navbarContent}
        </Paper>
      </Hidden>
    </Fragment>
  );
};

NavBar.propTypes = {
  className: PropTypes.string,
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

export default NavBar;
