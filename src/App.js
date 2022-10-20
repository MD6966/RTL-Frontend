import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import MomentUtils from '@date-io/moment';
import { ThemeProvider } from '@material-ui/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { renderRoutes } from 'react-router-config';
import socketIOClient from 'socket.io-client';
import { SnackbarProvider } from 'notistack';
import { createTheme } from './theme';
import routes from './routes';
import CSSBaseLine from '@material-ui/core/CssBaseline';
import 'promise-polyfill/src/polyfill';
import {
  ScrollReset,
  GoogleAnalytics,
  CookiesNotification
} from './components';
import './mixins/chartjs';
import './mixins/moment';
import './mixins/validate';
import './mixins/prismjs';
import './mock';
import './assets/scss/index.scss';

import { auth, socketConnect } from 'store/actions';
import { Button } from '@material-ui/core';

import ErrorBoundary from './views/ErrorBoundary';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './App.css'
const history = createBrowserHistory();
let socket = null;

const App = () => {
  const [selectedTheme, setTheme] = useState(createTheme('light'));
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isAdminAuthenticated = useSelector(
    (state) => state.auth.isAdminAuthenticated
  );
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (isAuthenticated !== true && user !== null) {
      dispatch(auth());
    }
    socket = socketIOClient(`${process.env.REACT_APP_URL}`);
    console.log(socket)
    dispatch(socketConnect(socket));
  }, []);

  useEffect(() => {
    if (isAuthenticated === null || isAuthenticated === false) {
      setTheme(createTheme('light'));
    } else {
      setTheme(createTheme(user.settings));
    }
  }, [isAuthenticated, user]);
  // let sum = '0';
  // setInterval(() => {
  //   sum += 5;
  //   socket.emit('tank', {
  //     // id: '5ec3722f0dfabe4f21252835', // sensor id Granddashboard 
  //     // id: '5fab67c527e4c568b0101435',  // module1 id
  //     id: '5fb3714773014d111c305c84',
  //     fillLevel: 75,
  //     t_lid: 0,
  //     motor: 1
  //   });
  // }, 5000);

  const notistackRef = React.createRef();

  const onClickDismiss = (key) => () => {
    notistackRef.current.closeSnackbar(key);
  };

  return (
    <ThemeProvider theme={selectedTheme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <SnackbarProvider
          action={(key) => (
            <Button onClick={onClickDismiss(key)}>
              <FontAwesomeIcon icon={faTimes} />
            </Button>
          )}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          maxSnack={5}
          preventDuplicate
          ref={notistackRef}>
          <CSSBaseLine />
          <Router history={history}>
            <ScrollReset />
            <GoogleAnalytics />
            <CookiesNotification />
            <ErrorBoundary>{renderRoutes(routes)}</ErrorBoundary>
          </Router>
        </SnackbarProvider>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default App;
