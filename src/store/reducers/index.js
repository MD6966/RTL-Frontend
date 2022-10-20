/* eslint-disable linebreak-style */
import { combineReducers } from 'redux';

import sessionReducer from './sessionReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import fuelReducer from './fuelReducer';
import notificationReducer from './notificationReducer';
import temperatureReducer from './temperatureReducer';
import ledReducer from './ledReducer';
import socketReducer from './socketReducer';
import coldChainReducer from './coldChainReducer';
import lmsReducer from './lmsReducer';
import userReducer from './userReducer';
import adminReducer from './adminReducer';
import emReducer from './emReducer';
import wtReducer from './wtReducer';
import envReducer from './envReducer';
import humidityReducer from './HumidityReducer';
import securityReducer from './securityReducer';
import rectifierReducer from './rectifierReducer';
import tubewellReducer from './tubewellReducer';
import lightReducer from './lightReducer';
import geyserReducer from './geyserReducer';
import temperature_Reducer from './temperature_Reducer';
import gasReducer from './gasReducer';
import geyserHybridReducer from './geyserHybridReducer';


const rootReducer = combineReducers({
  session: sessionReducer,
  auth: authReducer,
  error: errorReducer,
  fuel: fuelReducer,
  notification: notificationReducer,
  temperature: temperatureReducer,
  led: ledReducer,
  socket: socketReducer,
  chain: coldChainReducer,
  lms: lmsReducer,
  users: userReducer,
  admin: adminReducer,
  em: emReducer,
  wt: wtReducer,
  env: envReducer,
  humidity: humidityReducer,
  security: securityReducer,
  rectifier: rectifierReducer,
  tw: tubewellReducer,
  hl: lightReducer,
  geyser: geyserReducer,
  temp: temperature_Reducer,
  gas: gasReducer,
  geyserhybrid: geyserHybridReducer
});

export default rootReducer;
