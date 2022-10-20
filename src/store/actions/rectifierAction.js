/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import axios from 'axios';
import { makeConfig } from './sessionActions';

export const get_Rc_sensor = (id) => async (dispatch) => {
  const config = await makeConfig('application/json');
  try {
    const res = await axios.get(`${process.env.REACT_APP_URL}rectifier/${id}`,config);
    dispatch({
      type: 'GET_RC_SENSOR',
      payload: res.data
    });


  } catch(err){
    console.log(err);
  }


};

export const updateRectifierSensors = (data) => async (dispatch, getState) => {
  if (data.ac_status !== undefined) {
    dispatch({
      type: 'UPDATE_INPUT_POWER_STATUS',
      payload: data,
      id: data.rectifier_id
    });
  } 
  else if (data.ac_inputVoltage !== undefined) {
    dispatch({
      type: 'UPDATE_INPUT_VOLTAGE',
      payload: data,
      id: data.rectifier_id
    });
  }
  else if (data.rec_status !== undefined) {
    dispatch({
      type: 'UPDATE_RECTIFICATION_STATUS',
      payload: data,
      id: data.rectifier_id
    });
  }
  else if (data.rec_outputDcVoltage !== undefined) {
    dispatch({
      type: 'UPDATE_OUTPUT_DC_VOLTAGE',
      payload: data,
      id: data.rectifier_id
    });
  }
  else if (data.battery_status !== undefined) {
    dispatch({
      type: 'UPDATE_BATTERY_BANK_CONNECTION',
      payload: data,
      id: data.rectifier_id
    });
  }
  else if (data.battery_voltagePercentage !== undefined) {
    dispatch({
      type: 'UPDATE_BANK_BATTERY_STATUS',
      payload: data,
      id: data.rectifier_id
    });
  }
  else if (data.ac_lowerthreshold !== undefined) {
    dispatch({
      type: 'UPDATE_INPUT_VOLTAGE_LOWER_THRESHOLD',
      payload: data,
      id: data.rectifier_id
    });
  }
  else if (data.ac_upperthreshold !== undefined) {
    dispatch({
      type: 'UPDATE_INPUT_VOLTAGE_UPPER_THRESHOLD',
      payload: data,
      id: data.rectifier_id
    });
  }
  else if (data.rec_lowerthreshold !== undefined) {
    dispatch({
      type: 'UPDATE_OUTPUT_VOLTAGE_LOWER_THRESHOLD',
      payload: data,
      id: data.rectifier_id
    });
  }
  else if (data.rec_upperthreshold !== undefined) {
    dispatch({
      type: 'UPDATE_OUTPUT_VOLTAGE_UPPER_THRESHOLD',
      payload: data,
      id: data.rectifier_id
    });
  }
  else if (data.battery_theftThreshold !== undefined) {
    dispatch({
      type: 'UPDATE_BATTERY_THEFT_THRESHOLD',
      payload: data,
      id: data.rectifier_id
    });
  }
  else if (data.battery_lowBatteryAlertThreshold !== undefined) {
    dispatch({
      type: 'UPDATE_LOW_BATTERY_THRESHOLD',
      payload: data,
      id: data.rectifier_id
    });
  }
  else if (data.battery_maxVolageValue !== undefined) {
    dispatch({
      type: 'UPDATE_MAX_BATTERY_THRESHOLD',
      payload: data,
      id: data.rectifier_id
    });
  }
};

export const getTableData = (id, startDate, endDate, logtype) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: 'RECTIFIER_TABLE_LOADING',
    rectifier_id: id
  });

  const config = await makeConfig('application/json');

  const body = {
    startDate,
    endDate,
    logtype,
    id
  };


  try {
    const data = await axios.post(
      `${process.env.REACT_APP_URL}rectifier/logs`,
      body,
      config
    );
    dispatch({
      type: 'RECTIFIER_TABLE_DATA',
      payload: data.data,
      rectifier_id: id,
    });
    
  } 
  
  catch (err) {
    console.log(err);
  }
};

export const getRectifierChartData = (chartType, chartRange, id) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: 'RECTIFIER_CHART_LOADING',
    rectifier_id: id
  });

  const config = await makeConfig('application/json');

  try {
    const data = await axios.get(
      `${process.env.REACT_APP_URL}rectifier/chart/${chartType}/${chartRange}/${id}`,
      config
    );
    dispatch({
      type: 'RECTIFIER_CHART_DATA',
      payload: data.data,
      rectifier_id: id
    });
  } catch (err) {
    console.log(err);
  }
};

export const setThreshold = (_id, type, value) => async (dispatch) => {
  const config = await makeConfig('application/json');

  const body = {
    value,
    type,
    _id
  };

  try{
    const res = await axios.post(`${process.env.REACT_APP_URL}rectifier/set`,body ,config);

    if(type === 'ac_lowerthreshold'){
      dispatch({
        type:'INPUT_VOLTAGE_LOWER_THRESHOLD',
        payload: value,
        id: _id
      });
    }
    else if (type === 'ac_upperthreshold'){
      dispatch({
        type:'INPUT_VOLTAGE_UPPER_THRESHOLD',
        payload: value,
        id: _id
      });
    }
    else if (type === 'rec_lowerthreshold'){
      dispatch({
        type:'OUTPUT_VOLTAGE_LOWER_THRESHOLD',
        payload: value,
        id: _id
      });
    }
    else if (type === 'rec_upperthreshold'){
      dispatch({
        type:'OUTPUT_VOLTAGE_UPPER_THRESHOLD',
        payload: value,
        id: _id
      });
    }
    else if (type === 'battery_theftThreshold'){
      dispatch({
        type:'BATTERY_THEFT_THRESHOLD',
        payload: value,
        id: _id
      });
    }
    else if (type === 'battery_lowBatteryAlertThreshold'){
      dispatch({
        type:'LOW_BATTERY_THRESHOLD',
        payload: value,
        id: _id
      });
    }
    else if (type === 'battery_maxVolageValue'){
      dispatch({
        type:'MAX_BATTERY_THRESHOLD',
        payload: value,
        id: _id
      });
    }

  } 
  catch(err){
    console.log(err);
  }
};


export const getRectifierAlerts = (id) => async (dispatch, getState) => {
  dispatch({
    type: 'RECTIFIER_ALERTS_LOADING'
  });

  const config = await makeConfig('application/json');

  const body = {
    id
  };

  const data = await axios.post(
    `${process.env.REACT_APP_URL}rectifier/alerts`,
    body,
    config
  );
  dispatch({
    type: 'GET_RECTIFIER_ALERTS',
    payload: data.data
  });
};
