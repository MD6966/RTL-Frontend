/* eslint-disable linebreak-style */
const initState = {
  isLoading: true,
  sensor:[],
  alertColumns: [],
  alertData: [],
  alertTitle: '',
  alertLoading: true
};

const envReducer = (state = initState, action) => {
  

  let index ;
  switch (action.type) {
    case 'GET_ENV_SENSOR':
      return{
        ...state,
        sensor: action.payload,
        isLoading: false
      };
    case 'PM1_UPPER_THRESHOLD':
    case 'UPDATE_PM1_UPPER_THRESHOLD':
      index = state.sensor.findIndex((f) => f._id === action.id);
      return{
        ...state,
        sensor: [
          ...state.sensor.slice(0, index),
          {
            ...state.sensor[index],
            pm1_upperThreshold: action.payload
          },
          ...state.sensor.slice(index+1)

        ]

      };
    case 'PM2_5_UPPER_THRESHOLD':
    case 'UPDATE_PM2_5_UPPER_THRESHOLD':
      index = state.sensor.findIndex((f) => f._id === action.id);
      return{
        ...state,
        sensor: [
          ...state.sensor.slice(0, index),
          {
            ...state.sensor[index],
            pm2_5upperThreshold: action.payload
          },
          ...state.sensor.slice(index+1)

        ]

      };
    case 'PM2_5_THRESHOLD':
    case 'UPDATE_PM2_5_THRESHOLD':
      index = state.sensor.findIndex((f) => f._id === action.id);
      return{
        ...state,
        sensor: [
          ...state.sensor.slice(0, index),
          {
            ...state.sensor[index],
            pm2_5threshold: action.payload
          },
          ...state.sensor.slice(index+1)

        ]

      };
    case 'PM10_UPPER_THRESHOLD':
    case 'UPDATE_PM10_UPPER_THRESHOLD':
      index = state.sensor.findIndex((f) => f._id === action.id);
      return{
        ...state,
        sensor: [
          ...state.sensor.slice(0, index),
          {
            ...state.sensor[index],
            pm10_upperThreshold: action.payload
          },
          ...state.sensor.slice(index+1)

        ]

      };
    case 'UPDATE_PM1':
      index = state.sensor.findIndex((f) => f._id === action.payload.env_id);
      return{
        ...state,
        sensor: [
          ...state.sensor.slice(0, index),
          {
            ...state.sensor[index],
            pm1: action.payload.pm1
          },
          ...state.sensor.slice(index+1)
        ]
      };
    case 'UPDATE_PM2_5':
      index = state.sensor.findIndex((f) => f._id === action.payload.env_id);
      return{
        ...state,
        sensor: [
          ...state.sensor.slice(0, index),
          {
            ...state.sensor[index],
            pm2_5: action.payload.pm2_5
          },
          ...state.sensor.slice(index+1)
        ]
      };
    case 'UPDATE_PM10':
      index = state.sensor.findIndex((f) => f._id === action.payload.env_id);
      return{
        ...state,
        sensor: [
          ...state.sensor.slice(0, index),
          {
            ...state.sensor[index],
            pm10: action.payload.pm10
          },
          ...state.sensor.slice(index+1)
        ]
      };
    case 'ENV_TABEL_LOADING':
      index = state.sensor.findIndex((f) => f._id === action.env_id);
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
    case 'ENV_TABEL_DATA':
      index = state.sensor.findIndex((f) => f._id === action.env_id);
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
    case 'ENV_CHART_LOADING':
      index = state.sensor.findIndex((f) => f._id === action.env_id);
                      
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
    case 'PM1_CHART':
    case 'PM2_5_CHART':
    case 'PM10_CHART':
      index = state.sensor.findIndex((f) => f._id === action.env_id);
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
    case 'ENV_ALERTS_LOADING':
      return{
        ...state,
        alertLoading: true,
      };
    case 'GET_ENV_ALERTS':
      return{
        ...state,
        alertData: action.payload.data,
        alertColumns: action.payload.columns,
        alertTitle: action.payload.title,
        alertLoading: false
      };
                      
                      
    default:
      return state;
  }
};

export default envReducer;