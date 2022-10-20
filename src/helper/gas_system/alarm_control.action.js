
import axios from 'axios';
import { makeConfig } from '../../store/actions/sessionActions';

let alarm_control = async (module_id, alarm, dispatch ) => {
  
    const config = await makeConfig('application/json');
  
    const body = {
      module_id,
      alarm
    };

    try {
        const data = await axios.post(`${process.env.REACT_APP_URL}gas/alarm_control`, body, config);
        console.log('alarm', data.data);
    
        // dispatch({
        //   type: 'GAS_ALARM',
        //   payload: data.data
        // });
    }
    catch(err)
    {
        console.log('----------');
        console.log('\n', 'error', {
        project_name: 'gas_system',
        file_name: 'alarm_control.action.js',
        path:'src/helper/gas_system/alarm_control.action.js',
        error: err.message
  
        }, '\n\n');
        console.log('----------');
    }
  
    
  };

  export default alarm_control;