/* eslint-disable linebreak-style */
const initState = {
  security: [],
  chartLoading: true, 
  generalLoading: true,
  maintananceLoading: true,
  maintananceTableLoading: true,
  alertColumns: [],
  alertData: [],
  alertTitle: '',
  alertLoading: true
};
  
const tubewellReducer = (state = initState, action) => {
  let index = null;
  switch (action.type) {
    case 'GET_SECURITY_SENSOR':
      return {
        ...state,
        security: action.payload,
        generalLoading: false
      }; 
    case 'UPDATE_SECURITY_DOOR_STATUS':
      index = state.security.findIndex((f) => f._id === action.payload.security_id);
      return {
        ...state,
        security: [
          ...state.security.slice(0, index),
          {
            ...state.security[index],
            door_status: action.payload.door_status
          },
          ...state.security.slice(index + 1)
        ]
      };
   
    case 'UPDATE_FIRE_ALARM_STATUS':
      index = state.security.findIndex((f) => f._id === action.payload.security_id);
      return {
        ...state,
        security: [
          ...state.security.slice(0, index),
          {
            ...state.security[index],
            alarm: action.payload.alarm
          },
          ...state.security.slice(index + 1)
        ]
      };
   
    case 'SECURITY_TABLE_DATA':
      index = state.security.findIndex((f) => f._id === action.security_id);
      return {
        ...state,
        security: [
          ...state.security.slice(0, index),
          {
            ...state.security[index],
            logs: {
              ...state.security[index].logs,
              columns: action.payload.columns,
              data: action.payload.data,
              title: action.payload.title,
              isLoading: false
            }
          },
          ...state.security.slice(index + 1)
        ]
      };
    case 'SECURITY_CHART_DATA':
      index = state.security.findIndex((f) => f._id === action.security_id);
      return {
        ...state,
        security: [
          ...state.security.slice(0, index),
          {
            ...state.security[index],
            charts: {
              ...state.security[index].charts,
              data: action.payload.data,
              labels: action.payload.labels,
              isLoading: false
            }
          },
          ...state.security.slice(index + 1)
        ],
        chartLoading: false
      };

    case 'SECURITY_CHART_LOADING':
      index = state.security.findIndex((f) => f._id === action.security_id);
        
      return {
        ...state,
        security: [
          ...state.security.slice(0, index),
          {
            ...state.security[index],
            charts: {
              ...state.security[index].charts,
              data: [],
              labels: [],
              isLoading: true
            }
          },
          ...state.security.slice(index + 1)
        ]
      };   
    case 'GET_SECURITY_ALERTS':
      return {
        ...state,
        alertColumns: action.payload.columns,
        alertData: action.payload.data,
        alertTitle: action.payload.title,
        alertLoading: false
      };
    case 'SECURITY_TABLE_LOADING':
      index = state.security.findIndex((f) => f._id === action.security_id);
      return {
        ...state,
        security: [
          ...state.security.slice(0, index),
          {
            ...state.security[index],
            logs: {
              ...state.security[index].logs,
              columns: [],
              data: [],
              title: [],
              isLoading: true
            }
          },
          ...state.security.slice(index + 1)
        ]
      };  
    case 'SECURITY_ALERTS_LOADING':
      return {
        ...state,
        alertLoading: true
      };      
    default:
      return state;
  }
};
  
export default tubewellReducer;
  