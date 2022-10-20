/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import axios from 'axios';
import { makeConfig } from './sessionActions';
import Gen_Mode from './Fuel_Actions/Gen_Mode';

export const getFuelSensors = (user_id) => async (dispatch, getState) => {
  dispatch({
    type: 'FUEL_GENERAL_LOADING'
  });

  const config = await makeConfig('application/json');

  try {
    const data = await axios.get(
      `${process.env.REACT_APP_URL}fuel/${user_id}`,
      config
    );
    dispatch({
      type: 'GET_FUEL',
      payload: data.data
    });
  } catch (err) {
    dispatch({
      type: 'GET_ERRORS',
      message: err.response.data,
      id: 'FUEL_DATA_FAIL',
      status: err.response.status
    });
  }
};

// Generator Mode Update (Automatic, Off, Manual)
export const setGenMode = (id, mode) => async (dispatch, getState) => 
{
   Gen_Mode (id, mode, dispatch);
};

export const getMaintananceData = (id) => async (dispatch, getState) => {
  dispatch({
    type: 'FUEL_MAINTANANCE_LOADING'
  });
 
  const config = await makeConfig('application/json');

  try {
    const data = await axios.get(
      `${process.env.REACT_APP_URL}fuel/runningTimes/${id}`,
      config
    );
   
    console.log(data);
      
    dispatch({
      type: 'GET_FUEL_MAINTANANCE_DATA',
      payload: data.data,
      fuel_id: id
    });
    
    
  } catch (err) {
  

    dispatch({
      type: 'GET_ERRORS',
      message: err.response.data,
      id: 'FUEL_MAINTANANCE_FAIL',
      status: err.response.status
    });
  }
};

export const updateFuelSensors = (data) => async (dispatch, getState) => {
  if (data.fillLevel !== undefined) {
    dispatch({
      type: 'UPDATE_FUEL_FILLLEVEL',
      payload: data
    });
  } else if (data.door_status !== undefined) {
    dispatch({
      type: 'UPDATE_FUEL_DOORSTATUS',
      payload: data
    });
  } else if (data.voltage !== undefined) {
    dispatch({
      type: 'UPDATE_FUEL_VOLTAGE',
      payload: data
    });
  } else if (data.current !== undefined) {
    dispatch({
      type: 'UPDATE_FUEL_CURRENT',
      payload: data
    });
  } else if (data.power !== undefined) {
    dispatch({
      type: 'UPDATE_FUEL_POWER',
      payload: data
    });
  } else if (data.temperature !== undefined) {
    dispatch({
      type: 'UPDATE_FUEL_TEMPERATURE',
      payload: data
    });
  } else if (data.gen_status !== undefined) {
    dispatch({
      type: 'UPDATE_FUEL_GENSTATUS',
      payload: data
    });
  } else if (data.liters !== undefined) {
    dispatch({
      type: 'UPDATE_FUEL_LITERS',
      payload: data
    });
  } else if (data.oil !== undefined) {
    dispatch({
      type: 'UPDATE_FUEL_OIL',
      payload: data
    });
  } else if (data.maintanance !== undefined) {
    dispatch({
      type: 'UPDATE_FUEL_MAINTANANCE',
      payload: data
    });
  }
  else if (data.sysOffline !== undefined) {
    dispatch({
      type: 'UPDATE_SYS_STATUS',
      payload: data
    });
  } 
  else if (data.gen_btn !== undefined) {
    dispatch({
      type: 'GEN_LOADING',
      payload: data
    })
  }
  else if (data.gen_mode !== undefined) {
    dispatch({
      type: 'GEN_MODE',
      payload: data
    })
  }
};

export const getTableData = (tableName, id, startDate, endDate) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: 'FUEL_TABLE_LOADING',
    fuel_id: id
  });

  const config = await makeConfig('application/json');

  const body = {
    startDate,
    endDate
  };

  try {
    const data = await axios.post(
      `${process.env.REACT_APP_URL}fuel/log/${tableName}/${id}`,
      body,
      config
    );
    let arr = data.data;
    if (data.data.title === 'Fuel Tank Lid Status Logs') {
      data.data.data.map((s) => {
        const index1 = data.data.data.findIndex((i) => i.door_status === 0);
        const index2 = data.data.data.findIndex((i) => i.door_status === 1);
        if (s.door_status === 1) {

          arr.data[index2].door_status = 'Open'
        }
        if (s.door_status === 0) {
          arr.data[index1].door_status = 'Close'
        }
      });
      dispatch({
        type: 'FUEL_TABLE_DATA',
        payload: arr,
        fuel_id: id
      });
      
    } 
    else if (data.data.title === 'Gen Status Logs') {
      data.data.data.map((s) => {
        const index1 = data.data.data.findIndex((i) => i.gen_status === 0);
        const index2 = data.data.data.findIndex((i) => i.gen_status === 1);
        if (s.gen_status === 1) {

          arr.data[index2].gen_status = 'On'
        }
        if (s.gen_status === 0) {
          arr.data[index1].gen_status = 'Off'
        }
      });
      dispatch({
        type: 'FUEL_TABLE_DATA',
        payload: arr,
        fuel_id: id
      });

    }
      
    else{
      dispatch({
        type: 'FUEL_TABLE_DATA',
        payload: data.data,
        fuel_id: id
      });
    }
   
    
  } catch (err) {
    console.log(err);
  }
};

export const getFuelChartData = (chartName, chartType, id) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: 'FUEL_CHART_LOADING',
    fuel_id: id
  });

  const config = await makeConfig('application/json');

  try {
    const data = await axios.get(
      `${process.env.REACT_APP_URL}fuel/chart/${chartName}/${chartType}/${id}`,
      config
    );
    dispatch({
      type: 'FUEL_CHART_DATA',
      payload: data.data,
      fuel_id: id
    });
  } catch (err) {
    console.log(err);
  }
};

export const setLiterThreshold = (threshold, id) => async (
  dispatch,
  getState
) => {
  const config = await makeConfig('application/json');

  const body = {
    threshold
  };

  try {
    const data = await axios.post(
      `${process.env.REACT_APP_URL}fuel/threshold/${id}`,
      body,
      config
    );
    dispatch({
      type: 'SET_FUEL_THRESHOLD',
      payload: threshold,
      id: id
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

export const setMaintananceThreshold = (threshold, id) => async (
  dispatch,
  getState
) => {
  const config = await makeConfig('application/json');

  const body = {
    threshold
  };

  try {
    const data = await axios.post(
      `${process.env.REACT_APP_URL}fuel/maintananceThreshold/${id}`,
      body,
      config
    );
    dispatch({
      type: 'SET_FUEL_MAINTANANCE_THRESHOLD',
      payload: threshold,
      id: id
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

export const setOilThreshold = (threshold, id) => async (
  dispatch,
  getState
) => {
  const config = await makeConfig('application/json');

  const body = {
    threshold
  };

  try {
    const data = await axios.post(
      `${process.env.REACT_APP_URL}fuel/oilThreshold/${id}`,
      body,
      config
    );
    dispatch({
      type: 'SET_FUEL_OIL_THRESHOLD',
      payload: threshold,
      id: id
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

export const getFuelMaintananceTableData = (
  tableName,
  id,
  startDate,
  endDate
) => async (dispatch, getState) => {

  dispatch({
    type: 'FUEL_MAINTANANCE_TABLE_LOADING',
    fuel_id: id
  });

  const config = await makeConfig('application/json');

  const body = {
    startDate,
    endDate
  };

  try {
    const data = await axios.post(
      // eslint-disable-next-line no-undef
      `${process.env.REACT_APP_URL}fuel/maintananceLog/${tableName}/${id}`,
      body,
      config
    );
    
    dispatch({
      type: 'FUEL_MAINTANANCE_TABLE_DATA',
      payload: data.data,
      fuel_id: id
    });
  } catch (err) {
    console.log(err);
  }
};

export const logOilChange = (id, runningTime) => async (dispatch, getState) => {
  const config = await makeConfig('application/json');

  const body = {
    runningTime
  };

  try {
    const data = await axios.post(
      `${process.env.REACT_APP_URL}fuel/oil/${id}`,
      body,
      config
    );
    dispatch({
      type: 'FUEL_OIL',
      fuel_id: id
    });
  } catch (err) {
    console.log(err);
  }
};

export const logMaintanance = (id, runningTime) => async (
  dispatch,
  getState
) => {
  const config = await makeConfig('application/json');

  const body = {
    runningTime
  };

  try {
    const data = await axios.post(
      `${process.env.REACT_APP_URL}fuel/maintanance/${id}`,
      body,
      config
    );
    dispatch({
      type: 'FUEL_MAINTANANCE',
      fuel_id: id
    });
  } catch (err) {
    console.log(err);
  }
};

export const getFuelMacroChartData = (chartName, chartType, ids) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: 'FUEL_MACRO_CHART_LOADING'
  });

  const config = await makeConfig('application/json');

  const body = {
    ids
  };

  try {
    const data = await axios.post(
      `${process.env.REACT_APP_URL}fuel/chart/macro/${chartName}/${chartType}`,
      body,
      config
    );
    dispatch({
      type: 'FUEL_MACRO_CHART_DATA',
      payload: data.data
    });
  } catch (err) {
    console.log(err);
  }
};

export const getFuelAlerts = (id) => async (dispatch, getState) => {
  dispatch({
    type: 'FUEL_ALERTS_LOADING'
  });

  const config = await makeConfig('application/json');

  const body = {
    id
  };

  const data = await axios.post(
    `${process.env.REACT_APP_URL}fuel/alerts`,
    body,
    config
  );
  dispatch({
    type: 'GET_FUEL_ALERTS',
    payload: data.data
  });
};

export const fuelMacroSettings = async (id, o, m, l) => {
  const config = await makeConfig('application/json');
  const body = {
    id,
    oilThreshold: o,
    literThreshold: l,
    maintananceThreshold: m
  };
  axios.post(`${process.env.REACT_APP_URL}fuel/macro/settings`, body, config);
};

export const gen_control = (id, status) => async (
  dispatch,
  getState
) => {
  const config = await makeConfig('application/json');

  const body = {
    status
  };

  try {
    const data = await axios.post(
      `${process.env.REACT_APP_URL}fuel/gen_control/${id}`,
      body,
      config
    );
    console.log('gen control', data.data);
    dispatch({
      type: 'GEN_CONTROL',
      payload: data.data,
      id
    });
  } 
  catch (err) {
  console.log(err);
}
};
