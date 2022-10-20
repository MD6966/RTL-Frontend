/* eslint-disable linebreak-style */
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { CircularProgress } from '@material-ui/core';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { configureStore } from './store';

import App from './App';
import * as serviceWorker from './serviceWorker';

const { store, persistor } = configureStore();

ReactDOM.render(
  <StoreProvider store={store}>
    <PersistGate
      loading={<CircularProgress />}
      persistor={persistor}
    >
      <App />
    </PersistGate>
  </StoreProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
