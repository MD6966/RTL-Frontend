import axios from 'axios';
import { makeConfig } from './sessionActions';
import get_sensors from '../../helper/tempsys/getsensors.action';
import fan_control from '../../helper/tempsys/fancontrol.action';
import update_temp from '../../helper/tempsys/updatetemp.action';
import temp_threshold from 'helper/tempsys/temp_threshold.action';
import fan_automode from 'helper/tempsys/fan_automode.action';
import temp_log_data from 'helper/tempsys/temp_log_data.action';
import temp_charts from 'helper/tempsys/temp_charts.action';

// get all sensors 
export const getTemperature_Sensors = () => async ( dispatch, getState) => {
  get_sensors(dispatch);
};

// update fan status
export const updateFan = (res) => async (dispatch) => {
  fan_control(res, dispatch);
};

// temperature threshold
export const setThreshold = (type, module_id, value) => async (dispatch) => {
  temp_threshold(type, module_id, value, dispatch);
  console.log('Module id is ', module_id);
};

// real time update
export const update_Temperature = (data) => async (dispatch, getState) => {
  update_temp(data, dispatch);
};

// Fan Mode
export const setFanMode = (module_id, mode) => async (dispatch) => {
  fan_automode(module_id, mode, dispatch)
};

export const getTemp_Alerts = (id) => async (dispatch, getState) => {
  dispatch({
    type: 'TEMPERATURE_ALERTS_LOADING'
  });

  const config = await makeConfig('application/json');

  // const body = {
  //   id
  // };

  const data = await axios.get(
    `${process.env.REACT_APP_URL}temperaturesystem/alerts/${id}`,
    config
  );
  dispatch({
    type: 'GET_TEMPERATURE_ALERTS',
    payload: data.data
  });
};


export const chartData = (id, type, range) => async (dispatch, getState) => {
  temp_charts(id, type, range, dispatch);
};

// Log
export const temp_Log = (id, fan_id, type, start_date, end_date) => async ( dispatch, getState ) => {
  temp_log_data(id, fan_id, type, start_date, end_date, dispatch);
};