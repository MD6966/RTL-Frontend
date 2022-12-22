/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import axios from 'axios';

// export const register = (formValues)  => {
//   const name = formValues.username;
//   const email = formValues.email;
//   const password = formValues.password;
//   const phone_no = formValues.contact;
//   const city = formValues.city;
//   const address = formValues.address;
//   const board_id = formValues.code.concat(formValues.geyserid);
//   const geyser_name = formValues.geysername;
//   const dashboards = [formValues.module]; 
//   var compName = (formValues.code === 'sns' ? 'sync and secure'  : 'cannon' )
//   return (dispatch, getState) => {
//           const config = {
//           headers : {
//               'Content-type' : 'Application/json'
//           }
//       }
//       const body = JSON.stringify({
//           name,
//           email,
//           password,
//           phone_no,
//           city,
//           address,
//           board_id,
//           geyser_name,
//           dashboards, 
//           compName,
//       })
//       console.log('Action REGISTER',body) 
//       axios.post(`${process.env.REACT_APP_URL}user/register`,body,config)
//         .then(res => {
//             console.log('Action Return',res.data)
//             dispatch({
//                 // type : REGISTER_SUCCESS,
//                 payload : res.data 
//             })
//         }  
//         )
//         .catch(err => {
//             console.log('ACTION',err.response.data)
//             dispatch(
//               // returnErrors(err.response.data, err.response.status,
//               //  REGISTER_FAIL
//               //  )
//                );
//             dispatch({
//                 // type : REGISTER_FAIL
//             })
//     });
// };
// }
export const  register = (formValues) =>async (dispatch)=>{
  const config =await makeConfig('application/json');
  const name = formValues.username;
  const email = formValues.email;
  const password = formValues.password;
  const phone_no = formValues.contact;
  const city = formValues.city;
  const address = formValues.address;
  const board_id = formValues.geyserid;
  const geyser_name = formValues.geysername;
  const dashboards = [formValues.module]; 
  var compName = (formValues.code === 'sns' ? 'sync and secure'  : 'cannon' )
  
  const body ={
      
              name,
              email,
              password,
              phone_no,
              city,
              address,
              board_id,
              geyser_name,
              dashboards, 
              compName,
  };
  console.log('ACTION', body)
  try{
    const res = await axios.post(`${process.env.REACT_APP_URL}user/register`,body, config);
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> REspone is ',res)
  return{
    res
  }
}
catch(err){
  console.log(err);
}
};


      
export const  forgetPassword = (value) =>async (dispatch)=>{
  // const config = await makeConfig('application/json');
  const email   = value
  const body ={
    email    
  };
  console.log('ACTION', body)
  try{
    const res = await axios.post(`${process.env.REACT_APP_URL}user/forgotPass`,body);
    // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',res.data.message)
  return{
    res
  }
}
catch(err){
  console.log(err);
}
};

      
export const email =(formValues) => async (dispatch) =>  {
  const email = formValues.to;
  const msg = formValues.message;
  const body = JSON.stringify({
    email,
    msg,

  });
  // const res = axios.post();
  console.log(body, '+++++++++++++++++++++++++++++++++++++++')

};
// export const register = (formValues) =>async (dispatch)=>{
//   // console.log(Module,userName,email,password,contact,city,address,code,geyserId,geyserName, '.....')
  
//   const name = formValues.username;

//   const email = formValues.email;
//   const password = formValues.password;
//   const phone_no = formValues.contact;
//   const city = formValues.city;
//   const address = formValues.address;
//   const board_id = formValues.code.concat(formValues.geyserid);
//   const geyser_name = formValues.geysername;
//   const dashboards = [formValues.module]; 
//   var compName = (formValues.code === 'sns' ? 'sync and secure'  : 'cannon' )
//   const config =await makeConfig('application/json');
//   const body ={
//       name,
//       email,
//       password,
//       phone_no,
//       city,
//       address,
//       board_id,
//       geyser_name,
//       dashboards, 
//       compName
//   };
//   console.log('ACTION.REGISTER>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', body,)
//   await axios.post(`${process.env.REACT_APP_URL}user/register`,body).then((res) => {
//     console.log(res, '++++++++++++++++++++++++++++')
//   })
//   try{
//     const res = await axios.post(`${process.env.REACT_APP_URL}/user/register`,body,config);
//   return{
//     ...res
//   }
// }
// catch(err){
//   console.log(err);
// }
// };

export const login = ({ email, password }, ip) => async (
  dispatch,
  getState
) => {
  console.log(email, password)
  dispatch({
    type: 'USER_LOADING'
  });

  const config = {
    headers: {
      'Content-type': 'Application/json'
    }
  };

  const body = JSON.stringify({
    email,
    password,
    ip
  });

  try {
    const data = await axios.post(
      `${process.env.REACT_APP_URL}user/login`,
      body,
      config
    );
    console.log(data)
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: data.data
    });
  } catch (err) {
    // console.log(err.message)
    dispatch({
      type: 'REGISTER_FAIL'
    });

    dispatch({
      type: 'GET_ERRORS',
      message: err.response.data,
      id: 'LOGIN_FAIL',
      status: err.response.status
    });
  }
};

// export const register = ({ name, username, email, password, names }) => async (
//   dispatch,
//   getState
// ) => {
//   dispatch({
//     type: 'USER_LOADING'
//   });

//   const config = {
//     headers: {
//       'Content-type': 'Application/json'
//     }
//   };

//   const body = {
//     name,
//     username,
//     email,
//     password,
//     dashboards: names
//   };
// // console.log(body,'Session Actions')
//   try {
//     const data = await axios.post(
//       `${process.env.REACT_APP_URL}user/register`,
//       body,
//       config
//     );
//     dispatch({
//       type: 'REGISTER_SUCCESS'
//     });
//   } catch (err) {
//     console.log(err.response);

//     dispatch({
//       type: 'LOGIN_FAIL'
//     });

//     dispatch({
//       type: 'GET_ERRORS',
//       message: err.response.data,
//       id: 'REGISTER_FAIL',
//       status: err.response.status
//     });
//   }
// };

export const logout = () => (dispatch) =>
  dispatch({
    type: 'LOGOUT_SUCCESS'
  });

export const auth = () => async (dispatch) => {
  const config = await makeConfig('Application/json');

  try {
    const user = await axios.get(
      `${process.env.REACT_APP_URL}user/auth`,
      config
    );
    dispatch({
      type: 'USER_LOADED',
      payload: user.data
    });
  } catch (err) {
    dispatch({
      type: 'AUTH_ERROR'
    });
  }
};

export const socketConnect = (socket) => async (dispatch) => {
  dispatch({
    type: 'SOCKET_CONNECTION',
    payload: socket
  });
};

export const adminLogin = ({ username, password }, ip) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: 'USER_LOADING'
  });

  const config = {
    headers: {
      'Content-type': 'Application/json'
    }
  };

  const body = JSON.stringify({
    username,
    password,
    ip
  });

  try {
    const data = await axios.post(
      `${process.env.REACT_APP_URL}admin/login`,
      body,
      config
    );
    dispatch({
      type: 'ADMIN_LOGIN_SUCCESS',
      payload: data.data
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: 'GET_ERRORS',
      message: err.response.data,
      id: 'LOGIN_FAIL',
      status: err.response.status
    });
  }
};

export const makeConfig = async (type) => {
  const token = await localStorage.getItem('token');
  const config = {
    headers: {
      'Content-type': type,
      auth: token
    }
  };

  return config;
};

export const refreshRegister = () => async (dispatch, getState) => {
  dispatch({
    type: 'REFRESH_RESGISTER'
  });
};
