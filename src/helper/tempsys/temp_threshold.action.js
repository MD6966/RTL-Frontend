
import axios from 'axios';
import { makeConfig } from '../../store/actions/sessionActions';

let temp_threshold = async (type, module_id, value, dispatch) => {
    const config = await makeConfig('application/json');
  
    const body = {
        type,
        module_id,
        value
    };
  
    console.log(body);
    try{
      const res = await axios.post(`${process.env.REACT_APP_URL}temperaturesystem/set`,body ,config);
  
      console.log(res);
      
      if(res)
      {
      
        if(res.data.type == "lowerthreshold")
        {
          console.log('lower threshold')
          dispatch({
                type:'TEMPERATURE_LOWER_THRESHOLD',
                module_id: res.data.module_id,
                lowerthreshold: res.data.lowerthreshold
              });
        }
        else if(res.data.type == "upperthreshold")
        {
          console.log('upper threshold')
          dispatch({
            type:'TEMPERATURE_UPPER_THRESHOLD',
            module_id: res.data.module_id,
            upperthreshold: res.data.upperthreshold
          });
        }
      }
      // if(type === 'lowerthreshold'){
      //   dispatch({
      //     type:'TEMPERATURE_LOWER_THRESHOLD',
      //     module_id: res.data,
      //     lowerthreshold: 
      //   });
      // }
      // else if (type === 'upperthreshold'){
      //   dispatch({
      //     type:'TEMPERATURE_UPPER_THRESHOLD',
      //     payload: res.data
      //   });
      // }
    } 
    catch (err) {
        console.log('----------');
        console.log('\n', 'error', {
        project_name: 'temperaturesys',
        file_name: 'temp_threshold.action.js',
        path:'src/helper/tempsys/temp_threshold.action.js',
        error: err.message
  
        }, '\n\n');
        console.log('----------');
    }
  };

  export default temp_threshold;