/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import axios from 'axios';
import { makeConfig } from './sessionActions';

export const get_geyser_sensor = (id) => async (dispatch) => {
  const config = await makeConfig('application/json');
  try {
    const res = await axios.get(`${process.env.REACT_APP_URL}geyser/sensors/${id}`,config);
    console.log(res)
    dispatch({
      type: 'GET_GEYSER_SENSOR',
      payload: res.data
    });
   

  } catch(err){
    console.log(err);
  }


};

export const updateGeyserSensors = (data) => async (dispatch, getState) => {
  if (data.temperature !== undefined) {
    dispatch({
      type: 'UPDATE_TEMPERATURE',
      payload: data,
      id: data.geyser_id
    });
  } 
  else if (data.system_status !== undefined) {
    // console.log("+++++++", data);
    dispatch({
      type: 'UPDATE_SYSTEM_STATUS',
      payload: data,
      id: data.geyser_id
    });
  }

  else if (data.valve_status !== undefined) {
    dispatch({
      type: 'UPDATE_GAS_VALVE',
      payload: data,
      id: data.geyser_id
    });
  }
  else if (data.burner_status !== undefined) {
    dispatch({
      type: 'UPDATE_BURNER_STATUS',
      payload: data,
      id: data.geyser_id
    });
  }
  else if (data.geyser_status !== undefined) {
    dispatch({
      type: 'UPDATE_GEYSER_STATUS',
      payload: data,
      id: data.geyser_id
    });

    dispatch({
      type: 'GEYSER_LOADING_FALSE',
    });
  }
  else if (data.geyser_control !== undefined) {
    dispatch({
      type: 'UPDATE_GEYSER_CONTROL',
      payload: data,
      id: data.geyser_id,
    });

    dispatch({
      type: 'GEYSER_LOADING_FALSE',
    });
  }
  // else if (data.gas_status !== undefined) {
  //   dispatch({
  //     type: 'UPDATE_GAS_STATUS',
  //     payload: data,
  //     id: data.geyser_id
  //   });
  // }
  else if (data.temp_lowerthreshold !== undefined) {
    dispatch({
      type: 'UPDATE_TEMPERATURE_LOWER_THRESHOLD',
      payload: data,
      id: data.geyser_id
    });
  }
  else if (data.temp_upperthreshold !== undefined) {
    dispatch({
      type: 'UPDATE_TEMPERATURE_UPPER_THRESHOLD',
      payload: data,
      id: data.geyser_id
    });
  }
  else if (data.routine !== undefined) {
    // console.log('geyser')
    dispatch({
      type: 'UPDATE_SINGLE_ROUTINE',
      payload: data
    });
  }
  else if (data.status !== undefined) {
    dispatch({
      type: 'UPDATE_ALL_ROUTINES',
      status: data.status,
      id: data.geyser_id
    });
  }
};

export const setGeyserControl = (id, geyser_control) => async(dispatch) =>{
  dispatch({
    type: 'GEYSER_LOADING_TRUE',
    payload: id,
  })

  const config = await makeConfig('application/json');

  const body = {
    geyser_control,
    id
  };

  try{
    const res = await axios.post(`${process.env.REACT_APP_URL}geyser/geyser_control`,body ,config);
    // if(res.data.status === 1) 
    // }
    // else {
    //   dispatch({
    //     type: 'UPDATE_GEYSER_STATUS',
    //     payload: res.data.geyser_status,
    //     control: res.data.geyser_control,
    //     id: res.data.id
    //   });
    // }
    return {
      ...res
    }
  }
  
  catch(err){
    console.log(err);
  }
};

export const getTableData = (id, start_date, end_date, type) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: 'GEYSER_TABLE_LOADING',
    geyser_id: id
  });

  const config = await makeConfig('application/json');

  const body = {
    start_date,
    end_date,
    type,
    id
  };


  try {
    const data = await axios.post(
      `${process.env.REACT_APP_URL}geyser/logs`,
      body,
      config
    );
    dispatch({
      type: 'GEYSER_TABLE_DATA',
      payload: data.data,
      geyser_id: id,
    });
    
  } 
  
  catch (err) {
    console.log(err);
  }
};

export const getGeyserChartData = (type, range, id) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: 'GEYSER_CHART_LOADING',
    geyser_id: id
  });

  const config = await makeConfig('application/json');
  const body = {
    id,
    type,
    range
  }

  try {
    const data = await axios.post(
      `${process.env.REACT_APP_URL}geyser/charts`,
      body,
      config
    );
    const record = data.data;
    dispatch({
      type: 'GEYSER_CHART_DATA',
      payload: data.data,
      geyser_id: id
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
    const res = await axios.post(`${process.env.REACT_APP_URL}geyser/set`,body ,config);

    if(type === 'temp_lowerthreshold'){
      dispatch({
        type:'TEMPERATURE_LOWER_THRESHOLD',
        payload: value,
        id: _id
      });
    }
    else if (type === 'temp_upperthreshold'){
      dispatch({
        type:'TEMPERATURE_UPPER_THRESHOLD',
        payload: value,
        id: _id
      });
    }
  } 
  catch(err){
    console.log(err);
  }
};

export const add_Routine = (id) => async(dispatch) =>{
  const config = await makeConfig('application/json');
  

  const body = {
    id
  };
  try{    
    const res = await axios.post(`${process.env.REACT_APP_URL}geyser/add_routine`,body ,config);
    dispatch({
      type: 'ADD_ROUTINE',
      payload: res.data
    });
  
  }
  catch(err){
    console.log(err);
  }
};

export const delete_Routine = (module_id, id) => async(dispatch) =>{
  const config = await makeConfig('application/json');
  
  try{    
    const res = await axios.delete(`${process.env.REACT_APP_URL}geyser/remove_routine/${id}/${module_id}`,config);
    dispatch({
      type: 'DELETE_ROUTINE',
      geyser_id: module_id,
      payload: res.data
    });
  
  }
  catch(err){
    console.log(err);
  }
};


export const getGeyserAlerts = (id) => async (dispatch, getState) => {
  dispatch({
    type: 'GEYSER_ALERTS_LOADING'
  });

  const config = await makeConfig('application/json');

  // const body = {
  //   id
  // };

  const data = await axios.get(
    `${process.env.REACT_APP_URL}geyser/alerts/${id}`, config);
  
    dispatch({
      type: 'GET_GEYSER_ALERTS',
      payload: data.data
  });
};

export const getGeyserRoutines = (id) => async (dispatch) => {
  const config = await makeConfig('application/json');
  try {
    const res = await axios.get(`${process.env.REACT_APP_URL}geyser/routine/${id}`,config);
    dispatch({
      type: 'GET_ROUTINES',
      geyser_id: id,
      payload: res.data
    });


  } catch(err){
    console.log(err);
  }


};

export const setRoutine = (id,from,to,status) => async(dispatch) =>{
  const config = await makeConfig('application/json');
  

  const body = {
    from,
    to,
    status,
    id
  };

  try{    
    const res = await axios.post(`${process.env.REACT_APP_URL}geyser/update_routine`,body ,config);
      // console.log("Geyser ", res)
    // dispatch({
    //   type: 'UPDATE_SINGLE_ROUTINE',
    //   payload: res.data
    // });
  
  }
  catch(err){
    console.log(err);
  }
};

export const all_Routines = (id, status) => async(dispatch) =>{
  const config = await makeConfig('application/json');
  // dispatch({
  //   type: 'SET_ROUTINE_LOADING'
  // })

  const body = {
    id,
    status
  };
  try{    
    const res = await axios.post(`${process.env.REACT_APP_URL}geyser/change_routine`,body ,config);
    return 'ok';
    // dispatch({
    //   type: 'SET_ALL_ROUTINES',
    //   status,
    //   id
    // });
  
  }
  catch(err){
    console.log(err);
  }
}

export const copyModules = (data) => async(dispatch) =>{
  
  // console.log(data);
    dispatch({
      type: 'COPY_MODULES',
      payload:data,

    })
  
}
