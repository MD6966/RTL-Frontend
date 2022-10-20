/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import axios from 'axios';
import { makeConfig } from './sessionActions';

export const get_Security_sensor = (id) => async (dispatch) => {
  const config = await makeConfig('application/json');
  try {
    const res = await axios.get(`${process.env.REACT_APP_URL}security/${id}`,config);
    dispatch({
      type: 'GET_SECURITY_SENSOR',
      payload: res.data
    });


  } catch(err){
    console.log(err);
  }


};
export const updateSecuritySensors = (data) => async (dispatch, getState) => {
  if (data.door_status !== undefined) {
    dispatch({
      type: 'UPDATE_SECURITY_DOOR_STATUS',
      payload: data
    });
  } else if (data.alarm !== undefined) {
    dispatch({
      type: 'UPDATE_FIRE_ALARM_STATUS',
      payload: data
    });
  }    
};
export const getTableData = (logtype, id, startDate, endDate) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: 'SECURITY_TABLE_LOADING',
    security_id: id
  });

  const config = await makeConfig('application/json');

  const body = {
    startDate,
    endDate
  };


  try {
    const data = await axios.post(
      `${process.env.REACT_APP_URL}security/log/${logtype}/${id}`,
      body,
      config
    );
    let arr = data.data;
    if (logtype === 'door_status') {
      data.data.data.map((s) => {
        const index1 = data.data.data.findIndex((i) => i.logs === 0);
        const index2 = data.data.data.findIndex((i) => i.logs === 1);
        if (s.logs === 1) {

          arr.data[index2].logs = 'Open'
        }
        if (s.logs === 0) {
          arr.data[index1].logs = 'Close'
        }
      });
      dispatch({
        type: 'SECURITY_TABLE_DATA',
        payload: arr,
        security_id: id
      });
      
    }  
    else if (logtype === 'alarm') {
      data.data.data.map((s) => {
        const index1 = data.data.data.findIndex((i) => i.logs === false);
        const index2 = data.data.data.findIndex((i) => i.logs === true);
        if (s.logs === true) {

          arr.data[index2].logs = 'Active'
        }
        if (s.logs === false) {
          arr.data[index1].logs = 'Non-Active'
        }
      });
      dispatch({
        type: 'SECURITY_TABLE_DATA',
        payload: arr,
        security_id: id
      });

    }  
    else {
      dispatch({
        type: 'SECURITY_TABLE_DATA',
        payload: data.data,
        security_id: id
      });
    }
  } 
  catch (err) {
    console.log(err);
  }
};
export const getSecurityChartData = (chartType, chartRange, id) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: 'SECURITY_CHART_LOADING',
    security_id: id
  });

  const config = await makeConfig('application/json');

  try {
    const data = await axios.get(
      `${process.env.REACT_APP_URL}security/chart/${chartType}/${chartRange}/${id}`,
      config
    );
    dispatch({
      type: 'SECURITY_CHART_DATA',
      payload: data.data,
      security_id: id
    });
  } catch (err) {
    console.log(err);
  }
};
export const getSecurityAlerts = (id) => async (dispatch, getState) => {
  dispatch({
    type: 'SECURITY_ALERTS_LOADING'
  });

  const config = await makeConfig('application/json');

  const body = {
    id
  };

  const data = await axios.post(
    `${process.env.REACT_APP_URL}security/alerts`,
    body,
    config
  );
  dispatch({
    type: 'GET_SECURITY_ALERTS',
    payload: data.data
  });
};


