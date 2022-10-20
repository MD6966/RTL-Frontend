
import axios from 'axios';
import { makeConfig } from '../../store/actions/sessionActions';

let getsensors = async (dispatch) => {
     dispatch({
       type: 'TEMP_SENSORS_LOADING'
    });

  const config = await makeConfig('application/json');
  // const config = {
  //    headers: {
  //      'content-type': 'application/json'
  //    }
  // }
  try {
    // throw new Error('User is not authenticated');
    const {data, status } = await axios.get(
        `${process.env.REACT_APP_URL}temperaturesystem/sensors`,
        config
      );

    dispatch({
      type: 'GET_TEMPERATURE_SENSORS',
      payload: data.data
    });
  } 
  catch (err) {
      console.log('----------');
      console.log('\n', 'error', {
      project_name: 'temperaturesys',
      file_name: 'getsensors.action.js',
      path:'src/helper/tempsys/getsensors.action.js',
      error: err.message

      }, '\n\n');
      console.log('----------');

    // dispatch({
    //   type: 'GET_ERRORS',
    //   message: err.response.data,
    //   id: 'LOGIN_FAIL',
    //   status: err.response.status
    // });
  }
}



export default getsensors;