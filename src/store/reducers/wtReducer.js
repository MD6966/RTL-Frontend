/* eslint-disable linebreak-style */
const initState = {
  isLoading: true,
  sensor:[],
  vaChart: {
    data: [],
    labels: [],
    isLoading: true },
  vbChart: {
    data: [],
    labels: [],
    isLoading: true
  },
  vcChart: {
    data: [],
    labels: [],
    isLoading: true
  },
  iaChart: {
    data: [],
    labels: [],
    isLoading: true
  },
  ibChart: {
    data: [],
    labels: [],
    isLoading: true
  },
  icChart: {
    data: [],
    labels: [],
    isLoading: true
  },
  alertColumns: [],
  alertData: [],
  alertTitle: '',
  alertLoading: true
};
  
const wtReducer = (state = initState, action) => {
  let index ;
  switch (action.type) {
    case 'GET_SENSOR':
      return{
        ...state,
        sensor: action.payload,
        isLoading: false
      };
    case 'OH_U_UPPER_LIMIT':
      index = state.sensor.findIndex((f) => f._id === action.id);
      return{
        ...state,
        sensor: [
          ...state.sensor.slice(0, index),
          {
            ...state.sensor[index],
            upperThreshold: action.payload
          },
          ...state.sensor.slice(index+1)
  
        ]
  
      };
    case 'UG_U_UPPER_LIMIT':
      index = state.sensor.findIndex((f) => f._id === action.id);
      return{
        ...state,
        sensor: [
          ...state.sensor.slice(0, index),
          {
            ...state.sensor[index],
            upperThreshold_lowerTank: action.payload
          },
          ...state.sensor.slice(index+1)
  
        ]
  
      };
    case 'Lower_Temp_Upper Threshold':
      index = state.sensor.findIndex((f) => f._id === action.id);
      return{
        ...state,
        sensor: [
          ...state.sensor.slice(0, index),
          {
            ...state.sensor[index],
            temp_upper_threshold: action.payload
          },
          ...state.sensor.slice(index+1)
  
        ]
  
      };
    case 'OH_LOWER_LIMIT':
       
      index = state.sensor.findIndex((f) => f._id === action.id);
      return{
        ...state,
        sensor: [
          ...state.sensor.slice(0, index),
          {
            ...state.sensor[index],
            threshold: action.payload
          },
          ...state.sensor.slice(index+1)
  
        ]
  
      };
    case 'UG_LOWER_LIMIT':
      index = state.sensor.findIndex((f) => f._id === action.id);
      return{
        ...state,
        sensor: [
          ...state.sensor.slice(0, index),
          {
            ...state.sensor[index],
            threshold_lowerTank: action.payload
          },
          ...state.sensor.slice(index+1)
  
        ]
  
      };
    case 'temp':
      index = state.sensor.findIndex((f) => f._id === action.id);
      return{
        ...state,
        sensor: [
          ...state.sensor.slice(0, index),
          {
            ...state.sensor[index],
            temp_threshold: action.payload
          },
          ...state.sensor.slice(index+1)
  
        ]
  
      };
    case 'MOTOR':
      index = state.sensor.findIndex((f) => f._id === action.payload.tank_id);
      return{
        ...state,
        sensor: [
          ...state.sensor.slice(0, index),
          {
            ...state.sensor[index],
            motor: action.payload.motor
          },
          ...state.sensor.slice(index+1)
        ]
      };
    case 'FORCE_MOTOR':
      index = state.sensor.findIndex((f) => f._id === action.payload.tank_id);
      return{
        ...state,
        sensor: [
          ...state.sensor.slice(0, index),
          {
            ...state.sensor[index],
            forcedMotor: action.payload.forceMotor
          },
          ...state.sensor.slice(index+1)
        ]
      };
    case 'FILLLEVEL':
      index = state.sensor.findIndex((f) => f._id === action.payload.tank_id);
      return{
        ...state,
        sensor: [
          ...state.sensor.slice(0, index),
          {
            ...state.sensor[index],
            fillLevel: action.payload.fillLevel
          },
          ...state.sensor.slice(index+1)
        ]
      };
    case 'FILLLEVEL1':
      index = state.sensor.findIndex((f) => f._id === action.payload.tank_id);
      return{
        ...state,
        sensor: [
          ...state.sensor.slice(0, index),
          {
            ...state.sensor[index],
            fillLevel1: action.payload.fillLevel1
          },
          ...state.sensor.slice(index+1)
        ]
      };
    case 'THRESHOLD':
      index = state.sensor.findIndex((f) => f._id === action.payload.tank_id);
      return{
        ...state,
        sensor: [
          ...state.sensor.slice(0, index),
          {
            ...state.sensor[index],
            threshold: action.payload.threshold
          },
          ...state.sensor.slice(index+1)
        ]
      };
    case 'THRESHOLD_LOWERTANK':
      index = state.sensor.findIndex((f) => f._id === action.payload.tank_id);
      return{
        ...state,
        sensor: [
          ...state.sensor.slice(0, index),
          {
            ...state.sensor[index],
            threshold_lowerTank: action.payload.threshold_lowerTank
          },
          ...state.sensor.slice(index+1)
        ]
      };
    case 'UPPERTHRESHOLD_LOWERTANK':
      index = state.sensor.findIndex((f) => f._id === action.payload.tank_id);
      return{
        ...state,
        sensor: [
          ...state.sensor.slice(0, index),
          {
            ...state.sensor[index],
            upperThreshold_lowerTank: action.payload.upperThreshold_lowerTank
          },
          ...state.sensor.slice(index+1)
        ]
      };
    case 'UPPERTHRESHOLD':
      index = state.sensor.findIndex((f) => f._id === action.payload.tank_id);
      return{
        ...state,
        sensor: [
          ...state.sensor.slice(0, index),
          {
            ...state.sensor[index],
            upperThreshold: action.payload.upperThreshold
          },
          ...state.sensor.slice(index+1)
        ]
      };
    case 'MAINTENANCE':
      index = state.sensor.findIndex((f) => f._id === action.payload.tank_id);
      return{
        ...state,
        sensor: [
          ...state.sensor.slice(0, index),
          {
            ...state.sensor[index],
            maintenance: action.payload.maintenance
          },
          ...state.sensor.slice(index+1)
        ]
      };
    case 'WT_TABEL_LOADING':
      index = state.sensor.findIndex((f) => f._id === action.wt_id);
      return {
        ...state,
        sensor: [
          ...state.sensor.slice(0, index),
          {
            ...state.sensor[index],
            logs: {
              ...state.sensor[index].logs,
              columns: [],
              data: [],
              title: [],
              isLoading: true
            }
          },
          ...state.sensor.slice(index + 1)
        ]
      };
    case 'WT_TABEL_DATA':
      index = state.sensor.findIndex((f) => f._id === action.wt_id);
      return {
        ...state,
        sensor: [
          ...state.sensor.slice(0, index),
          {
            ...state.sensor[index],
            logs: {
              ...state.sensor[index].logs,
              columns: action.payload.columns,
              data: action.payload.data,
              title: action.payload.title,
              isLoading: false
            }
          },
          ...state.sensor.slice(index + 1)
        ]
      };
    case 'TANK_CHART_LOADING':
      index = state.sensor.findIndex((f) => f._id === action.wt_id);
                        
      return {
        ...state,
        sensor: [
          ...state.sensor.slice(0, index),
          {
            ...state.sensor[index],
            charts: {
              ...state.sensor[index].charts,
              data: [],
              labels: [],
              isLoading: true
            }
          },
          ...state.sensor.slice(index + 1)
        ]
      }; 
    case 'MOTOR_CHART':
    case 'FORCED_MOTOR_CHART':
    case 'FILLLEVEL_CHART':
    case 'FILLLEVEL1_CHART':
      index = state.sensor.findIndex((f) => f._id === action.wt_id);
      return {
        ...state,
        sensor: [
          ...state.sensor.slice(0, index),
          {
            ...state.sensor[index],
            charts: {
              ...state.sensor[index].charts,
              data: action.payload.data,
              labels: action.payload.labels,
              isLoading: false
            }
          },
          ...state.sensor.slice(index + 1)
        ]
      };
    case 'WT_ALERTS_LOADING':
      return{
        ...state,
        alertLoading: true,
      };
    case 'GET_WT_ALERTS':
      return{
        ...state,
        alertData: action.payload.data,
        alertColumns: action.payload.columns,
        alertTitle: action.payload.title,
        alertLoading: false
      };
    case 'FORCE_MOTOR_ON':
      return{
        ...state,

      }
                        
                        
    default:
      return state;
  }
};
  
export default wtReducer;