/* eslint-disable linebreak-style */
import React, { Suspense, useState, useEffect } from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { LinearProgress, Fab } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateFuelSensors,
  addNotification,
  updateTemperature,
  updateLedCamera,
  updateLedColor,
  updateColdChainSensors,
  updateLedOffline,
  updateLmsSensors, 
  updateEmSensors,
  updateWtSensors,
  updateTubewellSensors,
  updateLightSensors,
  update_Temperature,
  updateFan
} from 'store/actions';
import { updateEnvSensors } from 'store/actions/envAction';
import { updateHumidity } from 'store/actions/HumidityAction';
import { updateSecuritySensors } from 'store/actions/securityAction';
import { updateRectifierSensors } from 'store/actions/rectifierAction';
import { updateGeyserSensors } from 'store/actions/geyserAction';
import { updateHybridGeyserSensors } from 'store/actions/geyserHybridAction';
import { useSnackbar } from 'notistack';
import { update_gas_alarm } from 'store/actions/gasAction';
import { NavBar, TopBar, HelpModal } from './components';
import axios from 'axios';
import BottomBar from './components/BottomBar/BottomBar';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  topBar: {
    zIndex: 2,
    position: 'relative'
  },
  container: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  navBar: {
    zIndex: 3,
    width: 256,
    minWidth: 256,
    flex: '0 0 auto'
  },
  content: {
    overflowY: 'auto',
    flex: '1 1 auto'
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  bottomBar: {
    position: 'relative'
  }
}));

const Dashboard = (props) => {
  const { route } = props;

  const classes = useStyles();
  const [openNavBarMobile, setOpenNavBarMobile] = useState(false);
  const socket = useSelector((state) => state.socket.socket);
  const user_id = useSelector((state) => state.auth.user.id);
  const dispatch = useDispatch();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleNavBarMobileOpen = () => {
    setOpenNavBarMobile(true);
  };

  const handleNavBarMobileClose = () => {
    setOpenNavBarMobile(false);
  };

  const notify = (title, body) => {
    new Notification(title, {
      body: body,
      icon: '/img/favicon.png'
    });
  };

  const saveLedKey = async (key, id) => {
    const config = {
      headers: {
        'content-type': 'application/json'
      }
    };

    const body = {
      id,
      key
    };

    // eslint-disable-next-line no-undef
    axios.post(`${process.env.REACT_APP_URL}led/offlineKey`, body, config);
  };

  const saveLmsKey = async (key, id) => {
    const config = {
      headers: {
        'content-type': 'application/json'
      }
    };

    const body = {
      id,
      key
    };

    // eslint-disable-next-line no-undef
    axios.post(`${process.env.REACT_APP_URL}lms/offlineKey`, body, config);
  };
  useEffect(() => {
    socket.on(`${user_id}-update`, (res) => {
      // console.log('res', res);
      if (res.type === 'fuel') {
        dispatch(updateFuelSensors(res));
        // console.log(res)
      }
      if (res.type === 'temperature') {
        dispatch(updateTemperature(res));
      }
      if (res.type === 'humidity') {
        dispatch(updateHumidity(res));
      }
      if (res.type === 'led') {
        if (res.camera !== undefined) {
          dispatch(updateLedCamera(res));
        }
        if (res.color !== undefined) {
          dispatch(updateLedColor(res));
        }
        if (res.offline !== undefined) {
          dispatch(updateLedOffline(res));
        }
      }
      if (res.type === 'coldChain') {
        dispatch(updateColdChainSensors(res));
      }
      if (res.type === 'lms') {
        dispatch(updateLmsSensors(res));
      }
      if (res.type === 'em') {
        dispatch(updateEmSensors(res));
      }
      if (res.type === 'tank') {
        dispatch(updateWtSensors(res));
      }
      if (res.type === 'env') {
        dispatch(updateEnvSensors(res));
      }
      if (res.type === 'security') {
        dispatch(updateSecuritySensors(res));
      }
      if (res.type === 'rectifier') {
        dispatch(updateRectifierSensors(res));
      }
      if (res.type === 'tubewell') {
        dispatch(updateTubewellSensors(res));
      }
      else if (res.type === 'st_light') {
        dispatch(updateLightSensors(res));
      }
      else if (res.type === 'geyser_system') {
        dispatch(updateGeyserSensors(res));
      }
      else if (res.type === 'hybrid_geyser_system') {
        dispatch(updateHybridGeyserSensors(res));
      }
      else if (res.type === 'tempsys') {
        if (res.socket_type == 'fan_update') 
        {
          dispatch(updateFan(res));
        }
        dispatch(update_Temperature(res));
      }
      else if (res.type === 'gassys') {
        dispatch(update_gas_alarm(res));
      }
    });

    socket.on(`${user_id}-notification`, (res) => {
      dispatch(addNotification(res));

      notify('RubiTron IoT Dashboard', res.title);

      if (res.saveKey) {
        const key = enqueueSnackbar(res.title, {
          variant: res.variant,
          persist: res.persist
        });

        if (res.led_id !== undefined) {
          saveLedKey(key, res.led_id);
        }
        if (res.lms_id !== undefined) {
          saveLmsKey(key, res.lms_id);
        }
      } else if (res.key) {
        closeSnackbar(res.key);
        enqueueSnackbar(res.title, {
          variant: res.variant,
          persist: res.persist
        });
      } else {
        enqueueSnackbar(res.title, {
          variant: res.variant,
          persist: res.persist
        });
      }
    });

    return () => {
      socket.off();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.root}>
      <TopBar
        className={classes.topBar}
        onOpenNavBarMobile={handleNavBarMobileOpen}
      />
      <div className={classes.container}>
        <NavBar
          className={classes.navBar}
          onMobileClose={handleNavBarMobileClose}
          openMobile={openNavBarMobile}
        />
        <main className={classes.content}>
          <Suspense fallback={<LinearProgress />}>
            {renderRoutes(route.routes)}
          </Suspense>
          <HelpModal />
        </main>
      </div>
      <BottomBar className={classes.bottomBar} /> 
    </div>
  );
};

Dashboard.propTypes = {
  route: PropTypes.object
};

export default Dashboard;
