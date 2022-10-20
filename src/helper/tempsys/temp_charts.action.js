
import axios from 'axios';
import { makeConfig } from '../../store/actions/sessionActions';

let temp_charts = async (id, type, range, dispatch) => {
    // dispatch({
    //   type: 'TEMP_CHART_LOADING',
    //   temp_id: id
    // });
  
    const config = await makeConfig('application/json');
    
    const body = {
      id,
      type,
      range
    }
  
    try {
      const data = await axios.post(`${process.env.REACT_APP_URL}temperaturesystem/graphs`, body, config );
      console.log('charts data', {
          record: data.data
      })
      
        dispatch({
            type: 'TEST_DATA',
            module_id: id,
            data : data.data
        });
    } 
    catch (err) 
    {
      console.log('----------');
          console.log('\n', 'error', {
          project_name: 'temperaturesys',
          file_name: 'temp_charts.action.js',
          path:'src/helper/tempsys/temp_charts.action.js',
          error: err.message
    
          }, '\n\n');
          console.log('----------');
    }
  };

  export default temp_charts;