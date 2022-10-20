
import axios from 'axios';
import { makeConfig } from 'store/actions/sessionActions';

let get_gas  = user_id => async (dispatch) => {
    const config = await makeConfig('application/json');
    console.log(user_id)
    try {
      const res = await axios.get(`${process.env.REACT_APP_URL}/gas/sensors/${user_id}`,config);
      console.log('gas sensor+++++++++++++++++++++++++++++++++', res.data);
      
      dispatch({
        type: 'GET_GAS_SENSOR',
        payload: res.data
      });
  
    } 
    catch(err)
    {
        console.log('----------');
        console.log('\n', 'error', {
        project_name: 'gas_system',
        file_name: 'get_gas.action.js',
        path:'src/helper/gas_system/get_gas.action.js',
        error: err.message
  
        }, '\n\n');
        console.log('----------');
    }
  };

  export default get_gas;