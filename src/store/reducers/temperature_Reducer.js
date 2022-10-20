import tempsysData from './systemData/tempsysData';

const initState = {
  temp: [],
  isLoading: true,
  macroChartData: [],
  macroChartLabels: [],
  macroChartLoading: false,
  alertColumns: [],
  alertData: [],
  alertTitle: '',
  alertLoading: true,
  logsLoading: true,
  chartLoading: true
};

const temperature_Reducer = (state = initState, action) => {
  let index = null;
  switch (action.type) {

    case 'GET_TEMPERATURE_SENSORS':
    {
      console.log(action.payload);

      return {
          ...state,
          temp: action.payload.map( (record, index) => {
            record.logs = [];
            record.graphs = {};
              console.log(record);
              return record;
          }),
          isLoading: false
      }
    };
   
      
    case 'UPDATE_TEMPERATURE':
      console.log({
        system_name: "tempsys",
        payload: action.payload,
        reducer: "temperature_reducer",
        type: "UPDATE_TEMPERATURE"
      });

      let module_id = action.payload.id;
      let temperature = action.payload.temperature;
  
      try {
        return {
          ...state,
          temp: state.temp.map( (temperatureObj, index) => {
      
              if(temperatureObj._id == module_id)
              {
                  temperatureObj.temperature = temperature;
                  return temperatureObj;
              }
              return temperatureObj;
            }) 
        } 
      }
      catch (err)
      {
        console.log(err);
      }

    case 'UPDATE_HUMIDITY':
      {
        console.log({
          system_name: "tempsys",
          payload: action.payload,
          reducer: "temperature_reducer",
          type: "UPDATE_HUMIDITY"
        });
  
        let module_id = action.payload.id;
        let humidity = action.payload.humidity;
    
        try {
          return {
            ...state,
            temp: state.temp.map( (temperatureObj, index) => {
        
                if(temperatureObj._id == module_id)
                {
                    temperatureObj.humidity = humidity;
                    return temperatureObj;
                }
                return temperatureObj;
              }) 
          } 
        }
        catch (err)
        {
          console.log(err);
        }
      }
    

    case 'TEMPERATURE_LOWER_THRESHOLD':
      {
        console.log({
          system_name: "tempsys",
          // payload: action.payload,
          reducer: "temperature_reducer",
          type: "TEMPERATURE_LOWER_THRESHOLD"
        });
  
        let module_id = action.module_id;
        let lowerthreshold = action.lowerthreshold;
         try {
            return {
              ...state,
              temp: state.temp.map( (temperatureObj, index) => {
          
                  if(temperatureObj._id == module_id)
                  {
                      temperatureObj.lowerthreshold = lowerthreshold;
                      return temperatureObj;
                  }
                  return temperatureObj;
                }) 
            } 
          }
          catch (err)
          {
            console.log(err);
          }
      }
     

    case 'TEMPERATURE_UPPER_THRESHOLD':
      {
        console.log({
          system_name: "tempsys",
          payload: action.payload,
          reducer: "temperature_reducer",
          type: "TEMPERATURE_UPPER_THRESHOLD"
        });
  
        let module_id = action.module_id;
        let upperthreshold = action.upperthreshold;
    
        try {
          return {
            ...state,
            temp: state.temp.map( (temperatureObj, index) => {
        
                if(temperatureObj._id == module_id)
                {
                    temperatureObj.upperthreshold = upperthreshold;
                    return temperatureObj;
                }
                console.log('upper', temperatureObj.upperthreshold);
                return temperatureObj;
              }) 
          } 
        }
        catch (err)
        {
          console.log(err);
        }
      }

      case 'UPDATE_FAN':
        {
          try {
            let module_id = action.module_id;
            let fan_id = action.fan_id; 
            let status = action.status;

            return {
              ...state,
              temp: state.temp.map( (temperatureObj, index) => {

                if(temperatureObj._id == module_id)
                {
                    temperatureObj.fans.map((fan, index) => {
                      console.log('index', fan);
                      if(fan._id == fan_id) {
                        fan.status = status;
                        return fan
                      }
                      return fan;
                    })
                    return temperatureObj;
                }
                return temperatureObj;
              })
            }
          }
          catch(err) 
          {
            console.log(err.message);
          }
        }

        case 'FAN_MODE':
      {
        console.log({
          system_name: "tempsys",
          payload: action.payload,
          reducer: "temperature_reducer",
          type: "FAN_MODE"
        });
  
        let module_id = action.module_id;
        let mode = action.mode;
    
        try {
          return {
            ...state,
            temp: state.temp.map( (temperatureObj, index) => {
        
                if(temperatureObj._id == module_id)
                {
                    temperatureObj.fan_auto = mode;
                    return temperatureObj;
                }
                return temperatureObj;
              }) 
          } 
        }
        catch (err)
        {
          console.log(err);
        }
      }

    case 'GET_TEMPERATURE_ALERTS':
      return {
        ...state,
        alertColumns: action.payload.columns,
        alertData: action.payload.data,
        alertTitle: action.payload.title,
        alertLoading: false
      };

    case 'TEMP_LOG_DATA':
      {

        let module_id = action.module_id;
        let logs = action.data;

        console.log({
          record: logs
        })
        return {
          ...state,
          temp: state.temp.map( (temperatureObj, index) => {
          
            if(temperatureObj._id == module_id)
            {
                temperatureObj.logs = [];
                temperatureObj.logs = logs;
                return temperatureObj;
            }
            return temperatureObj;
          }),
          logsLoading: false 
        };
      }

      case 'TEST_DATA':
      {
        let module_id = action.module_id;
        let graphs = action.data;
        console.log( {
          module_id,
          graphs
        });

        return {
          ...state,
          temp: state.temp.map( (temperatureObj, index) => {
          
            if(temperatureObj._id == module_id)
            {
                temperatureObj.graphs = {}
                temperatureObj.graphs = graphs;
                return temperatureObj;
            }
            return temperatureObj;
          }),
          chartLoading: false
        };
      }

    // case 'TEMP_LOGS_LOADING':
    //   return {
    //     logsLoading: true
    //   }
    

    case 'TEMPERATURE_ALERTS_LOADING':
      return {
        ...state,
        alertLoading: true
      };

    default:
      return state;
  }
};

export default temperature_Reducer;
