
import axios from 'axios';
import { makeConfig } from '../../store/actions/sessionActions';

let fan_automode = async (module_id, mode, dispatch) => {
  
    // const config = {
    //   headers: {
    //     'content-type': 'application/json'
    //   }
    // };
    const config = await makeConfig('application/json');
    
    const body = {
      module_id,
      mode
    };

    console.log('body fan mode', body)
    
    try{
      const res = await axios.post(`${process.env.REACT_APP_URL}temperaturesystem/auto`,body ,config);
      console.log(' fan mode', res.data);

      dispatch({
          type: 'FAN_MODE',
          module_id,
          mode
      })
    }
    catch(err){
        console.log('----------');
        console.log('\n', 'error', {
        project_name: 'temperaturesys',
        file_name: 'fan_automode.action.js',
        path:'src/helper/tempsys/fan_automode.action.js',
        error: err.message
  
        }, '\n\n');
        console.log('----------');
    }
  }

  export default fan_automode;