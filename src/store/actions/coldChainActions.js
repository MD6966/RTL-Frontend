/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import axios from 'axios';
import { makeConfig } from './sessionActions';

export const getColdChainSensors = (user_id, type) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: 'COLDCHAIN_LOADING'
  });

  const config = await makeConfig('application/json');

  try {
    const data = await axios.get(
      `${process.env.REACT_APP_URL}coldChain/${user_id}/${type}`,
      config
    );
    
    dispatch({
      type: 'GET_COLDCHAIN',
      payload: data.data.sensors,
      latlng: data.data.center
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

export const updateColdChainSensors = (data) => async (dispatch, getState) => {
  if (data.status !== undefined) {
    dispatch({
      type: 'UPDATE_COLDCHAIN_STATUS',
      payload: data
    });
  } else if (data.temperature !== undefined) {
    dispatch({
      type: 'UPDATE_COLDCHAIN_TEMPERATURE',
      payload: data
    });
  } else if (data.latitude !== undefined && data.longitude !== undefined) {
    dispatch({
      type: 'UPDATE_COLDCHAIN_LATLONG',
      payload: data
    });
  } else if (data.battery !== undefined) {
    dispatch({
      type: 'UPDATE_COLDCHAIN_BATTERY',
      payload: data
    });
  } else if (data.ut !== undefined) {
    dispatch({
      type: 'UPDATE_COLDCHAIN_UT',
      payload: data
    });
  } else if (data.lt !== undefined) {
    dispatch({
      type: 'UPDATE_COLDCHAIN_LT',
      payload: data
    });
  } else if (data.radius !== undefined) {
    dispatch({
      type: 'UPDATE_COLDCHAIN_RADIUS',
      payload: data
    });
  } else if (data.center !== undefined) {
    dispatch({
      type: 'UPDATE_COLDCHAIN_CENTER',
      payload: data
    });
  }
};

export const getColdChainTableData = (
  tableName,
  id,
  startDate,
  endDate
) => async (dispatch, getState) => {
  dispatch({
    type: 'COLDCHAIN_TABLE_LOADING',
    chain_id: id
  });

  const config = await makeConfig('application/json');

  const body = {
    startDate,
    endDate
  };



  try {
    const data = await axios.post(
      `${process.env.REACT_APP_URL}coldchain/log/${tableName}/${id}`,
      body,
      config
    );
    let arr= data.data;
    if (data.data.title === 'Status Logs'){
      data.data.data.map((s) => {
        const index1 = data.data.data.findIndex((i) => i.status === 0);
        const index2 = data.data.data.findIndex((i) => i.status === 1);
        if (s.status === 1) {
          
          arr.data[index2].status = 'Open'
        }  if (s.status === 0) {
          arr.data[index1].status = 'Close'
        }
      });
      dispatch({
        type: 'COLDCHAIN_TABLE_DATA',
        payload: arr,
        chain_id: id
      });
    }
    else{
      dispatch({
        type: 'COLDCHAIN_TABLE_DATA',
        payload: data.data,
        chain_id: id
      });
    }
    
    
  } catch (err) {
    console.log(err);
  }
};

export const getColdChainChartData = (chartName, chartType, id) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: 'COLDCHAIN_CHART_LOADING',
    chain_id: id
  });

  const config = await makeConfig('application/json');

  try {
    const data = await axios.get(
      `${process.env.REACT_APP_URL}coldChain/chart/${chartName}/${chartType}/${id}`,
      config
    );
    dispatch({
      type: 'COLDCHAIN_CHART_DATA',
      payload: data.data,
      chain_id: id
    });
  } catch (err) {
    console.log(err);
  }
};

export const setColdChainThreshold = (lt, ut, id) => async (
  dispatch,
  getState
) => {
  const config = await makeConfig('application/json');

  const body = {
    ut,
    lt
  };

  try {
    const data = await axios.post(
      `${process.env.REACT_APP_URL}coldChain/threshold/${id}`,
      body,
      config
    );
    dispatch({
      type: 'SET_COLDCHAIN_THRESHOLD',
      ut,
      lt,
      id: id
    });
  } catch (err) {
    dispatch({
      type: 'GET_ERRORS',
      message: err.response.data,
      id: 'THRESHOLD_FAIL'
    });
  }
};

export const setColdChainGeofence = (radius, id) => async (
  dispatch,
  getState
) => {
  const config = await makeConfig('application/json');

  const body = {
    id,
    radius
  };

  try {
    const data = await axios.post(
      `${process.env.REACT_APP_URL}coldChain/radius`,
      body,
      config
    );
    dispatch({
      type: 'SET_COLDCHAIN_RADIUS',
      radius: Number(radius),
      id: id
    });
  } catch (err) {
    dispatch({
      type: 'GET_ERRORS',
      message: err.response.data,
      id: 'RADIUS_FAIL'
    });
  }
};

export const setColdChainGeofenceCenter = (id) => async (
  dispatch,
  getState
) => {
  const config = await makeConfig('application/json');

  const body = {
    id
  };
 
  try {
    const data = await axios.post(
      `${process.env.REACT_APP_URL}coldChain/geofenceCenter`,
      body,
      config
    );

    dispatch({
      type: 'SET_COLDCHAIN_CENTER'
    });
  } catch (err) {
    console.log(err);
    // dispatch({
    //   type: 'GET_ERRORS',
    //   message: err.response.data,
    //   id: 'CENTER_FAIL'
    // });
  }
};

export const getColdChainAlerts = (id, type) => async (dispatch, getState) => {
  dispatch({
    type: 'COLDCHAIN_ALERTS_LOADING'
  });

  const config = await makeConfig('application/json');

  const body = {
    id,
    type
  };

  const data = await axios.post(
    `${process.env.REACT_APP_URL}coldChain/alerts`,
    body,
    config
  );

  dispatch({
    type: 'GET_COLDCHAIN_ALERTS',
    payload: data.data
  });
};

export const coldChainLoading = () => async (dispatch, getState) => {
  dispatch({
    type: 'CLEAR_AND_LOAD_CHAIN'
  });
};
