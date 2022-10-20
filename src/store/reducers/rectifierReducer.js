/* eslint-disable linebreak-style */
const initState = {
  rectifier: [],
  chartLoading: true, 
  generalLoading: true,
  maintananceLoading: true,
  maintananceTableLoading: true,
  alertColumns: [],
  alertData: [],
  alertTitle: '',
  alertLoading: true
};
  
const rectifierReducer = (state = initState, action) => {
  let index = null;
  switch (action.type) {
    case 'GET_RC_SENSOR':
      return {
        ...state,
        rectifier: action.payload,
        generalLoading: false
      };

    case 'UPDATE_INPUT_VOLTAGE_LOWER_THRESHOLD':
      if (state.rectifier.length > 0) {
        index = state.rectifier.findIndex((f) => f._id === action.id);
        if (index === -1) {
          return state
        }
        else {
          return{
            ...state,
            rectifier: [
              ...state.rectifier.slice(0, index),
              {
                ...state.rectifier[index],
                ac_lowerthreshold: action.payload.ac_lowerthreshold
              },
              ...state.rectifier.slice(index+1)
  
            ]
  
          };
        }
      }
      else {
        return state
      }
      
      

    case 'UPDATE_INPUT_VOLTAGE_UPPER_THRESHOLD':
      if (state.rectifier.length > 0) {
        index = state.rectifier.findIndex((f) => f._id === action.id);
        if (index === -1) {
          return state
        }
        else {
          return{
            ...state,
            rectifier: [
              ...state.rectifier.slice(0, index),
              {
                ...state.rectifier[index],
                ac_upperthreshold: action.payload.ac_upperthreshold
              },
              ...state.rectifier.slice(index+1)
  
            ]
  
          };
        }
      }
      else {
        return state
      }
      
      

    case 'UPDATE_OUTPUT_VOLTAGE_LOWER_THRESHOLD':
      if (state.rectifier.length > 0) {
        index = state.rectifier.findIndex((f) => f._id === action.id);
        if (index === -1) {
          return state;
        }else {
          return{
            ...state,
            rectifier: [
              ...state.rectifier.slice(0, index),
              {
                ...state.rectifier[index],
                rec_lowerthreshold: action.payload.rec_lowerthreshold
              },
              ...state.rectifier.slice(index+1)
    
            ]
    
          };
        }
      }
      else {
        return state
      }
     

    case 'UPDATE_OUTPUT_VOLTAGE_UPPER_THRESHOLD':
      if (state.rectifier.length > 0) {
        index = state.rectifier.findIndex((f) => f._id === action.id);
        if (index === -1) {
          return state;
        }else {
          return{
            ...state,
            rectifier: [
              ...state.rectifier.slice(0, index),
              {
                ...state.rectifier[index],
                rec_upperthreshold: action.payload.rec_upperthreshold
              },
              ...state.rectifier.slice(index+1)
  
            ]
  
          };
        }
      }
      else {
        return state
      }
      
     

    case 'UPDATE_BATTERY_THEFT_THRESHOLD':
      if (state.rectifier.length > 0) {
        index = state.rectifier.findIndex((f) => f._id === action.id);
        if (index === -1) {
          return state;
        }else {
          return{
            ...state,
            rectifier: [
              ...state.rectifier.slice(0, index),
              {
                ...state.rectifier[index],
                battery_theftThreshold: action.payload.battery_theftThreshold
              },
              ...state.rectifier.slice(index+1)

            ]

          };
        }
      }
      else {
        return state
      }
      

    case 'UPDATE_LOW_BATTERY_THRESHOLD':
      if (state.rectifier.length > 0) {
        index = state.rectifier.findIndex((f) => f._id === action.id);
        if (index === -1) {
          return state;
        }else {
          return{
            ...state,
            rectifier: [
              ...state.rectifier.slice(0, index),
              {
                ...state.rectifier[index],
                battery_lowBatteryAlertThreshold: action.payload.battery_lowBatteryAlertThreshold
              },
              ...state.rectifier.slice(index+1)

            ]

          };
        }
      }
      else {
        return state
      }
      

    case 'UPDATE_MAX_BATTERY_THRESHOLD':
      if (state.rectifier.length > 0) {
        index = state.rectifier.findIndex((f) => f._id === action.id);
        if (index === -1) {
          return state;
        }else {
          return{
            ...state,
            rectifier: [
              ...state.rectifier.slice(0, index),
              {
                ...state.rectifier[index],
                battery_maxVolageValue: action.payload.battery_maxVolageValue
              },
              ...state.rectifier.slice(index+1)

            ]

          };
        }
      }
      else {
        return state
      }
      
    
    case 'UPDATE_INPUT_POWER_STATUS':
      if (state.rectifier.length > 0) {
        index = state.rectifier.findIndex((f) => f._id === action.id);
        if (index === -1) {
          return state;
        }else {
          return {
            ...state,
            rectifier: [
              ...state.rectifier.slice(0, index),
              {
                ...state.rectifier[index],
                ac_status: action.payload.ac_status
              },
              ...state.rectifier.slice(index + 1)
            ]
          };
        }
      }
      else {
        return state
      }
      

    case 'UPDATE_INPUT_VOLTAGE':
      if (state.rectifier.length > 0) {
        index = state.rectifier.findIndex((f) => f._id === action.id);
        if (index === -1) {
          return state;
        }else {
          return {
            ...state,
            rectifier: [
              ...state.rectifier.slice(0, index),
              {
                ...state.rectifier[index],
                ac_inputVoltage: action.payload.ac_inputVoltage
              },
              ...state.rectifier.slice(index + 1)
            ]
          };
        }
      }
      else {
        return state
      }
     

    case 'UPDATE_RECTIFICATION_STATUS':
      if (state.rectifier.length > 0) {
        index = state.rectifier.findIndex((f) => f._id === action.id);
        if (index === -1) {
          return state;
        }else {
          return {
            ...state,
            rectifier: [
              ...state.rectifier.slice(0, index),
              {
                ...state.rectifier[index],
                rec_status: action.payload.rec_status
              },
              ...state.rectifier.slice(index + 1)
            ]
          };
        }
      }
      else {
        return state
      }
      

    case 'UPDATE_OUTPUT_DC_VOLTAGE':
      if (state.rectifier.length > 0) {
        index = state.rectifier.findIndex((f) => f._id === action.id);
        if (index === -1) {
          return state;
        }else {
          return {
            ...state,
            rectifier: [
              ...state.rectifier.slice(0, index),
              {
                ...state.rectifier[index],
                rec_outputDcVoltage: action.payload.rec_outputDcVoltage
              },
              ...state.rectifier.slice(index + 1)
            ]
          };
        }
      }
      else {
        return state
      }
      

    case 'UPDATE_BATTERY_BANK_CONNECTION':
      if (state.rectifier.length > 0) {
        index = state.rectifier.findIndex((f) => f._id === action.id);
        if (index === -1) {
          return state;
        }else {
          return {
            ...state,
            rectifier: [
              ...state.rectifier.slice(0, index),
              {
                ...state.rectifier[index],
                battery_status: action.payload.battery_status
              },
              ...state.rectifier.slice(index + 1)
            ]
          };
        }
      }
      else {
        return state
      }
      

    case 'UPDATE_BANK_BATTERY_STATUS':
      if (state.rectifier.length > 0) {
        index = state.rectifier.findIndex((f) => f._id === action.id);
        if (index === -1) {
          return state;
        }else {
          return {
            ...state,
            rectifier: [
              ...state.rectifier.slice(0, index),
              {
                ...state.rectifier[index],
                battery_voltagePercentage: action.payload.battery_voltagePercentage,
                battery_voltage: action.payload.battery_voltage
              },
              ...state.rectifier.slice(index + 1)
            ]
          };
        }
      }
      else {
        return state
      }
      

    case 'RECTIFIER_TABLE_DATA':
      if (state.rectifier.length > 0) {
        index = state.rectifier.findIndex((f) => f._id === action.rectifier_id);
        if (index === -1) {
          return state;
        }else {
          return {
            ...state,
            rectifier: [
              ...state.rectifier.slice(0, index),
              {
                ...state.rectifier[index],
                logs: {
                  ...state.rectifier[index].logs,
                  columns: action.payload.columns,
                  data: action.payload.data,
                  title: action.payload.title,
                  isLoading: false
                }
              },
              ...state.rectifier.slice(index + 1)
            ]
          };
        }
      }
      else {
        return state
      }
      

    case 'RECTIFIER_CHART_DATA':
      if (state.rectifier.length > 0) {
        index = state.rectifier.findIndex((f) => f._id === action.rectifier_id);
        if (index === -1) {
          return state;
        }else {
          return {
            ...state,
            rectifier: [
              ...state.rectifier.slice(0, index),
              {
                ...state.rectifier[index],
                charts: {
                  ...state.rectifier[index].charts,
                  data: action.payload.data,
                  labels: action.payload.labels,
                  isLoading: false
                }
              },
              ...state.rectifier.slice(index + 1)
            ],
            chartLoading: false
          };
        }
      }
      else {
        return state
      }
      

    case 'RECTIFIER_CHART_LOADING':
      if (state.rectifier.length > 0) {
        index = state.rectifier.findIndex((f) => f._id === action.rectifier_id);
        if (index === -1) {
          return state;
        }else {
        
          return {
            ...state,
            rectifier: [
              ...state.rectifier.slice(0, index),
              {
                ...state.rectifier[index],
                charts: {
                  ...state.rectifier[index].charts,
                  data: [],
                  labels: [],
                  isLoading: true
                }
              },
              ...state.rectifier.slice(index + 1)
            ]
          };
        }
      }
      else {
        return state
      }
      
      
    case 'GET_RECTIFIER_ALERTS':
      return {
        ...state,
        alertColumns: action.payload.columns,
        alertData: action.payload.data,
        alertTitle: action.payload.title,
        alertLoading: false
      };

    case 'RECTIFIER_TABLE_LOADING':
      if (state.rectifier.length > 0) {  
        index = state.rectifier.findIndex((f) => f._id === action.rectifier_id);
        if (index === -1) {
          return state;
        }else {
          return {
            ...state,
            rectifier: [
              ...state.rectifier.slice(0, index),
              {
                ...state.rectifier[index],
                logs: {
                  ...state.rectifier[index].logs,
                  columns: [],
                  data: [],
                  title: [],
                  isLoading: true
                }
              },
              ...state.rectifier.slice(index + 1)
            ]
          };
        }
      }
      else {
        return state
      }
      

    case 'RECTIFIER_ALERTS_LOADING':
      return {
        ...state,
        alertLoading: true
      };
      
    default:
      return state;
  }
};
  
export default rectifierReducer;
  