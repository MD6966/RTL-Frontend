/* eslint-disable linebreak-style */
import React, { Fragment, useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import {
  Drawer,
  Divider,
  Paper,
  Avatar,
  Typography,
  CircularProgress,
  Container,
  Box,
  Button
} from '@material-ui/core';
import { Hidden, Dialog, DialogActions, DialogTitle,DialogContent} from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import gasIcon from '@material-ui/icons/LocalGasStation';
import acIcon from '@material-ui/icons/AcUnit';
import locationIcon from '@material-ui/icons/MyLocation';
import WavesIcon from '@material-ui/icons/Waves';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import EcoIcon from '@material-ui/icons/Eco';
import useRouter from 'utils/useRouter';
import { Navigation } from 'components';
// import { WiHumidity } from 'react-icons/wi';
import SecurityIcon from '@material-ui/icons/Security';
import BatteryFullIcon from '@material-ui/icons/BatteryFull';
// import { GiWaterFountain } from 'react-icons/gi';
import TrafficIcon from '@material-ui/icons/Traffic';
import FireplaceIcon from '@material-ui/icons/Fireplace';
import HotTubTwoToneIcon from '@material-ui/icons/HotTubTwoTone';
import InputIcon from '@material-ui/icons/Input';
import WarningIcon from '@material-ui/icons/Warning';
import { logout } from 'store/actions';
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
  },
  logoutIcon: {
    marginRight: theme.spacing(1)
  },
  confirm: {
    fontSize:'1rem', 
    fontWeight:800, 
    marginLeft:'1rem', 
    marginTop:'1.2rem',
  }

}));

const NavBar = (props) => {
  const { openMobile, onMobileClose, className, ...rest } = props;
  const dispatch = useDispatch()
  const { history } = useRouter();
  const classes = useStyles();
  const router = useRouter();
  const user = useSelector((state) => state.auth.user);
  const [open , setOpen] = useState(false)
  const [navigationConfig, setConfig] = useState([]);
  const handleLogout = () => {
    setOpen(true)
  };
  const handleCancel = () => {
    setOpen(false)
   };
 
   const handleOk = () => {
 
     dispatch(logout());
     history.push('/');
   };

  useEffect(() => {
    if (openMobile) {
      onMobileClose && onMobileClose();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.location.pathname]);

  useEffect(() => {
    const arr = [];
    user.dashboards.map((d) => {
      let obj = {
        title: d.title,
        href: d.href
      };

      if (d.href === '/fuel') {
        obj = {
          ...obj,
          icon: gasIcon
        };
      } else if (d.href === '/temperature') {
        obj = {
          ...obj,
          faIcon: 'temp'
        };
      } else if (d.href === '/waterQa') {
        obj = {
          ...obj,
          faIcon: 'water qa'
        };
      } else if (d.href === '/liquid') {
        obj = {
          ...obj,
          faIcon: 'lms'
        };
      } else if (d.href === '/coldChain') {
        obj = {
          ...obj,
          icon: acIcon
        };
      } else if (d.href === '/cnc') {
        obj = {
          ...obj,
          icon: DashboardIcon
        };
      } else if (d.href === '/fa') {
        obj = {
          ...obj,
          icon: locationIcon
        };
      } else if (d.href === '/em') {
        obj = {
          ...obj,
          icon: OfflineBoltIcon
        };
      }
      else if (d.href === '/env') {
        obj = {
          ...obj,
          icon: EcoIcon
        };
      }
      else if (d.href === '/tank') {
        obj = {
          ...obj,
          icon: WavesIcon
        };
      }
      else if (d.href === '/ht') {
        obj = {
          ...obj,
          faIcon: 'temp'
        };
      }
      else if (d.href === '/tubewell') {
        obj = {
          ...obj,
          icon: WavesIcon
        };
      } 
      else if (d.href === '/light') {
        obj = {
          ...obj,
          icon: TrafficIcon
        };
      }
      else if (d.href === '/security') {
        obj = {
          ...obj,
          icon: SecurityIcon
        };
      }
      else if (d.href === '/rectifier') {
        obj = {
          ...obj,
          icon: BatteryFullIcon
        };
      }
      else if (d.href === '/geyser') {
        obj = {
          ...obj,
          icon: FireplaceIcon
        };
      }
      else if (d.href === '/geyser_hybrid') {
        obj = {
          ...obj,
          icon: HotTubTwoToneIcon
        };
      }
      else if (d.href === '/tempsys') {
        obj = {
          ...obj,
          faIcon: 'temp'
        };
      }
      else if (d.href === '/gassys') {
        obj = {
          ...obj,
          icon: FireplaceIcon
        };
      }

      arr.push(obj);
    });

    setConfig([
      {
        title: 'Dashboards',
        pages: arr
      }
    ]);
  }, []);

  const navbarContent = (
    <div className={classes.content}>
      <div className={classes.profile}>
        {user.profilePic === null ? (
          <Avatar
            alt="Person"
            className={classes.avatar}
            component={RouterLink}
            src={`${process.env.REACT_APP_URL}user.svg`}
            to="/settings/general"
          />
        ) : (
          <Avatar
            alt="Person"
            className={classes.avatar}
            component={RouterLink}
            src={`${process.env.REACT_APP_URL}${user.profilePic}`}
            to="/settings/general"
          />
        )}
        <Typography
          className={classes.name}
          variant="h4"
        >
          {user.name}
        </Typography>
        <Typography
          className={classes.name}
          variant="body2"
        >
          User
        </Typography>
      </div>
      <Divider className={classes.divider} />
      {user === null ? (
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
          <Hidden lgUp>

          <Box >
            <Divider  className={classes.divider}  /> 
            <Button style={{marginTop:'5%'}} 
             color="inherit"
             onClick={handleLogout}
             >
              <InputIcon className={classes.logoutIcon}  /> 
              Sign Out
            </Button>
          </Box>
              </Hidden>
          <Dialog open={open}  fullWidth={true} >
      <DialogTitle>
        <>
        <Box style={{display:'flex'}}>
        <Box>
        <WarningIcon style={{fontSize:'3rem', color:'red'}} /> 
        </Box>
        <Box>
       <Typography  className={classes.confirm}>  Confirm </Typography>
        </Box>
        </Box>
        </>
      </DialogTitle>
      <DialogContent >
        <Typography sx={{ typography: { sm: 'body1', xs: 'body2' } }}>
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
          variant="temporary"
        >
          <div
            {...rest}
            className={clsx(classes.root, className)}
          >
            {navbarContent}
          </div>
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Paper
          {...rest}
          className={clsx(classes.root, className)}
          elevation={1}
          square
        >
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
