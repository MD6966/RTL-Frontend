import axios from 'axios';
import { makeConfig } from './sessionActions';

export const getLmsTableData = (type, id, startDate, endDate) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: 'LMS_TABLE_LOADING',
    lms_id: id
  });

  const config = await makeConfig('application/json');

  const body = {
    startDate,
    endDate
  };

  try {
    const data = await axios.post(
      `${process.env.REACT_APP_URL}lms/log/${type}/${id}`,
      body,
      config
    );

    dispatch({
      type: 'LMS_TABLE_DATA',
      payload: data.data,
      lms_id: id
    });
  } catch (err) {
    console.log(err);
  }
};

export const getLmsSensors = (id, type) => async (dispatch, getState) => {
  dispatch({
    type: 'LMS_GENERAL_LOADING'
  });

  const config = await makeConfig('application/json');

  try {
    const data = await axios.get(
      `${process.env.REACT_APP_URL}lms/${id}/${type}`,
      config
    );

    dispatch({
      type: 'GET_LMS',
      payload: data.data
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateLmsSensors = (data) => async (dispatch, getState) => {
  if (data.ph !== undefined) {
    dispatch({
      type: 'UPDATE_LMS_PH',
      payload: data.ph,
      id: data.lms_id
    });
  }

  if (data.tds !== undefined) {
    dispatch({
      type: 'UPDATE_LMS_TDS',
      payload: data.tds,
      id: data.lms_id
    });
  }

  if (data.waterflow !== undefined) {
    dispatch({
      type: 'UPDATE_LMS_WATERFLOW',
      payload: data.waterflow,
      id: data.lms_id
    });
  }

  if (data.dissolvedOxygen !== undefined) {
    dispatch({
      type: 'UPDATE_LMS_O2',
      payload: data.dissolvedOxygen,
      id: data.lms_id
    });
  }

  if (data.aerator !== undefined) {
    dispatch({
      type: 'UPDATE_LMS_AERATOR',
      payload: data.aerator,
      id: data.lms_id
    });
  }

  if (data.motor !== undefined) {
    dispatch({
      type: 'UPDATE_LMS_MOTOR',
      payload: data.motor,
      id: data.lms_id
    });
  }

  if (data.temperature !== undefined) {
    dispatch({
      type: 'UPDATE_LMS_TEMPERATURE',
      payload: data.temperature,
      id: data.lms_id
    });
  }

  if (data.battery !== undefined) {
    dispatch({
      type: 'UPDATE_LMS_BATTERY',
      payload: data.battery,
      id: data.lms_id
    });
  }

  if (data.ut !== undefined) {
    dispatch({
      type: 'UPDATE_LMS_UT',
      payload: data.ut,
      id: data.lms_id
    });
  }

  if (data.lt !== undefined) {
    dispatch({
      type: 'UPDATE_LMS_LT',
      payload: data.lt,
      id: data.lms_id
    });
  }
};

export const getLmsChartData = (name, range, id) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: 'LMS_CHART_LOADING',
    lms_id: id
  });

  const config = await makeConfig('application/json');

  try {
    const data = await axios.get(
      `${process.env.REACT_APP_URL}lms/chart/${name}/${range}/${id}`,
      config
    );
    dispatch({
      type: 'LMS_CHART_DATA',
      payload: data.data,
      lms_id: id
    });
  } catch (err) {
    console.log(err);
  }
};

export const setLmsThreshold = (threshold, id) => async (
  dispatch,
  getState
) => {
  const config = await makeConfig('application/json');

  const body = {
    threshold
  };

  try {
    const data = await axios.post(
      `${process.env.REACT_APP_URL}lms/threshold/${id}`,
      body,
      config
    );
    dispatch({
      type: 'SET_LMS_THRESHOLD',
      threshold,
      id
    });
  } catch (err) {
    dispatch({
      type: 'GET_ERRORS',
      message: err.response.data,
      id: 'THRESHOLD_FAIL'
    });
  }
};

export const setLmsUpperThreshold = (threshold, id) => async (
  dispatch,
  getState
) => {
  const config = await makeConfig('application/json');

  const body = {
    threshold
  };

  try {
    const data = await axios.post(
      `${process.env.REACT_APP_URL}lms/upperThreshold/${id}`,
      body,
      config
    );
    dispatch({
      type: 'SET_LMS_UPPERTHRESHOLD',
      threshold,
      id
    });
  } catch (err) {
    dispatch({
      type: 'GET_ERRORS',
      message: err.response.data,
      id: 'THRESHOLD_FAIL'
    });
  }
};

export const setLmsTank = (tank, id) => async (dispatch, getState) => {
  const config = await makeConfig('application/json');

  const body = {
    tank
  };

  try {
    const data = await axios.post(
      `${process.env.REACT_APP_URL}lms/tank/${id}`,
      body,
      config
    );
    dispatch({
      type: 'SET_LMS_TANK',
      tank,
      id
    });
  } catch (err) {
    dispatch({
      type: 'GET_ERRORS',
      message: err.response.data,
      id: 'TANK_FAIL'
    });
  }
};

export const getLmsMacroChartData = (chartName, chartType, ids) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: 'LMS_MACRO_CHART_LOADING'
  });

  const config = await makeConfig('application/json');

  const body = {
    ids
  };

  try {
    const data = await axios.post(
      `${process.env.REACT_APP_URL}lms/chart/macro/${chartName}/${chartType}`,
      body,
      config
    );
    dispatch({
      type: 'LMS_MACRO_CHART_DATA',
      payload: data.data
    });
  } catch (err) {
    console.log(err);
  }
};

export const getLmsAlerts = (id, type) => async (dispatch, getState) => {
  dispatch({
    type: 'LMS_ALERTS_LOADING'
  });

  const config = await makeConfig('application/json');

  const body = {
    id,
    type
  };

  const data = await axios.post(
    `${process.env.REACT_APP_URL}lms/alerts`,
    body,
    config
  );
  dispatch({
    type: 'GET_LMS_ALERTS',
    payload: data.data
  });
};

export const clearLms = () => async (dispatch, getState) => {
  dispatch({
    type: 'LMS_GENERAL_LOADING'
  });
};

export const lmsMacroSettings = async (id, lt, ut) => {
  const config = await makeConfig('application/json');
  const body = {
    id,
    threshold: lt,
    upperThreshold: ut,
    type: 'farm'
  };
  axios.post(`${process.env.REACT_APP_URL}lms/macro/settings`, body, config);
};

export const lmsLoading = () => async (dispatch, getState) => {
  dispatch({
    type: 'CLEAR_AND_LOAD_LMS'
  });
};
