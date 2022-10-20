/* eslint-disable linebreak-style */
import axios from 'axios';
import { makeConfig } from './sessionActions';

export const getLedTableData = (id, startDate, endDate) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: 'LED_TABLE_LOADING',
    led_id: id
  });

  const config = await makeConfig('application/json');

  const body = {
    startDate,
    endDate
  };

  try {
    const data = await axios.post(
      `${process.env.REACT_APP_URL}led/log/${id}`,
      body,
      config
    );
    dispatch({
      type: 'LED_TABLE_DATA',
      payload: data.data,
      led_id: id
    });
  } catch (err) {
    console.log(err);
  }
};

export const getCNCSensors = (id) => async (dispatch, getState) => {
  dispatch({
    type: 'LED_LOADING'
  });

  const config = await makeConfig('application/json');

  try {
    const data = await axios.get(
      `${process.env.REACT_APP_URL}led/${id}`,
      config
    );
    dispatch({
      type: 'GET_LED',
      payload: data.data
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateLedCamera = (data) => async (dispatch, getState) => {
  dispatch({
    type: 'UPDATE_CNC_CAMERA',
    payload: data.camera,
    id: data.led_id
  });
};

export const updateLedColor = (data) => async (dispatch, getState) => {
  dispatch({
    type: 'UPDATE_CNC_COLOR',
    payload: data.color,
    id: data.led_id
  });
};

export const updateLedOffline = (data) => async (dispatch, getState) => {
  dispatch({
    type: 'UPDATE_CNC_OFFLINE',
    payload: data.offline,
    id: data.led_id
  });
};

export const getLedChartData = (range, id) => async (dispatch, getState) => {
  dispatch({
    type: 'LED_CHART_LOADING',
    led_id: id
  });

  const config = await makeConfig('application/json');

  try {
    const data = await axios.get(
      `${process.env.REACT_APP_URL}led/chart/${range}/${id}`,
      config
    );
    dispatch({
      type: 'LED_CHART_DATA',
      payload: data.data,
      led_id: id
    });
  } catch (err) {
    console.log(err);
  }
};

export const learnImage = (data) => async (dispatch, getState) => {
  dispatch({
    type: 'LEARN_ENCODING',
    payload: data.buffer
  });
};

export const getAllMLSensors = () => async (dispatch, getState) => {
  dispatch({
    type: 'LED_LOADING'
  });

  const config = await makeConfig('application/json');

  try {
    const data = await axios.post(
      `${process.env.REACT_APP_URL}led/sensorsForLearn`,
      config
    );
    dispatch({
      type: 'GET_LED',
      payload: data.data
    });
  } catch (err) {
    console.log(err);
  }
};
