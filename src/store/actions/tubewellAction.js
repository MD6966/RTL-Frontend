/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import axios from 'axios';
import { makeConfig } from './sessionActions';

export const get_Tw_sensor = (id) => async (dispatch) => {
  const config = await makeConfig('application/json');
  try {
    const res = await axios.get(`${process.env.REACT_APP_URL}tubewell/${id}`,config);
    dispatch({
      type: 'GET_TW_SENSOR',
      payload: res.data
    });


  } catch(err){
    console.log(err);
  }


};
export const getTubewellMaintananceData = (id) => async (dispatch, getState) => {
  dispatch({
    type: 'TUBEWELL_MAINTANANCE_LOADING'
  });
 
  const config = await makeConfig('application/json');

  try {
    const data = await axios.get(
      `${process.env.REACT_APP_URL}tubewell/runningTimes/${id}`,
      config
    );
    // console.log('f running time',data.data.filterRunningTime)

    // let time = data.data.filterRunningTime;
    // let hours = null;
    // console.log('f running time22222',time)
    // if (time.includes(':')) {
    //   let duration = time.split(':');
    //   hours = duration[0];
    // }

    // let Days=Math.floor(hours/24);
    // let Remainder=hours % 24;
    // let Hours=Math.floor(Remainder);
    // console.log('converted time days',Days,Hours)
    
      
    dispatch({
      type: 'GET_TUBEWELL_MAINTANANCE_DATA',
      payload: data.data,
      // filterTime: Days,
      tw_id: id
    });
    
    
  } catch (err) {
    dispatch({
      type: 'GET_ERRORS',
      message: err.response.data,
      id: 'TUBEWELL_MAINTANANCE_FAIL',
      status: err.response.status
    });
  }
};

export const updateTubewellSensors = (data) => async (dispatch, getState) => {
  if (data.fillLevel !== undefined) {
    dispatch({
      type: 'UPDATE_TANK_FILLLEVEL',
      payload: data
    });
  } else if (data.t_lid !== undefined) {
    dispatch({
      type: 'UPDATE_TANK_DOORSTATUS',
      payload: data
    });
  } else if (data.ph !== undefined) {
    dispatch({
      type: 'UPDATE_PH_VALUE',
      payload: data
    });
  } else if (data.tds !== undefined) {
    dispatch({
      type: 'UPDATE_TDS_VALUE',
      payload: data
    });
  } else if (data.power !== undefined) {
    dispatch({
      type: 'UPDATE_MAIN_LINE_STATUS',
      payload: data
    });
  } else if (data.Ia !== undefined) {
    dispatch({
      type: 'UPDATE_MOTOR_CURRENT_STATUS',
      payload: data
    });
  }  else if (data.motor !== undefined || data.forceMotor != undefined) {
    dispatch({
      type: 'UPDATE_TANK_MOTORSTATUS',
      payload: data
    });
  } else if (data.door_status !== undefined) {
    dispatch({
      type: 'UPDATE_TUBEWELL_DOOR_STATUS',
      payload: data
    });
  } else if (data.alarm !== undefined) {
    dispatch({
      type: 'UPDATE_SMOKE_ALARM_STATUS',
      payload: data
    });
  } else if (data.fillLevel_upperLmt !== undefined) {
    dispatch({
      type: 'UPDATE_TANK_UPPER_THRESHOLD',
      payload: data
    });
  } else if (data.fillLevel_lwrLmt !== undefined) {
    dispatch({
      type: 'UPDATE_TANK_LOWER_THRESHOLD',
      payload: data
    });
  } else if (data.ph_lwrLmt !== undefined) {
    dispatch({
      type: 'UPDATE_PH_LOWER_THRESHOLD',
      payload: data
    });
  } else if (data.ph_upperLmt !== undefined) {
    dispatch({
      type: 'UPDATE_PH_UPPER_THRESHOLD',
      payload: data
    });
  } else if (data.tds_lwrLmt !== undefined) {
    dispatch({
      type: 'UPDATE_TDS_LOWER_THRESHOLD',
      payload: data
    });
  } else if (data.tds_upperLmt !== undefined) {
    dispatch({
      type: 'UPDATE_TDS_UPPER_THRESHOLD',
      payload: data
    });
  }  else if (data.waterMaintenance !== undefined) {
    dispatch({
      type: 'UPDATE_WATER_MAINTANANCE_THRESHOLD',
      payload: data.waterMaintenance,
      id: data.tw_id
    });
  } else if (data.liters !== undefined) {
    dispatch({
      type: 'UPDATE_LITER_THRESHOLD',
      payload: data.liters,
      time: data.time,
      id: data.tw_id
    });
  } else if (data.motorMaintenance !== undefined) {
    dispatch({
      type: 'UPDATE_MOTOR_MAINTANANCE_THRESHOLD',
      payload: data.motorMaintenance,
      id: data.tw_id
    });
  } else if (data.I_lwrLmt !== undefined) {
    dispatch({
      type: 'UPDATE_CURRENT_LOWER_THRESHOLD',
      payload: data.I_lwrLmt,
      time: data.time,
      id: data.tw_id
    });
  } else if (data.phaseDown !== undefined) {
    dispatch({
      type: 'UPDATE_PHASE',
      payload: data.phaseDown,
      id: data.tw_id
    });
  } else if (data.auto !== undefined) {
    dispatch({
      type: 'UPDATE_AUTO_MODE',
      payload: data.auto,
      id: data.tw_id
    });
  } else if (data.volve !== undefined) {
    dispatch({
      type: 'UPDATE_PRIMING',
      payload: data,
      id: data.tw_id
    });
  } else if (data.plvl !== undefined) {
    dispatch({
      type: 'UPDATE_PRIMING_LEVEL',
      payload: data,
      id: data.tw_id
    });
  } else if (data.vib !== undefined) {
    dispatch({
      type: 'UPDATE_PUMP_VIBRATION',
      payload: data,
      id: data.tw_id
    });
  }
};

export const set_Tw_forceMotor = (id, motor) => async(dispatch) =>{
  dispatch({
    type: 'MOTOR_LOADING'
  })

  const config = await makeConfig('application/json');

  
  try{
    const body = {
      motor,
      id
    };
    const res = await axios.post(`${process.env.REACT_APP_URL}tubewell/forceMotor`,body ,config);
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
    type: 'TUBEWELL_TABLE_LOADING',
    tw_id: id
  });

  const config = await makeConfig('application/json');

  const body = {
    startDate,
    endDate
  };


  try {
    const data = await axios.post(
      `${process.env.REACT_APP_URL}tubewell/log/${logtype}/${id}`,
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
        type: 'TUBEWELL_TABLE_DATA',
        payload: arr,
        tw_id: id
      });
      
    } 
    
    else if (logtype === 't_lid') {
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
        type: 'TUBEWELL_TABLE_DATA',
        payload: arr,
        tw_id: id
      });
      
    } 
    
    else if (logtype === 'motor') {
      data.data.data.map((s) => {
        const index1 = data.data.data.findIndex((i) => i.logs === 0);
        const index2 = data.data.data.findIndex((i) => i.logs === 1);
        if (s.logs === 1) {

          arr.data[index2].logs = 'On'
        }
        if (s.logs === 0) {
          arr.data[index1].logs = 'Off'
        }
      });
      dispatch({
        type: 'TUBEWELL_TABLE_DATA',
        payload: arr,
        tw_id: id
      });

    } 
    
    else if (logtype === 'force-motor') {
      data.data.data.map((s) => {
        const index1 = data.data.data.findIndex((i) => i.logs === 0);
        const index2 = data.data.data.findIndex((i) => i.logs === 1);
        if (s.logs === 1) {

          arr.data[index2].logs = 'On'
        }
        if (s.logs === 0) {
          arr.data[index1].logs = 'Off'
        }
      });
      dispatch({
        type: 'TUBEWELL_TABLE_DATA',
        payload: arr,
        tw_id: id
      });

    } else if (logtype === 'alarm') {
      data.data.data.map((s) => {
        const index1 = data.data.data.findIndex((i) => i.logs === false);
        const index2 = data.data.data.findIndex((i) => i.logs === true);
        if (s.logs === true) {

          arr.data[index2].logs = 'On'
        }
        if (s.logs === false) {
          arr.data[index1].logs = 'Off'
        }
      });
      dispatch({
        type: 'TUBEWELL_TABLE_DATA',
        payload: arr,
        tw_id: id
      });

    }

    else if (logtype === 'phase_down') {
      data.data.data.map((s) => {
        const index1 = data.data.data.findIndex((i) => i.logs === false);
        const index2 = data.data.data.findIndex((i) => i.logs === true);
        
        if (s.logs === true) {

          arr.data[index2].logs = 'Power-Down'
        }
        if (s.logs === false) {
          arr.data[index1].logs = 'Power-Up'
        }
      });
      dispatch({
        type: 'TUBEWELL_TABLE_DATA',
        payload: arr,
        tw_id: id
      });
      
    } 

    else if (logtype === 'abnormal') {
      data.data.data.map((s) => {
        const index1 = data.data.data.findIndex((i) => i.logs === false);
        const index2 = data.data.data.findIndex((i) => i.logs === true);
        
        if (s.logs === true) {

          arr.data[index2].logs = 'Abnormal'
        }
        if (s.logs === false) {
          arr.data[index1].logs = 'Normal'
        }
      });
      dispatch({
        type: 'TUBEWELL_TABLE_DATA',
        payload: arr,
        tw_id: id
      });
      
    } 

    else if (logtype === 'volve') {
      data.data.data.map((s) => {
        const index1 = data.data.data.findIndex((i) => i.logs === 0);
        const index2 = data.data.data.findIndex((i) => i.logs === 1);
        
        if (s.logs === 1) {

          arr.data[index2].logs = 'Valve Open'
        }
        if (s.logs === 0) {
          arr.data[index1].logs = 'Valve Closed'
        }
      });
      dispatch({
        type: 'TUBEWELL_TABLE_DATA',
        payload: arr,
        tw_id: id
      });
      
    } 

    else if (logtype === 'plvl') {
      data.data.data.map((s) => {
        const index1 = data.data.data.findIndex((i) => i.logs === 0);
        const index2 = data.data.data.findIndex((i) => i.logs === 1);
        
        if (s.logs === 1) {

          arr.data[index2].logs = 'Filled'
        }
        if (s.logs === 0) {
          arr.data[index1].logs = 'Un-Filled'
        }
      });
      dispatch({
        type: 'TUBEWELL_TABLE_DATA',
        payload: arr,
        tw_id: id
      });
      
    } 
    else if (logtype === 'vib') {
      data.data.data.map((s) => {
        const index1 = data.data.data.findIndex((i) => i.logs === 0);
        const index2 = data.data.data.findIndex((i) => i.logs === 1);
        
        if (s.logs === 1) {

          arr.data[index2].logs = 'Abnormal'
        }
        if (s.logs === 0) {
          arr.data[index1].logs = 'Normal'
        }
      });
      dispatch({
        type: 'TUBEWELL_TABLE_DATA',
        payload: arr,
        tw_id: id
      });
      
    }
      
    else {
      dispatch({
        type: 'TUBEWELL_TABLE_DATA',
        payload: data.data,
        tw_id: id
      });
    }
   
    
  } 
  
  catch (err) {
    console.log(err);
  }
};

export const getTubewellChartData = (chartType, chartRange, id) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: 'TUBEWELL_CHART_LOADING',
    tw_id: id
  });

  const config = await makeConfig('application/json');

  try {
    const data = await axios.get(
      `${process.env.REACT_APP_URL}tubewell/chart/${chartType}/${chartRange}/${id}`,
      config
    );
    dispatch({
      type: 'TUBEWELL_CHART_DATA',
      payload: data.data,
      tw_id: id
    });
  } catch (err) {
    console.log(err);
  }
};

export const setTubewellMaintananceThreshold = ( type, id, threshold) => async (

  dispatch,
  getState
) => {
  const config = await makeConfig('application/json');

  const body = {
    threshold
  };
  try {
    const data = await axios.post(
      `${process.env.REACT_APP_URL}tubewell/maintananceThreshold/${type}/${id}`,
      body,
      config
    );
    if(type === 'w_maintenance'){
      dispatch({
        type:'WATER_MAINTANANCE_THRESHOLD',
        payload: threshold,
        id: id
      });
    } else if(type === 't_capacity'){
      dispatch({
        type:'LITER_THRESHOLD',
        payload: threshold,
        id: id
      });
    } else if(type === 'm_maintenance'){
      dispatch({
        type:'MOTOR_MAINTANANCE_THRESHOLD',
        payload: threshold,
        id: id
      });
    }
  } catch (err) {
    console.log(err)
    
  }
};

export const set_TubewellUpperThreshold = (id, type, upperThreshold) => (dispatch) => new Promise((async(resolve, reject)=> {
  const config = await makeConfig('application/json');
  try{
    const body = {
      upperThreshold
    };
    const res = await axios.post(`${process.env.REACT_APP_URL}tubewell/upperThreshold/${type}/${id}`,body ,config);
    if(type === 'fill_u'){
      dispatch({
        type:'TANK_UPPER_THRESHOLD',
        payload: res.upperThreshold,
        id: res.tw_id
      });
    } else if(type === 'ph_u'){
      dispatch({
        type:'PH_UPPER_THRESHOLD',
        payload: upperThreshold,
        id: res.tw_id
      });
    }
    else if(type === 'tds_u'){
      dispatch({
        type:'TDS_UPPER_THRESHOLD',
        payload: upperThreshold,
        id: res.tw_id
      });
    }
    resolve('done');
  } 
  
  catch(err){
    reject(err);
    console.log(err);
  }
}));
 
export const set_TubewellLowerThreshold = (id, type, threshold) => (dispatch) => new Promise((async(resolve, reject)=>{
  const config = await makeConfig('application/json');
  try{
    const body = {
      threshold
    };
    const res = await axios.post(`${process.env.REACT_APP_URL}tubewell/threshold/${type}/${id}`,body ,config);
    if(type === 'fill_l'){
      dispatch({
        type:'TANK_LOWER_THRESHOLD',
        payload: threshold,
        id: id
      });
    } else if(type === 'ph_l'){
      dispatch({
        type:'PH_LOWER_THRESHOLD',
        payload: threshold,
        id: id
      });
    } else if(type === 'tds_l'){
      dispatch({
        type:'TDS_LOWER_THRESHOLD',
        payload: threshold,
        id: id
      });
    } else if(type === 'Ia_l'){
      dispatch({
        type:'CURRENT_LOWER_THRESHOLD',
        payload: threshold,
        id: id
      });
    }
    resolve('done');
    
  }
  catch(err){
    reject(err);
    console.log(err);
  }

}));

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

export const MotorLogMaintenance = (id, runningTime) => async (dispatch, getState) => {
  const config = await makeConfig('application/json');

  const body = {
    runningTime
  };

  try {
    const data = await axios.post(
      `${process.env.REACT_APP_URL}tubewell/maintanance/${id}`,
      body,
      config
    );
    dispatch({
      type: 'TUBEWELL_MOTOR_MAINTENANCE',
      tw_id: id
    });
  } catch (err) {
    console.log(err);
  }
};

export const FilterlogMaintanance = (id, runningTime) => async (
  dispatch,
  getState
) => {
  const config = await makeConfig('application/json');

  const body = {
    runningTime
  };


  try {
    const data = await axios.post(
      `${process.env.REACT_APP_URL}tubewell/filterMaintanance/${id}`,
      body,
      config
    );
    dispatch({
      type: 'TUBEWELL_MAINTANANCE',
      tw_id: id
    });
  } catch (err) {
    console.log(err);
  }
};
export const getTubewellAlerts = (id) => async (dispatch, getState) => {
  dispatch({
    type: 'TUBEWELL_ALERTS_LOADING'
  });

  const config = await makeConfig('application/json');

  const body = {
    id
  };

  const data = await axios.post(
    `${process.env.REACT_APP_URL}tubewell/alerts`,
    body,
    config
  );
  dispatch({
    type: 'GET_TUBEWELL_ALERTS',
    payload: data.data
  });
};

export const setAutoMode = (id, mode) => async(dispatch) =>{

  const config = await makeConfig('application/json');

  
  try{
    const body = {
      mode
    };
    const res = await axios.post(`${process.env.REACT_APP_URL}tubewell/autoMode/${id}`,body ,config);
  }
  catch(err){
    console.log(err);
  }
}

