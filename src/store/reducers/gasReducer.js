/* eslint-disable linebreak-style */
const initState = {
  gas: [],
  chartLoading: true, 
  generalLoading: true,
  maintananceLoading: true,
  maintananceTableLoading: true,
  alertColumns: [],
  alertData: [],
  alertTitle: '',
  alertLoading: true,
  gas_logsLoading: true
};
  
const gasReducer = (state = initState, action) => {
  let index = null;
  switch (action.type) {
    
    case 'GET_GAS_SENSOR':
      {
        console.log('gas reducer',action.payload);
  
        return {
            ...state,
            gas: action.payload.map( (record, index) => {
              record.logs = [];
              record.graphs = {};
                console.log(record);
                return record;
            }),
            generalLoading: false
        }
      };

      // case 'GAS_ALARM':
      case 'UPDATE_ALARM':
        {
          console.log({
            system_name: "gas_system",
            payload: action.payload,
            reducer: "gasReducer",
            type: "UPDATE_ALARM"
          });
    
          // console.log('payload', action.payload)
    
          let module_id = action.module_id;
          let alarm = action.alarm;
      
          try {
            return {
              ...state,
              gas: state.gas.map( (gasObj, index) => {
          
                  if(gasObj._id == module_id)
                  {
                    gasObj.alarm = alarm;
                      return gasObj;
                  }
                  return gasObj;
                }) 
            } 
          }
          catch (err)
          {
            console.log(err);
          }
        }

      case 'UPDATE_GAS':
        {
          console.log({
            system_name: "gas_system",
            payload: action.payload,
            reducer: "gasReducer",
            type: "UPDATE_GAS"
          });
    
          // console.log('payload', action.payload)
    
          let module_id = action.module_id;
          let gas = action.gas;
      
          try {
            return {
              ...state,
              gas: state.gas.map( (gasObj, index) => {
                console.log('ddd', gasObj);
          
                  if(gasObj._id == module_id)
                  {
                    gasObj.gas = gas;
                      return gasObj;
                  }
                  return gasObj;
                }) 
            } 
          }
          catch (err)
          {
            console.log(err);
          }
        }
      
        case 'GAS_LOG_DATA':
      {

        let module_id = action.module_id;
        let logs = action.data;

        console.log({
          record: logs
        })
        return {
          ...state,
          gas: state.gas.map( (gasObj, index) => {
          
            if(gasObj._id == module_id)
            {
                gasObj.logs = [];
                gasObj.logs = logs;
                return gasObj;
            }
            return gasObj;
          }),
          gas_logsLoading: false 
        };
      };


      case 'GAS_CHARTS':
        {
          let module_id = action.module_id;
          let graphs = action.data;
          
          console.log( {
            module_id,
            graphs
          });
  
          return {
            ...state,
            gas: state.gas.map( (gasObj, index) => {
            
              if(gasObj._id == module_id)
              {
                  gasObj.graphs = {}
                  gasObj.graphs = graphs;
                  return gasObj;
              }
              return gasObj;
            }),
            chartLoading: false
          };
        }   
    case 'GET_GAS_ALERTS':
      return {
        ...state,
        alertColumns: action.payload.columns,
        alertData: action.payload.data,
        alertTitle: action.payload.title,
        alertLoading: false
      };
    // case 'SECURITY_TABLE_LOADING':
    //   index = state.security.findIndex((f) => f._id === action.security_id);
    //   return {
    //     ...state,
    //     security: [
    //       ...state.security.slice(0, index),
    //       {
    //         ...state.security[index],
    //         logs: {
    //           ...state.security[index].logs,
    //           columns: [],
    //           data: [],
    //           title: [],
    //           isLoading: true
    //         }
    //       },
    //       ...state.security.slice(index + 1)
    //     ]
    //   };  
    case 'GAS_ALERTS_LOADING':
      return {
        ...state,
        alertLoading: true
      };      
    default:
      return state;
  }
};
  
export default gasReducer;
  