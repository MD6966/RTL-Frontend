
import axios from 'axios';
import { makeConfig } from '../../store/actions/sessionActions';

let gasLogs = async ( id, type, start_date, end_date, dispatch ) => {
    
    // dispatch({
    //   type: 'TEMP_LOGS_LOADING',
    //   module_id: id
    // });
  
    const config = await makeConfig('application/json');
  
    const body = {
      id,
      type,
      start_date,
      end_date
    };
  
    try { 
      const data = await axios.post(`${process.env.REACT_APP_URL}gas/logs`, body, config);
      console.log('logs', data);
  
      dispatch({
        type: 'GAS_LOG_DATA',
        module_id: id,
        data: data.data
      });
    } 
    catch (err) {
        console.log('----------');
        console.log('\n', 'error', {
        project_name: 'gas_system',
        file_name: 'gasLogs.action.js',
        path:'src/helper/gas_system/gasLogs.action.js',
        error: err.message
  
        }, '\n\n');
        console.log('----------');
    }
  };

  export default gasLogs;