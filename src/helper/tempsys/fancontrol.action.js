
import axios from 'axios';
import { makeConfig } from '../../store/actions/sessionActions';

let fancontrol = async (res, dispatch) => {
  const config = await makeConfig('application/json');
    
    try{
      let { module_id, fan_id, status } = res;
      console.log({
        action: 'fancontrol',
        module_id, 
        fan_id, 
        status
      })

      dispatch({
        type: 'UPDATE_FAN',
        module_id, 
        fan_id, 
        status
      })
    }
    
    
    catch (err) {
        console.log('----------');
        console.log('\n', 'error', {
        project_name: 'temperaturesys',
        file_name: 'fancontrol.action.js',
        path:'src/helper/tempsys/fancontrol.action.js',
        error: err.message
  
        }, '\n\n');
        console.log('----------');
    }
  }

export default fancontrol;