/* eslint-disable linebreak-style */
import axios from 'axios';
import { makeConfig } from './sessionActions';

export const getHumiditySensors = (user_id) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: 'TEMP_SENSORS_LOADING'
  });

  // const config = await makeConfig('application/json');
  const config = {
    headers: {
      'content-type': 'application/json'
    }
  }

  try {
    const data = await axios.get(
      `${process.env.REACT_APP_URL}humidity/${user_id}`,
      config
    );
    dispatch({
      type: 'GET_HUMIDITY',
      payload: data.data
    });
  } catch (err) {
    dispatch({
      type: 'GET_ERRORS',
      message: err.response.data,
      id: 'LOGIN_FAIL',
      status: err.response.status
    });
  }
};

export const setTemThreshold = (threshold, id) => async (dispatch, getState) => {
  const config = await makeConfig('application/json');

  const body = {
    threshold
  };

  try {
    const data = await axios.post(
      `${process.env.REACT_APP_URL}humidity/threshold/${id}`,
      body,
      config
    );
    // dispatch({
    //   type: 'SET_THRESHOLD',
    //   payload: data.data
    // });
  } catch (err) {
    dispatch({
      type: 'GET_ERRORS',
      message: err.response.data,
      id: 'LOGIN_FAIL',
      status: err.response.status
    });
  }
};

export const setTemUpperThreshold = (threshold, id) => async (
  dispatch,
  getState
) => {
  const config = await makeConfig('application/json');

  const body = {
    upperThreshold: threshold
  };

  try {
    const data = await axios.post(
      `${process.env.REACT_APP_URL}humidity/upperThreshold/${id}`,
      body,
      config
    );
    // dispatch({
    //   type: 'SET_UPPER_THRESHOLD',
    //   payload: data.data
    // });
  } catch (err) {
    dispatch({
      type: 'GET_ERRORS',
      message: err.response.data,
      id: 'THRESHOLD_FAIL',
      status: err.response.status
    });
  }
};

export const setHThreshold = (threshold, id) => async (dispatch, getState) => {
  const config = await makeConfig('application/json');

  const body = {
    humidity_threshold :threshold
  };

  try {
    const data = await axios.post(
      `${process.env.REACT_APP_URL}humidity/hl_Threshold/${id}`,
      body,
      config
    );
    // dispatch({
    //   type: 'SET_HTHRESHOLD',
    //   payload: data.data
    // });
  } catch (err) {
    dispatch({
      type: 'GET_ERRORS',
      message: err.response.data,
      id: 'LOGIN_FAIL',
      status: err.response.status
    });
  }
};

export const setHUpperThreshold = (threshold, id) => async (
  dispatch,
  getState
) => {
  const config = await makeConfig('application/json');

  const body = {
    humidity_upperThreshold: threshold
  };

  try {
    const data = await axios.post(
      `${process.env.REACT_APP_URL}humidity/hu_Threshold/${id}`,
      body,
      config
    );
    // dispatch({
    //   type: 'SET_HUPPER_THRESHOLD',
    //   payload: data.data
    // });
  } catch (err) {
    dispatch({
      type: 'GET_ERRORS',
      message: err.response.data,
      id: 'THRESHOLD_FAIL',
      status: err.response.status
    });
  }
};

export const updateHumidity = (data) => async (dispatch, getState) => {
  if (data.temperature !== undefined) {
    dispatch({
      type: 'UPDATE_HUMIDITY_TEMP',
      payload: data
    });
  } else if (data.ut !== undefined) {
    dispatch({
      type: 'UPDATE_HUMIDITY_TEMP_UT',
      payload: data.ut,
      id: data.humidity_id
    });
  } else if (data.lt !== undefined) {
    dispatch({
      type: 'UPDATE_HUMIDITY_TEMP_LT',
      payload: data.lt,
      id: data.humidity_id
    });
  } else if (data.humidity !== undefined) {
    dispatch({
      type: 'UPDATE_HUMIDITY',
      payload: data
    });
  } else if (data.hut !== undefined) {
    dispatch({
      type: 'UPDATE_HUMIDITY_UT',
      payload: data.hut,
      id: data.humidity_id
    });
  } else if (data.hlt !== undefined) {
    dispatch({
      type: 'UPDATE_HUMIDITY_LT',
      payload: data.hlt,
      id: data.humidity_id
    });
  }
};

export const getHumidityAlerts = (id) => async (dispatch, getState) => {
  dispatch({
    type: 'TEMP_ALERTS_LOADING'
  });

  const config = await makeConfig('application/json');

  const body = {
    id
  };

  const data = await axios.post(
    `${process.env.REACT_APP_URL}humidity/alerts`,
    body,
    config
  );
  dispatch({
    type: 'GET_HUMIDITY_ALERTS',
    payload: data.data
  });
};

export const getHumidityChartData = (type,range, id) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: 'CHART_LOADING',
    humidity_id: id
  });

  const config = await makeConfig('application/json');

  try {
    if(type === 'temperature'){
      const data = await axios.get(`${process.env.REACT_APP_URL}humidity/chart/${range}/temperature/${id}`,config);
      const temperature = data.data;
      dispatch({
        type: 'TEMPERATURE_CHART_DATA',
        payload: temperature,
        humidity_id: id
      });
    } else if (type === 'humidity'){
      const data = await axios.get(`${process.env.REACT_APP_URL}humidity/chart/${range}/humidity/${id}`,config);
      const humidity = data.data;
      dispatch({
        type: 'HUMIDITY_CHART_DATA',
        payload: humidity,
        humidity_id: id
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const getHumidityTableData = (type,id, startDate, endDate) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: 'HUMIDITY_TABLE_LOADING',
    humidity_id: id
  });
  const config = await makeConfig('application/json');
  const body = {
    startDate,
    endDate
  };
  try {
    const data = await axios.post(`${process.env.REACT_APP_URL}humidity/log/${type}/${id}`,body,config);
    dispatch({
      type: 'HUMIDITY_TABLE_DATA',
      payload: data.data,
      humidity_id: id
    });
  } catch (err) {
    console.log(err);
  }
};

export const humidityMacroSettings = async (id, lt, ut, hlt, hut) => {
  const config = await makeConfig('application/json');
  const body = {
    id,
    threshold: lt,
    upperThreshold: ut,
    humidity_threshold : hlt,
    humidity_upperThreshold : hut
  };
  axios.post(`${process.env.REACT_APP_URL}humidity/macro/settings`, body, config);
};
