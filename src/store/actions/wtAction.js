/* eslint-disable linebreak-style */
// import { More } from '@material-ui/icons';
import axios from 'axios';
// import { PAUSE } from 'redux-persist';
// import { FillLevel } from 'views/FuelDashboardDefault/components';
import { makeConfig } from './sessionActions';

export const get_Tank_sensor = (id) => async (dispatch) => {
  const config = await makeConfig('application/json');
  try {
    const res = await axios.get(`${process.env.REACT_APP_URL}tank/${id}`,config);
    dispatch({
      type: 'GET_SENSOR',
      payload: res.data
    });


  } catch(err){
    console.log(err);
  }


};

export const set_wtUpperThreshold = (id, type, upperThreshold) => async (dispatch) => {
 
  const config = await makeConfig('application/json');
  try{
    const body = {
      upperThreshold
    };
    const res = await axios.post(`${process.env.REACT_APP_URL}tank/upperThreshold/${type}/${id}`,body ,config);
    if(type === 'OH_U'){

      dispatch({
        type:'OH_U_UPPER_LIMIT',    //overhead tank upperlimit
        payload: upperThreshold,
        id: id
      });
    } else if(type === 'UG_U'){
      dispatch({
        type:'UG_U_UPPER_LIMIT',  // underground tank upperlimit
        payload: upperThreshold,
        id: id
      });
    } else if(type === 'temp_U'){
      dispatch({
        type:'Lower_Temp_Upper Threshold',
        payload: upperThreshold,
        id: id
      });
    }
  } catch(err){
    console.log(err);
  }


};


export const set_wtLowerThreshold = (id, type, threshold) => async (dispatch) => {
  const config = await makeConfig('application/json');
  try{
    const body = {
      threshold
    };
    const res = await axios.post(`${process.env.REACT_APP_URL}tank/threshold/${type}/${id}`,body ,config);
    if(type === 'OH'){
      dispatch({
        type: 'OH_LOWER_LIMIT',
        payload: threshold,
        id: id
      });
    } else if (type === 'UG'){
      dispatch({
        type: 'UG_LOWER_LIMIT',
        payload: threshold,
        id: id
      });
    }
    else if (type === 'temp'){
      dispatch({
        type: 'TEMP_THRESHOLD',
        payload: threshold,
        id: id
      });
    }


  }
  catch(err){
    console.log(err);
  }
}

export const updateWtSensors = (data) => (dispatch) => {
  if(data.motor !== undefined){
    dispatch({
      type: 'MOTOR',
      payload: data
    });
  } else if(data.forceMotor !== undefined){
    dispatch({
      type: 'FORCE_MOTOR',
      payload: data
    });
    
  } else if(data.fillLevel !== undefined){
    dispatch({
      type: 'FILLLEVEL',
      payload: data
    });
    
  } else if(data.fillLevel1 !== undefined){
    dispatch({
      type: 'FILLLEVEL1',
      payload: data
    });
    
  } else if(data.threshold !== undefined){
    dispatch({
      type: 'THRESHOLD',
      payload: data
    });
    
  } else if(data.threshold_lowerTank !== undefined){
    dispatch({
      type: 'THRESHOLD_LOWERTANK',
      payload: data
    });
    
  } else if(data.upperThreshold_lowerTank !== undefined){
    dispatch({
      type: 'UPPERTHRESHOLD_LOWERTANK',
      payload: data
    });
    
  } else if(data.upperThreshold !== undefined){
    dispatch({
      type: 'UPPERTHRESHOLD',
      payload: data
    });
    
  }
  else if(data.maintenance !== undefined){

    dispatch({
      type: 'MAINTENANCE',
      payload: data
    });
    
  }    
};

export const getWtLogs = (tableName, id, startDate, endDate) =>async (dispatch) => {
  
  dispatch({
    type: 'WT_TABEL_LOADING',
    wt_id: id
  })
  const config = await makeConfig('application/json');
  const body = {
    startDate,
    endDate
  };
  const res = await axios.post(`${process.env.REACT_APP_URL}tank/log/${tableName}/${id}`,body ,config);
  dispatch({
    type: 'WT_TABEL_DATA',
    payload: res.data,
    wt_id: id
  })

};

export const getWtChartData = (type,range,id) => async (dispatch) => {
  const config = await makeConfig('content-type:application/json');
  dispatch({
    type: 'TANK_CHART_LOADING',
    wt_id: id
  })
  let motor,force_motor,fillLevel,fillLevel1,res;
  try{
    if(type === 'motor'){
      res = await axios.get(`${process.env.REACT_APP_URL}tank/chart/motor/${range}/${id}`,config);
      motor = res.data;
      dispatch({
        type: 'MOTOR_CHART',
        payload: motor,
        wt_id: id
      });
      

    } else if (type === 'force-motor'){
     
      res = await axios.get(`${process.env.REACT_APP_URL}tank/chart/force-motor/${range}/${id}`,config);
      force_motor = res.data;
      
      dispatch({
        type: 'FORCED_MOTOR_CHART',
        payload: force_motor,
        wt_id: id
      });
     
    } else if(type === 'fillLevel'){
      res = await axios.get(`${process.env.REACT_APP_URL}tank/chart/fillLevel/${range}/${id}`,config);
      fillLevel = res.data;
      dispatch({
        type: 'FILLLEVEL_CHART',
        payload: fillLevel,
        wt_id: id
      });
    } else if(type === 'fillLevel1'){
      res = await axios.get(`${process.env.REACT_APP_URL}tank/chart/fillLevel1/${range}/${id}`,config);
      fillLevel1 = res.data;
      dispatch({
        type: 'FILLLEVEL1_CHART',
        payload: fillLevel1,
        wt_id: id
      });

    } 
  } catch(err){
    console.log(err);
  }

}
export const getWtAlerts = (id) => async (dispatch) => {
  const config = await makeConfig('application/json');
  dispatch({
    type: 'WT_ALERTS_LOADING',
  });
  
  const body = {
    id
  };
  const res = await axios.post(`${process.env.REACT_APP_URL}tank/alerts`,body, config);
  dispatch({
    type: 'GET_WT_ALERTS',
    payload: res.data

  });

};
export const set_WtforceMotor = (id, motor) => async(dispatch) =>{

    const config = await makeConfig('application/json');
  
    
    try{
      const body = {
        motor,
        id
      };
      const res = await axios.post(`${process.env.REACT_APP_URL}tank/forceMotor`,body ,config);
      if (motor === 1){
        dispatch({
          type: 'FORCE_MOTOR_ON',
          payload: motor,
          wt_id: id
        });
      }
      else if (motor === 0){
        dispatch({
          type: 'FORCE_MOTOR_OFF',
          payload: motor,
          wt_id: id
        });
      }

    }
    catch(err){
      console.log(err);
    }
}
export const set_WtmaintenanceMode = ( id ,mode) => async(dispatch) => {
  const config = await makeConfig('application/json');
    const body = {
      mode
    }
  try{                                                                                                         
    const res = await axios.post(`${process.env.REACT_APP_URL}tank/maintenance/${id}`,body,config);
    if(mode === 1){
      dispatch({
        type: 'MAINTENANCE_ON',
        payload: mode,
        wt_id: id
      });
      
    }
    else if (mode ===0 ){
      dispatch({
        type: 'MAINTENANCE_OFF',
        payload: mode,
        wt_id:id
      }); 
    }
  }
  catch(err){
    console.log(err);
  }
}