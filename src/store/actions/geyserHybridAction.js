/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import axios from 'axios';
import { makeConfig } from './sessionActions';
import Hybrid_Geyser_Sensors from './Geyser_Hybrid_Actions/Hybrid_Geyser_Sensors';

export const get_hybrid_geyser_sensor = (id) => async (dispatch) => 
{
  Hybrid_Geyser_Sensors(id,dispatch);
};

export const updateHybridGeyserSensors = (data) => async (dispatch, getState) => {
  // console.log('Hybrid Geyser Action ', data)
  if (data.temperature !== undefined) {
    dispatch({
      type: 'UPDATE_TEMPERATURE_HYBRID',
      payload: data,
      id: data.geyser_id
    });
  } 
  else if (data.system_status !== undefined) {
    // console.log("+++++++", data);
    dispatch({
      type: 'UPDATE_SYSTEM_STATUS_HYBRID',
      payload: data,
      id: data.geyser_id
    });
  }

  else if (data.valve_status !== undefined) {
    dispatch({
      type: 'UPDATE_GAS_VALVE_HYBRID',
      payload: data,
      id: data.geyser_id
    });
  }
  else if (data.burner_status !== undefined) {
    dispatch({
      type: 'UPDATE_BURNER_STATUS_HYBRID',
      payload: data,
      id: data.geyser_id
    });
  }
  else if (data.geyser_status !== undefined) {
    dispatch({
      type: 'UPDATE_GEYSER_STATUS_HYBRID',
      payload: data,
      id: data.geyser_id
    });

    dispatch({
      type: 'GEYSER_LOADING_FALSE_HYBRID',
    });
  }
  else if (data.geyser_control !== undefined) {
    // console.log('line 57',data)
    dispatch({
      type: 'UPDATE_GEYSER_CONTROL_HYBRID',
      payload: data,
      id: data.geyser_id,
    });

    dispatch({
      type: 'GEYSER_LOADING_FALSE_HYBRID',
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
    // console.log(data,'lowerThreshold')
    dispatch({
      type: 'UPDATE_TEMPERATURE_LOWER_THRESHOLD_HYBRID',
      payload: data.temp_lowerthreshold,
      id: data.geyser_id
    });
  }
  else if (data.temp_upperthreshold !== undefined) {
    // console.log(data,'upperThreshold')
    dispatch({
      type: 'UPDATE_TEMPERATURE_UPPER_THRESHOLD_HYBRID',
      payload: data.temp_upperthreshold,
      id: data.geyser_id
    });
  }
  else if (data.routine !== undefined) {
    // console.log('Hybrid geyser')
    dispatch({
      type: 'UPDATE_SINGLE_ROUTINE_HYBRID',
      payload: data
    });
  }
  else if (data.status !== undefined) {
    dispatch({
      type: 'UPDATE_ALL_ROUTINES_HYBRID',
      status: data.status,
      id: data.geyser_id
    });
  }
  else if (data.supply_mode !== undefined) {
    // console.log('++++++',data)
    dispatch({
      type: 'UPDATE_SUPPLY_MODE_HYBRID',
      status: data.supply_mode,
      id: data.geyser_id
    });
  }
};

export const setGeyserControl = (id, geyser_control) => async(dispatch) =>{
  dispatch({
    type: 'GEYSER_LOADING_TRUE_HYBRID',
    payload: id,
  })

  const config = await makeConfig('application/json');

  const body = {
    geyser_control,
    id
  };

  try{
    const res = await axios.post(`${process.env.REACT_APP_URL}geyser_hybrid/geyser_control`,body ,config);
    // console.log('Line 120 res',res)
    return {
      ...res
    }
  }
  
  catch(err){
    console.log(err);
  }
};

export const setSupplyMode = (_id, mode_value) => async(dispatch) =>{
  
  const config = await makeConfig('application/json');

  const body = {
    mode_value,
    _id
  };
// console.log(body)
  try{
    const res = await axios.post(`${process.env.REACT_APP_URL}geyser_hybrid/set_mode`,body ,config);
    // console.log('Line 120 res',res)
    return {
      ...res
    }
  }
  
  catch(err){
    console.log(err);
  }
};

// export const getTableData = (id, start_date, end_date, type) => async (
//   dispatch,
//   getState
// ) => {
//   dispatch({
//     type: 'GEYSER_TABLE_LOADING',
//     geyser_id: id
//   });

//   const config = await makeConfig('application/json');

//   const body = {
//     start_date,
//     end_date,
//     type,
//     id
//   };


//   try {
//     const data = await axios.post(
//       `${process.env.REACT_APP_URL}geyser/logs`,
//       body,
//       config
//     );
//     dispatch({
//       type: 'GEYSER_TABLE_DATA',
//       payload: data.data,
//       geyser_id: id,
//     });
    
//   } 
  
//   catch (err) {
//     console.log(err);
//   }
// };

// export const getGeyserChartData = (type, range, id) => async (
//   dispatch,
//   getState
// ) => {
//   dispatch({
//     type: 'GEYSER_CHART_LOADING',
//     geyser_id: id
//   });

//   const config = await makeConfig('application/json');
//   const body = {
//     id,
//     type,
//     range
//   }

//   try {
//     const data = await axios.post(
//       `${process.env.REACT_APP_URL}geyser/charts`,
//       body,
//       config
//     );
//     const record = data.data;
//     dispatch({
//       type: 'GEYSER_CHART_DATA',
//       payload: data.data,
//       geyser_id: id
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

export const setThreshold = (_id, type, value) => async (dispatch) => {
  const config = await makeConfig('application/json');

  const body = {
    value,
    type,
    _id
  };

  try{
    const res = await axios.post(`${process.env.REACT_APP_URL}geyser_hybrid/set`,body ,config);

    if(type === 'temp_lowerthreshold'){
      // console.log('lower Threshold', value)
      dispatch({
        type:'UPDATE_TEMPERATURE_LOWER_THRESHOLD_HYBRID',
        payload: value,
        id: _id
      });
    }
    else if (type === 'temp_upperthreshold'){
      dispatch({
        type:'UPDATE_TEMPERATURE_UPPER_THRESHOLD_HYBRID',
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
    const res = await axios.post(`${process.env.REACT_APP_URL}geyser_hybrid/add_routine`,body ,config);
    dispatch({
      type: 'ADD_ROUTINE_HYBRID',
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
    const res = await axios.delete(`${process.env.REACT_APP_URL}geyser_hybrid/remove_routine/${id}/${module_id}`,config);
    dispatch({
      type: 'DELETE_ROUTINE_HYBRID',
      geyser_id: module_id,
      payload: res.data
    });
  
  }
  catch(err){
    console.log(err);
  }
};


export const getHybridGeyserAlerts = (id) => async (dispatch, getState) => {
  dispatch({
    type: 'GEYSER_ALERTS_LOADING_HYBRID'
  });

  const config = await makeConfig('application/json');

  // const body = {
  //   id
  // };

  const data = await axios.get(
    `${process.env.REACT_APP_URL}geyser_hybrid/alerts/${id}`, config);
  // console.log(data,"hybrid geyser Action")
    dispatch({
      type: 'GET_GEYSER_ALERTS_HYBRID',
      payload: data.data
  });
};

export const getGeyserRoutines = (id) => async (dispatch) => {
  const config = await makeConfig('application/json');
  try {
    const res = await axios.get(`${process.env.REACT_APP_URL}geyser_hybrid/routine/${id}`,config);
    dispatch({
      type: 'GET_ROUTINES_HYBRID',
      geyser_id: id,
      payload: res.data
    });


  } catch(err){
    console.log(err);
  }


};

export const setRoutine = (id,from,to,status, thresh) => async(dispatch) =>{
  const config = await makeConfig('application/json');
  
  const body = {
    from,
    to,
    status,
    id,
    thresh,
  };
// console.log(body)
  try{    
    const res = await axios.post(`${process.env.REACT_APP_URL}geyser_hybrid/update_routine`,body ,config);
      // console.log('Hybrid Geyser', res)
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
    const res = await axios.post(`${process.env.REACT_APP_URL}geyser_hybrid/change_routine`,body ,config);
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
