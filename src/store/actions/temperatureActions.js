import axios from 'axios';
import { makeConfig } from './sessionActions';

export const getTemperatureSensors = (user_id) => async (
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
      `${process.env.REACT_APP_URL}temp/${user_id}`,
      config
    );
    dispatch({
      type: 'GET_TEMPERATURE',
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

export const setThreshold = (threshold, id) => async (dispatch, getState) => {
  const config = await makeConfig('application/json');

  const body = {
    threshold
  };

  try {
    const data = await axios.post(
      `${process.env.REACT_APP_URL}temp/threshold/${id}`,
      body,
      config
    );
    dispatch({
      type: 'SET_THRESHOLD',
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

export const setUpperThreshold = (threshold, id) => async (
  dispatch,
  getState
) => {
  const config = await makeConfig('application/json');

  const body = {
    upperThreshold: threshold
  };

  try {
    const data = await axios.post(
      `${process.env.REACT_APP_URL}temp/upperThreshold/${id}`,
      body,
      config
    );
    dispatch({
      type: 'SET_UPPER_THRESHOLD',
      payload: data.data
    });
  } catch (err) {
    dispatch({
      type: 'GET_ERRORS',
      message: err.response.data,
      id: 'THRESHOLD_FAIL',
      status: err.response.status
    });
  }
};

export const updateTemperature = (data) => async (dispatch, getState) => {
  if (data.temperature !== undefined) {
    dispatch({
      type: 'UPDATE_TEMPERATURE',
      payload: data
    });
  } else if (data.ut !== undefined) {
    dispatch({
      type: 'UPDATE_TEMPERATURE_UT',
      payload: data
    });
  } else if (data.lt !== undefined) {
    dispatch({
      type: 'UPDATE_TEMPERATURE_LT',
      payload: data
    });
  }
};

export const getTempAlerts = (id) => async (dispatch, getState) => {
  dispatch({
    type: 'TEMP_ALERTS_LOADING'
  });

  const config = await makeConfig('application/json');

  const body = {
    id
  };

  const data = await axios.post(
    `${process.env.REACT_APP_URL}temp/alerts`,
    body,
    config
  );
  dispatch({
    type: 'GET_TEMP_ALERTS',
    payload: data.data
  });
};

export const getTempMacroChartData = (chartType, ids) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: 'TEMP_MACRO_CHART_LOADING'
  });

  const config = await makeConfig('application/json');

  const body = {
    ids
  };

  try {
    const data = await axios.post(
      `${process.env.REACT_APP_URL}temp/chart/macro/${chartType}`,
      body,
      config
    );
    dispatch({
      type: 'TEMP_MACRO_CHART_DATA',
      payload: data.data
    });
  } catch (err) {
    
    console.log(err);
  }
};

export const getTemperatureChartData = (range, id) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: 'TEMP_CHART_LOADING',
    temp_id: id
  });

  const config = await makeConfig('application/json');

  try {
    const data = await axios.get(
      `${process.env.REACT_APP_URL}temp/chart/${range}/${id}`,
      config
    );
    dispatch({
      type: 'TEMP_CHART_DATA',
      payload: data.data,
      temp_id: id
    });
  } catch (err) {
    console.log(err);
  }
};

export const getTemperatureTableData = (id, startDate, endDate) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: 'TEMP_TABLE_LOADING',
    temp_id: id
  });

  const config = await makeConfig('application/json');

  const body = {
    startDate,
    endDate
  };

  try {
    const data = await axios.post(
      `${process.env.REACT_APP_URL}temp/log/${id}`,
      body,
      config
    );

    dispatch({
      type: 'TEMP_TABLE_DATA',
      payload: data.data,
      temp_id: id
    });
  } catch (err) {
    console.log(err);
  }
};

export const temperatureMacroSettings = async (id, lt, ut) => {
  const config = await makeConfig('application/json');
  const body = {
    id,
    threshold: lt,
    upperThreshold: ut
  };
  axios.post(`${process.env.REACT_APP_URL}temp/macro/settings`, body, config);
};
