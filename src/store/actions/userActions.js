import axios from 'axios';
import { makeConfig } from './sessionActions';

export const addsenser = (values,user_id) =>async (dispatch)=>{
  const config =await makeConfig('application/json');
  console.log('Action ADDSenser',values,user_id)
 const  geyser_id= values. boardId
  const  geyser_Name =values.geyserName
  const dashboard = values.dashboard
  const body ={
    geyser_id,
    geyser_Name,
    dashboard,
  };
  console.log('ACTION', body)
  try{
    const res = await axios.post(`${process.env.REACT_APP_URL}geyser_hybrid/add/${user_id}`,body,config);
    return{
    res
  }
}
catch(err){
  console.log('ERROR',err);
}
};

export const changePasswordAction = (values,user_id) =>async (dispatch)=>{
  // const config = await makeConfig('application/json');
  const id   = user_id
  const  password =values.password
  const  newPassword = values.newPassword
  console.log( 'Change PASSWORD+++++++++++++++++++++++++',id,    
      password,
      newPassword )
  const body ={
    id,    
    password,
    newPassword 
  };
  console.log('ACTION', body)
  try{
    const res = await axios.post(`${process.env.REACT_APP_URL}user/changePassword`,body);
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',res.data.message)
  return{
    res
  }
}
catch(err){
  console.log(err);
}
};






export const getAllUsers = () => async (dispatch, getState) => {
  dispatch({
    type: 'USERS_LOADING'
  });

  const config = await makeConfig('application/json');

  try {
    const data = await axios.get(
      `${process.env.REACT_APP_URL}admin/getAllUsers`,
      config
    );
    dispatch({
      type: 'GET_USERS',
      payload: data.data
    });
  } catch (err) {
    console.log(err);
  }
};

export const getAllUsersNoLoad = () => async (dispatch, getState) => {
  const config = await makeConfig('application/json');

  try {
    const data = await axios.get(
      `${process.env.REACT_APP_URL}admin/getAllUsers`,
      config
    );
    dispatch({
      type: 'GET_USERS',
      payload: data.data
    });
  } catch (err) {
    console.log(err);
  }
};

export const addDashboard = (id, dashboardObj) => async (
  dispatch,
  getState
) => {
  const body = {
    id,
    dashboard: dashboardObj
  };

  const config = {
    headers: {
      'content-type': 'application/json'
    }
  };

  const data = await axios.post(
    `${process.env.REACT_APP_URL}admin/users/addDashboard`,
    body,
    config
  );
  dispatch({
    type: 'USERS_ADD_DASHBOARD',
    payload: dashboardObj
  });
};

export const addSensorToDashboard = (id, dashboardName, sensorName) => async (
  dispatch,
  getState
) => {
  const body = {
    name: sensorName
  };

  const config = {
    headers: {
      'content-type': 'application/json'
    }
  };

  const data = await axios.post(
    `${process.env.REACT_APP_URL}${dashboardName}/add/${id}`,
    body,
    config
  );
  dispatch({
    type: 'USER_DASHBOARD_ADD_SENSOR',
    payload: data.data.sensor,
    id
  });
};

export const getUserSensors = (id, dashboardName) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: 'USER_SENSORS_LOADING'
  });

  const config = {
    headers: {
      'content-type': 'application/json'
    }
  };

  const data = await axios.get(
    `${process.env.REACT_APP_URL}${dashboardName}/${id}`,
    config
  );
  dispatch({
    type: 'USER_DASHBOARD_SENSORS',
    payload: data.data,
    id: id
  });
};

export const uploadPicture = (file, id) => {
  return async (dispatch, getState) => {
    const config = await makeConfig('multipart/form-data');

    const formdata = new FormData();
    formdata.append('file', file);
    formdata.append('id', id);

    axios
      .post(`${process.env.REACT_APP_URL}user/upload`, formdata, config)
      .then((res) => {
        dispatch({
          type: 'USER_PICTURE_UPLOAD',
          payload: res.data.filepath
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const saveTheme = (id, theme) => {
  return (dispatch, getState) => {
    const config = makeConfig('application/json');

    const body = {
      id,
      theme
    };

    axios
      .post(`${process.env.REACT_APP_URL}user/theme`, body, config)
      .then((res) => {
        dispatch({
          type: 'USER_THEME',
          payload: theme
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const changeTheme = (theme) => {
  return (dispatch, getState) => {
    dispatch({
      type: 'USER_THEME',
      payload: theme
    });
  };
};
