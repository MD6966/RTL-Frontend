
import axios from 'axios';
import alarm_control from 'helper/gas_system/alarm_control.action';
import gasLogs from 'helper/gas_system/gasLogs.action';
import gas_charts from 'helper/gas_system/gas_charts.action';
import get_gas from 'helper/gas_system/get_gas.action';
import updateGasAlarm from 'helper/gas_system/updateGasAlarm.action';
import { makeConfig } from './sessionActions';

// get gas sensor
export const get_gas_sensor = () => async (dispatch) => {
  get_gas(dispatch);
};

// alarm on/off
export const gas_alarm = (module_id, alarm) => async (dispatch ) => {
  alarm_control(module_id, alarm, dispatch);
};

// update gas status and alarm
export const update_gas_alarm = (data) => async (dispatch) => {
  updateGasAlarm(data, dispatch);
};

// Logs
export const gas_logs = (id, type, start_date, end_date) => async (dispatch) => {
  gasLogs(id, type, start_date, end_date, dispatch)
};

// gas charts
export const chartData = (id, type, range) => async (dispatch, getState) => {
  gas_charts(id, type, range, dispatch);
};

export const getGasAlerts = (id) => async (dispatch, getState) => {
  dispatch({
    type: 'GAS_ALERTS_LOADING'
  });

  const config = await makeConfig('application/json');

  // const body = {
  //   id
  // };

  const data = await axios.get(
    `${process.env.REACT_APP_URL}gas/alerts/${id}`,
    config
  );
  dispatch({
    type: 'GET_GAS_ALERTS',
    payload: data.data
  });
};


