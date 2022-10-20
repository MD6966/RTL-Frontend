/* eslint-disable linebreak-style */
import axios from 'axios';
import { PAUSE } from 'redux-persist';
import { makeConfig } from './sessionActions';

export const get_Em_sensor = (id) => async (dispatch) => {
  const config = await makeConfig('application/json');
  try {
    const res = await axios.get(`${process.env.REACT_APP_URL}em/${id}`,config);
    dispatch({
      type: 'GET_EM_SENSOR',
      payload: res.data
    });


  } catch(err){
    console.log(err);
  }


};

export const set_emUpperThreshold = (id, type, threshold) => async (dispatch) => {

  const config = await makeConfig('application/json');
  try{
    const body = {
      threshold
    };
    const res = await axios.post(`${process.env.REACT_APP_URL}em/thresholdUpper/${type}/${id}`,body ,config);
    if(type === 'voltage_U'){
      dispatch({
        type:'V_UPPER_LIMIT',
        payload: threshold,
        id: id
      });
    } else if(type === 'current_U'){
      dispatch({
        type:'C_UPPER_LIMIT',
        payload: threshold,
        id: id
      });
    } else if(type === 'unit_U'){
      dispatch({
        type:'U_UPPER_LIMIT',
        payload: threshold,
        id: id
      });
    }
  } catch(err){
    console.log(err);
  }


};
export const set_emLowerThreshold = (id, type, threshold) => async (dispatch) => {
  const config = await makeConfig('application/json');
  try{
    const body = {
      threshold
    };
    const res = await axios.post(`${process.env.REACT_APP_URL}em/threshold/${type}/${id}`,body ,config);
    if(type === 'voltage'){
      dispatch({
        type: 'V_LOWER_LIMIT',
        payload: threshold,
        id: id
      });
    } else if (type === 'power'){
      dispatch({
        type: 'PF_LOWER_LIMIT',
        payload: threshold,
        id: id
      });
    }


  }
  catch(err){
    console.log(err);
  }
}

export const updateEmSensors = (data) => (dispatch) => {
  if(data.Va !== undefined){
    dispatch({
      type: 'UPDATE_VA',
      payload: data
    });
  } else if(data.Vb !== undefined){
    dispatch({
      type: 'UPDATE_VB',
      payload: data
    });
    
  } else if(data.Vc !== undefined){
    dispatch({
      type: 'UPDATE_VC',
      payload: data
    });
    
  } else if(data.Ia !== undefined){
    dispatch({
      type: 'UPDATE_IA',
      payload: data
    });
    
  } else if(data.Ib !== undefined){
    dispatch({
      type: 'UPDATE_IB',
      payload: data
    });
    
  } else if(data.Ic !== undefined){
    dispatch({
      type: 'UPDATE_IC',
      payload: data
    });
    
  } else if(data.Pf !== undefined){
    dispatch({
      type: 'UPDATE_PF',
      payload: data
    });
    
  } else if(data.PA !== undefined){
    dispatch({
      type: 'UPDATE_PA',
      payload: data
    });
    
  } else if(data.PR !== undefined){
    dispatch({
      type: 'UPDATE_PR',
      payload: data
    });
    
  } else if(data.VAR !== undefined){
    dispatch({
      type: 'UPDATE_RP',
      payload: data
    });
    
  } else if(data.U !== undefined){
    dispatch({
      type: 'UPDATE_U',
      payload: data,
      time: data.time
    });
  } else if(data.F !== undefined){
    dispatch({
      type: 'UPDATE_FREQUENCY',
      payload: data
    });
    
  }
  

};

export const getEmLogs = (tableName, id, startDate, endDate) =>async (dispatch) => {
  
  dispatch({
    type: 'EM_TABEL_LOADING',
    em_id: id
  })

  const config = await makeConfig('application/json');
  const body = {
    startDate,
    endDate
  };

  try{
    const data = await axios.post(`${process.env.REACT_APP_URL}em/log/${tableName}/${id}`,body ,config);

    let arr = data.data;
    if (tableName === 'abnormal') {
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
        type: 'EM_TABEL_DATA',
        payload: arr,
        em_id: id
      });
      
    } else {
      dispatch({
        type: 'EM_TABEL_DATA',
        payload: data.data,
        em_id: id
      })
    }
  }
  catch(err){
    console.log(err);
  }
  

  

};

export const getEmChartData = (type,range,id) => async (dispatch) => {
  const config = await makeConfig('content-type:application/json');
  dispatch({
    type: 'EM_CHART_LOADING',
    em_id: id
  })
  let Va,Vb,Vc,Ia,Ib,Ic,Pf,PR,PA,U,res, abnormal;
  try{
    if(type === 'voltage'){
      res = await axios.get(`${process.env.REACT_APP_URL}em/chart/Va/${range}/${id}`,config);
      Va = res.data;
      res = await axios.get(`${process.env.REACT_APP_URL}em/chart/Vb/${range}/${id}`, config);
      Vb = res.data;
      res = await axios.get(`${process.env.REACT_APP_URL}em/chart/Vc/${range}/${id}`, config);
      Vc= res.data;
      dispatch({
        type: 'VA_CHART',
        payload: Va
      });
      dispatch({
        type: 'VB_CHART',
        payload: Vb
      });
      dispatch({
        type: 'VC_CHART',
        payload: Vc
      });

    } else if (type === 'current'){
     
      res = await axios.get(`${process.env.REACT_APP_URL}em/chart/Ia/${range}/${id}`,config);
      Ia = res.data;
      res = await axios.get(`${process.env.REACT_APP_URL}em/chart/Ib/${range}/${id}`, config);
      Ib = res.data;
      res = await axios.get(`${process.env.REACT_APP_URL}em/chart/Ic/${range}/${id}`, config);
      Ic= res.data;
      dispatch({
        type: 'IA_CHART',
        payload: Ia
      });
      dispatch({
        type: 'IB_CHART',
        payload: Ib
      });
      dispatch({
        type: 'IC_CHART',
        payload: Ic
      });
    } else if(type === 'powerFactor'){
      res = await axios.get(`${process.env.REACT_APP_URL}em/chart/Pf/${range}/${id}`,config);
      Pf = res.data;
      dispatch({
        type: 'POWER_FACTOR_CHART',
        payload: Pf,
        em_id: id
      });
    } else if(type === 'realPower'){
      res = await axios.get(`${process.env.REACT_APP_URL}em/chart/PR/${range}/${id}`,config);
      PR = res.data;
      dispatch({
        type: 'REAL_POWER_CHART',
        payload: PR,
        em_id: id
      });

    } else if(type === 'apparentPower'){
      res = await axios.get(`${process.env.REACT_APP_URL}em/chart/PA/${range}/${id}`,config);
      PA = res.data;
      dispatch({
        type: 'APPARENT_POWER_CHART',
        payload: PA,
        em_id: id
      });


    } else if(type === 'unit'){
      res = await axios.get(`${process.env.REACT_APP_URL}em/chart/U/${range}/${id}`,config);
      U = res.data;
      dispatch({
        type: 'UNIT_CHART',
        payload: U,
        em_id: id
      });

    }   else if(type === 'abnormal'){
      res = await axios.get(`${process.env.REACT_APP_URL}em/chart/abnormal/${range}/${id}`,config);
      abnormal = res.data;
      dispatch({
        type: 'ABNORMAL_CHART',
        payload: abnormal,
        em_id: id
      });

    }
    

  

  } catch(err){
    console.log(err);
  }

}
export const getEmAlerts = (id) => async (dispatch) => {
  const config = await makeConfig('application/json');
  dispatch({
    type: 'EM_ALERTS_LOADING',
  });
  
  const body = {
    id
  };
  const res = await axios.post(`${process.env.REACT_APP_URL}em/alerts`,body, config);
  dispatch({
    type: 'GET_EM_ALERTS',
    payload: res.data

  });

};

export const resetButton = (id, status) => async (dispatch) => {
  const config = await makeConfig('application/json');

  const body = {
    status 
  };

  try {
    const res = await axios.post(`${process.env.REACT_APP_URL}em/reset/${id}`,body, config);
    // dispatch({
    //   type: 'GET_EM_SENSOR',
    //   payload: res.data
    // });

  } catch(err){
    console.log(err);
  }


};