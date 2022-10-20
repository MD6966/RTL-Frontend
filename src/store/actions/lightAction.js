/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import axios from 'axios';
import { makeConfig } from './sessionActions';

export const get_Hl_sensor = (id) => async (dispatch) => {
  const config = await makeConfig('application/json');
  try {
    const res = await axios.get(`${process.env.REACT_APP_URL}light/${id}`,config);
    dispatch({
      type: 'GET_HL_SENSOR',
      payload: res.data
    });


  } catch(err){
    console.log(err);
  }


};
 
export const updateLightSensors = (data) => async (dispatch, getState) => {
  if(data.segControl !== undefined){
    dispatch({
      type: 'UPDATE_SEGMENT',
      payload: data.segControl,
      id: data.st_id
    });

    dispatch({
      type: 'UPDATE_LIGHT_STATUS',
      payload: data,
      id: data.st_id
    });
  }
  else if (data.light !== undefined) {
    dispatch({
      type: 'UPDATE_LIGHT_STATUS',
      payload: data
    });
  }

  else if (data.dimLevel !== undefined) {
    dispatch({
      type: 'UPDATE_DIM_LEVEL',
      payload: data.dimLevel,
      dim_levelCopy: data.dimLevelCopy,
      id: data.st_id
    });
  }

  else if (data.light_time !== undefined) {
    dispatch({
      type: 'UPDATE_LIGHT_TIMER',
      payload: data.light_time,
      id: data.st_id
    });
  }

  else if (data.auto !== undefined) {
    dispatch({
      type: 'UPDATE_RADAR_MODE',
      payload: data.auto,
      id: data.st_id
    });
  }

  else if (data.startTime !== undefined && data.endTime !== undefined) {
    if (data.routineType === 'segment'){
      dispatch({
        type: 'UPDATE_OFF_TIMER',
        startTime: data.startTime,
        endTime: data.endTime,
        status: data.status,
        id: data.st_id
      });
    } else if (data.routineType === 'dim_high'){
      dispatch({
        type: 'UPDATE_DIM_HIGH_TIMER',
        startTime: data.startTime,
        endTime: data.endTime,
        status: data.status,
        id: data.st_id
      });
    } else if (data.routineType === 'dim_medium'){
      dispatch({
        type: 'UPDATE_DIM_MEDIUM_TIMER',
        startTime: data.startTime,
        endTime: data.endTime,
        status: data.status,
        id: data.st_id
      });
    } else if (data.routineType === 'dim_low'){
      dispatch({
        type: 'UPDATE_DIM_LOW_TIMER',
        startTime: data.startTime,
        endTime: data.endTime,
        status: data.status,
        id: data.st_id
      });
    }
  }

  else if (data.allRoutines !== undefined) {
    dispatch({
      type: 'UPDATE_SCHEDULING',
      status: data.allRoutines,
      id: data.st_id
    });
  }

  else if (data.dim_routine !== undefined) {
    dispatch({
      type: 'UPDATE_DIM_ROUTINE',
      payload: data.dim_routine,
      id: data.st_id
    });
  }
  
};

export const set_Dim_Level = (id, type, dimLevel) => async(dispatch) =>{

  const config = {
    headers: {
      'content-type': 'application/json'
    }
  };

  const body = {
    dimLevel
  };

  try{
    const res = await axios.post(`${process.env.REACT_APP_URL}light/dimLevel/${id}`,body ,config);

    dispatch({
      type: 'SET_DIM_LEVEL',
      payload: dimLevel,
      id  

    });
  }
  catch(err){
    console.log(err);
  }
}

export const set_Light_Timer = (id, type, light_time) => async(dispatch) =>{

  const config = await makeConfig('application/json');

  const body = {
    light_time
  };
  
  try{
    const res = await axios.post(`${process.env.REACT_APP_URL}light/timer/${id}`,body ,config);

    dispatch({
      type: 'SET_LIGHT_TIMER',
      payload: light_time,
      id  

    });
  }
  catch(err){
    console.log(err);
  }
}

export const set_Segment_Control = (id, segControl) => async(dispatch) =>{

  const config = {
    headers: {
      'content-type': 'application/json'
    }
  };

  const body = {
    segControl
  };
  
  try{    
    const res = await axios.post(`${process.env.REACT_APP_URL}light/segmentControl/${id}`,body ,config);

    // dispatch({
    //   type: 'SET_SEGMENT_CONTROL',
    //   payload: segControl,
    //   id  

    // });
  }
  catch(err){
    console.log(err);
  }
}

export const set_Switch = (id, index, light) => async(dispatch) =>{

  const config = await makeConfig('application/json');

  const body = {
    index,
    light
  };
  
  try{    
    const res = await axios.post(`${process.env.REACT_APP_URL}light/switch/${id}`,body ,config);

    // dispatch({
    //   type: 'SET_SEGMENT_CONTROL',
    //   payload: segControl,
    //   id  

    // });
  }
  catch(err){
    console.log(err);
  }
}

export const getTableData = (logtype, id, startDate, endDate) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: 'LIGHT_TABLE_LOADING',
    st_id: id
  });

  const config = await makeConfig('application/json');

  const body = {
    startDate,
    endDate
  };


  try {
    const data = await axios.post(
      `${process.env.REACT_APP_URL}light/log/${logtype}/${id}`,
      body,
      config
    );
   
    let arr = data.data;
    if (logtype === 'radar_enable') {
      data.data.data.map((s) => {
        const index1 = data.data.data.findIndex((i) => i.logs === false);
        const index2 = data.data.data.findIndex((i) => i.logs === true);
        if (s.logs === true) {

          arr.data[index2].logs = 'Enabled'
        }
        if (s.logs === false) {
          arr.data[index1].logs = 'Disabled'
        }
      });
      dispatch({
        type: 'LIGHT_TABLE_DATA',
        payload: arr,
        st_id: id
      });
      
    }

    else if (logtype === 'segControl') {
      data.data.data.map((s) => {
        const index1 = data.data.data.findIndex((i) => i.logs === 0);
        const index2 = data.data.data.findIndex((i) => i.logs === 2);
        if (s.logs === 2) {

          arr.data[index2].logs = 'ON'
        }
        if (s.logs === 0) {
          arr.data[index1].logs = 'OFF'
        }
      });
      dispatch({
        type: 'LIGHT_TABLE_DATA',
        payload: arr,
        st_id: id
      });

    }
      
    else {
      dispatch({
        type: 'LIGHT_TABLE_DATA',
        payload: data.data,
        st_id: id
      });
    }
  }
  catch (err) {
    console.log(err);
  }
};

export const getLightChartData = (chartType, chartRange, id) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: 'LIGHT_CHART_LOADING',
    st_id: id
  });

  const config = await makeConfig('application/json');

  try {
    const data = await axios.get(
      `${process.env.REACT_APP_URL}light/chart/${chartType}/${chartRange}/${id}`,
      config
    );
    dispatch({
      type: 'LIGHT_CHART_DATA',
      payload: data.data,
      st_id: id
    });
  } catch (err) {
    console.log(err);
  }
};

export const getLightAlerts = (id) => async (dispatch, getState) => {
  dispatch({
    type: 'LIGHT_ALERTS_LOADING'
  });

  const config = await makeConfig('application/json');

  const body = {
    id
  };

  const data = await axios.post(
    `${process.env.REACT_APP_URL}light/alerts`,
    body,
    config
  );
  dispatch({
    type: 'GET_LIGHT_ALERTS',
    payload: data.data
  });
};


export const setRadarMode = (id, mode) => async(dispatch) =>{
  
  const config = {
    headers: {
      'content-type': 'application/json'
    }
  };

  
  try{
    const body = {
      mode
    };
    const res = await axios.post(`${process.env.REACT_APP_URL}light/radarMode/${id}`,body ,config);
  }
  catch(err){
    console.log(err);
  }
}

export const setRoutine = (id,startTime, endTime,type,status) => async(dispatch) =>{
  const config = await makeConfig('application/json');
  dispatch({
    type: 'SET_ROUTINE_LOADING'
  })

  const body = {
    startTime,
    endTime,
    status
  };
 
  try{    
    const res = await axios.post(`${process.env.REACT_APP_URL}light/setRoutine/${type}/${id}`,body ,config);
    if (type === 'segment'){
      dispatch({
        type: 'SET_OFF_TIMER',
        startTime: startTime,
        endTime: endTime,
        status,
        id
      });
    } else if (type === 'dim_high'){
      dispatch({
        type: 'SET_DIM_HIGH_TIMER',
        startTime: startTime,
        endTime: endTime,
        status,
        id
      });
    } else if (type === 'dim_medium'){
      dispatch({
        type: 'SET_DIM_MEDIUM_TIMER',
        startTime: startTime,
        endTime: endTime,
        status,
        id
      });
    } else if (type === 'dim_low'){
      dispatch({
        type: 'SET_DIM_LOW_TIMER',
        startTime: startTime,
        endTime: endTime,
        status,
        id
      });
    }
  
  }
  catch(err){
    console.log(err);
  }
}


export const setSegStartTime = (id,startTime) => async(dispatch) =>{

  dispatch({
    type: 'SEG_START_TIME',
    startTime: startTime,
    id  

  });
}

export const setSegEndTime = (id,endTime) => async(dispatch) =>{

  dispatch({
    type: 'SEG_END_TIME',
    endTime: endTime,
    id  

  });
}

export const setDimHighStartTime = (id,startTime) => async(dispatch) =>{

  dispatch({
    type: 'DIM_HIGH_START_TIME',
    startTime: startTime,
    id  

  });
}

export const setDimHighEndTime = (id,endTime) => async(dispatch) =>{

  dispatch({
    type: 'DIM_HIGH_END_TIME',
    endTime: endTime,
    id  

  });
}

export const setDimMediumStartTime = (id,startTime) => async(dispatch) =>{

  dispatch({
    type: 'DIM_MEDIUM_START_TIME',
    startTime: startTime,
    id  

  });
}

export const setDimMediumEndTime = (id,endTime) => async(dispatch) =>{

  dispatch({
    type: 'DIM_MEDIUM_END_TIME',
    endTime: endTime,
    id  

  });
}

export const setDimLowStartTime = (id,startTime) => async(dispatch) =>{

  dispatch({
    type: 'DIM_LOW_START_TIME',
    startTime: startTime,
    id  

  });
}

export const setDimLowEndTime = (id,endTime) => async(dispatch) =>{

  dispatch({
    type: 'DIM_LOW_END_TIME',
    endTime: endTime,
    id  

  });
}

export const setScheduling = (id,status) => async(dispatch) =>{

  const config = await makeConfig('application/json');

  const body = {
    status
  };
  try{    
    const res = await axios.post(`${process.env.REACT_APP_URL}light/routines/${id}`,body ,config);
    
    dispatch({
      type: 'SET_SCHEDULING',
      status,
      id
    });
  }
  catch(err){
    console.log(err);
  }
}

export const updateSchedule = (id,status) => async(dispatch) =>{

  dispatch({
    type: 'UPDATE_SCHEDULE',
    id,
    status
  })

  
}

