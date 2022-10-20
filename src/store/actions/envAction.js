/* eslint-disable linebreak-style */
import axios from 'axios';
import { PAUSE } from 'redux-persist';
import { makeConfig } from './sessionActions';

export const get_Env_sensor = (id) => async (dispatch) => {
  const config = await makeConfig('application/json');
  try {
    const res = await axios.get(`${process.env.REACT_APP_URL}env/${id}`,config);
    dispatch({
      type: 'GET_ENV_SENSOR',
      payload: res.data
    });


  } catch(err){
    console.log(err);
  }


};

export const set_envUpperThreshold = (id, type, upperThreshold) => async (dispatch) => {
  const config = await makeConfig('application/json');
  try{
    const body = {
      upperThreshold
    };
    const res = await axios.post(`${process.env.REACT_APP_URL}env/upperThreshold/${type}/${id}`,body ,config);
    if(type === 'pm1_u'){
      dispatch({
        type:'PM1_UPPER_THRESHOLD',
        payload: upperThreshold,
        id: id
      });
    } else if(type === 'pm2.5_u'){
      dispatch({
        type:'PM2_5_UPPER_THRESHOLD',
        payload: upperThreshold,
        id: id
      });
    }
    else if(type === 'pm10_u'){
      dispatch({
        type:'PM10_UPPER_THRESHOLD',
        payload: upperThreshold,
        id: id
      });
    }
  } catch(err){
    console.log(err);
  }


};
export const set_envLowerThreshold = (id, type, threshold) => async (dispatch) => {
  const config = await makeConfig('application/json');
  try{
    const body = {
      threshold
    };
    const res = await axios.post(`${process.env.REACT_APP_URL}env/threshold/${type}/${id}`,body ,config);
    if(type === 'pm2.5_l'){
      dispatch({
        type:'PM2_5_THRESHOLD',
        payload: threshold,
        id: id
      });
    }
  }
  catch(err){
    console.log(err);
  }
}

export const updateEnvSensors = (data) => (dispatch) => {
  if(data.pm1 !== undefined){
    dispatch({
      type: 'UPDATE_PM1',
      payload: data
    });
  } else if(data.pm2_5 !== undefined){
    dispatch({
      type: 'UPDATE_PM2_5',
      payload: data
    });
    
  } else if(data.pm10 !== undefined){
    dispatch({
      type: 'UPDATE_PM10',
      payload: data
    });
    
  } else if(data.pm1_upperThreshold !== undefined ){
    dispatch({
      type: 'UPDATE_PM1_UPPER_THRESHOLD',
      payload: data.pm1_upperThreshold,
      id: data.env_id
    
    });
  } else if(data.pm2_5upperThreshold !== undefined ){
    dispatch({
      type: 'UPDATE_PM2_5_UPPER_THRESHOLD',
      payload: data.pm2_5upperThreshold,
      id: data.env_id
    });
  } else if(data.pm2_5threshold !== undefined ){
    dispatch({
      type: 'UPDATE_PM2_5_THRESHOLD',
      payload: data.pm2_5threshold,
      id: data.env_id
    });
  } else if(data.pm10_upperThreshold !== undefined ){
    dispatch({
      type: 'UPDATE_PM10_UPPER_THRESHOLD',
      payload: data.pm10_upperThreshold,
      id: data.env_id
    });
  }

};

export const getEnvLogs = (tableName, id, startDate, endDate) =>async (dispatch) => {
  dispatch({
    type: 'ENV_TABEL_LOADING',
    env_id: id
  })
  

  const config = await makeConfig('application/json');
  
  
  const body = {
    startDate,
    endDate
  };

  const res = await axios.post(`${process.env.REACT_APP_URL}env/log/${tableName}/${id}`, body ,config);
  dispatch({
    type: 'ENV_TABEL_DATA',
    payload: res.data,
    env_id: id
  })

};

export const getEnvChartData = (type,range,id) => async (dispatch) => {
  const config = await makeConfig('content-type:application/json');
  dispatch({
    type: 'ENV_CHART_LOADING',
    env_id: id
  })
  let pm1,pm2_5,pm10,res;
  try{
    if(type === 'pm1'){
      res = await axios.get(`${process.env.REACT_APP_URL}env/chart/pm1/${range}/${id}`,config);
      pm1 = res.data;
      dispatch({
        type: 'PM1_CHART',
        payload: pm1,
        env_id : id
      });

    } else if (type === 'pm2_5'){
     
      res = await axios.get(`${process.env.REACT_APP_URL}env/chart/pm2_5/${range}/${id}`,config);
      pm2_5 = res.data;
      dispatch({
        type: 'PM2_5_CHART',
        payload: pm2_5,
        env_id : id
      });
    } else if(type === 'pm10'){
      res = await axios.get(`${process.env.REACT_APP_URL}env/chart/pm10/${range}/${id}`,config);
      pm10 = res.data;
      dispatch({
        type: 'PM10_CHART',
        payload: pm10,
        env_id : id
      });
    }

  } catch(err){
    console.log(err);
  }

}
export const getEnvAlerts = (id) => async (dispatch) => {
  const config = await makeConfig('application/json');
  dispatch({
    type: 'ENV_ALERTS_LOADING',
  });
  
  const body = {
    id
  };
  const res = await axios.post(`${process.env.REACT_APP_URL}env/alerts`,body, config);
  dispatch({
    type: 'GET_ENV_ALERTS',
    payload: res.data

  });

};





