
import axios from 'axios';
import { makeConfig } from '../../store/actions/sessionActions';

let temp_log_data = async ( id, fan_id, type, start_date, end_date, dispatch, getState ) => {
    
    // dispatch({
    //   type: 'TEMP_LOGS_LOADING',
    //   module_id: id
    // });
  
    const config = await makeConfig('application/json');
  
    const body = {
      id,
      fan_id,
      type,
      start_date,
      end_date
    };
    console.log('body', body)
  
    try { 
      const data = await axios.post(`${process.env.REACT_APP_URL}temperaturesystem/logs`, body, config);
      console.log('logs', data);
  
      dispatch({
        type: 'TEMP_LOG_DATA',
        module_id: id,
        data: data.data
      });
    } 
    catch (err) {
        console.log('----------');
        console.log('\n', 'error', {
        project_name: 'temperaturesys',
        file_name: 'temp_log_data.action.js',
        path:'src/helper/tempsys/temp_log_data.action.js',
        error: err.message
  
        }, '\n\n');
        console.log('----------');
    }
  };

  export default temp_log_data;