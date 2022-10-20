/* eslint-disable linebreak-style */
const initState = {
  light: [],
  chartLoading: true, 
  generalLoading: true,
  maintananceLoading: true,
  maintananceTableLoading: true,
  alertColumns: [],
  alertData: [],
  alertTitle: '',
  alertLoading: true,
  routineLoading: false
};
  
const lightReducer = (state = initState, action) => {
  let index = null;
  switch (action.type) {
    case 'GET_HL_SENSOR':
      return {
        ...state,
        light: action.payload,
        generalLoading: false
      };
    
    case 'UPDATE_LIGHT_STATUS':
      index = state.light.findIndex((f) => f._id === action.payload.st_id);
      // eslint-disable-next-line no-case-declarations
      let newArr = [];
      for(let i=0; i<=action.payload.light.length-1; i++){
        newArr[i] = action.payload.light[i]
      }
      return {
        ...state,
        light: [
          ...state.light.slice(0, index),
          {
            ...state.light[index],
            lights: newArr
          },
          ...state.light.slice(index + 1)
        ]
      };
  

    
    case 'UPDATE_DIM_LEVEL':
      index = state.light.findIndex((f) => f._id === action.id);
      return {
        ...state,
        light: [
          ...state.light.slice(0, index),
          {
            ...state.light[index],
            dimLevel: action.payload,
            routine_dimLevel: action.dim_levelCopy
          },
          ...state.light.slice(index + 1)
        ]
      };

    case 'SET_LIGHT_TIMER':
    case 'UPDATE_LIGHT_TIMER':
      index = state.light.findIndex((f) => f._id === action.id);
      return {
        ...state,
        light: [
          ...state.light.slice(0, index),
          {
            ...state.light[index],
            light_time: action.payload
          },
          ...state.light.slice(index + 1)
        ]
      };

    case 'UPDATE_RADAR_MODE':
      index = state.light.findIndex((f) => f._id === action.id);
      return {
        ...state,
        light: [
          ...state.light.slice(0, index),
          {
            ...state.light[index],
            radar_enable: action.payload
          },
          ...state.light.slice(index + 1)
        ]
      };

    case 'UPDATE_SEGMENT':
      index = state.light.findIndex((f) => f._id === action.id);
      return {
        ...state,
        light: [
          ...state.light.slice(0, index),
          {
            ...state.light[index],
            segControl: action.payload
          },
          ...state.light.slice(index + 1)
        ]
      };

    case 'SET_OFF_TIMER':
    case 'UPDATE_OFF_TIMER':
      index = state.light.findIndex((f) => f._id === action.id);
      return {
        ...state,
        light: [
          ...state.light.slice(0, index),
          {
            ...state.light[index],
            seg_startTime: action.startTime,
            seg_endTime: action.endTime,
            seg_routineEnable: action.status
          },
          ...state.light.slice(index + 1)
        ],
        routineLoading: false
      };

    case 'SET_DIM_HIGH_TIMER':
    case 'UPDATE_DIM_HIGH_TIMER':
      index = state.light.findIndex((f) => f._id === action.id);
      return {
        ...state,
        light: [
          ...state.light.slice(0, index),
          {
            ...state.light[index],
            dim_high_strtime: action.startTime,
            dim_high_endtime: action.endTime,
            dim_high_routineEnable: action.status
          },
          ...state.light.slice(index + 1)
        ],
        routineLoading: false
      };

    case 'SET_DIM_MEDIUM_TIMER':
    case 'UPDATE_DIM_MEDIUM_TIMER':
      index = state.light.findIndex((f) => f._id === action.id);
      return {
        ...state,
        light: [
          ...state.light.slice(0, index),
          {
            ...state.light[index],
            dim_medium_strtime: action.startTime,
            dim_medium_endtime: action.endTime,
            dim_medium_routineEnable: action.status
          },
          ...state.light.slice(index + 1)
        ],
        routineLoading: false
      };

    case 'SET_DIM_LOW_TIMER':
    case 'UPDATE_DIM_LOW_TIMER':
      index = state.light.findIndex((f) => f._id === action.id);
      return {
        ...state,
        light: [
          ...state.light.slice(0, index),
          {
            ...state.light[index],
            dim_low_strtime: action.startTime,
            dim_low_endtime: action.endTime,
            dim_low_routineEnable: action.status
          },
          ...state.light.slice(index + 1)
        ],
        routineLoading: false
      };

    case 'SEG_START_TIME':
      index = state.light.findIndex((f) => f._id === action.id);
      return {
        ...state,
        light: [
          ...state.light.slice(0, index),
          {
            ...state.light[index],
            seg_startTime: action.startTime
          },
          ...state.light.slice(index + 1)
        ]
      };

    case 'SEG_END_TIME':
      index = state.light.findIndex((f) => f._id === action.id);
      return {
        ...state,
        light: [
          ...state.light.slice(0, index),
          {
            ...state.light[index],
            seg_endTime: action.endTime
          },
          ...state.light.slice(index + 1)
        ]
      };

    case 'DIM_HIGH_START_TIME':
      index = state.light.findIndex((f) => f._id === action.id);
      return {
        ...state,
        light: [
          ...state.light.slice(0, index),
          {
            ...state.light[index],
            dim_high_strtime: action.startTime
          },
          ...state.light.slice(index + 1)
        ]
      };

    case 'DIM_HIGH_END_TIME':
      index = state.light.findIndex((f) => f._id === action.id);
      return {
        ...state,
        light: [
          ...state.light.slice(0, index),
          {
            ...state.light[index],
            dim_high_endtime: action.endTime
          },
          ...state.light.slice(index + 1)
        ]
      };

    case 'DIM_MEDIUM_START_TIME':
      index = state.light.findIndex((f) => f._id === action.id);
      return {
        ...state,
        light: [
          ...state.light.slice(0, index),
          {
            ...state.light[index],
            dim_medium_strtime: action.startTime
          },
          ...state.light.slice(index + 1)
        ]
      };

    case 'DIM_MEDIUM_END_TIME':
      index = state.light.findIndex((f) => f._id === action.id);
      return {
        ...state,
        light: [
          ...state.light.slice(0, index),
          {
            ...state.light[index],
            dim_medium_endtime: action.endTime
          },
          ...state.light.slice(index + 1)
        ]
      };

    case 'DIM_LOW_START_TIME':
      index = state.light.findIndex((f) => f._id === action.id);
      return {
        ...state,
        light: [
          ...state.light.slice(0, index),
          {
            ...state.light[index],
            dim_low_strtime: action.startTime
          },
          ...state.light.slice(index + 1)
        ]
      };

    case 'DIM_LOW_END_TIME':
      index = state.light.findIndex((f) => f._id === action.id);
      return {
        ...state,
        light: [
          ...state.light.slice(0, index),
          {
            ...state.light[index],
            dim_low_endtime: action.endTime
          },
          ...state.light.slice(index + 1)
        ]
      };

    
    case 'UPDATE_SCHEDULING':
    case 'UPDATE_SCHEDULE':
      index = state.light.findIndex((f) => f._id === action.id);
      return {
        ...state,
        light: [
          ...state.light.slice(0, index),
          {
            ...state.light[index],
            allRoutines: action.status
          },
          ...state.light.slice(index + 1)
        ]
      };

    case 'UPDATE_DIM_ROUTINE':
      index = state.light.findIndex((f) => f._id === action.id);
      return {
        ...state,
        light: [
          ...state.light.slice(0, index),
          {
            ...state.light[index],
            routine_dimLevel: action.payload
          },
          ...state.light.slice(index + 1)
        ]
      };
    
    case 'LIGHT_TABLE_DATA':
      index = state.light.findIndex((f) => f._id === action.st_id);
      return {
        ...state,
        light: [
          ...state.light.slice(0, index),
          {
            ...state.light[index],
            logs: {
              ...state.light[index].logs,
              columns: action.payload.columns,
              data: action.payload.data,
              title: action.payload.title,
              isLoading: false
            }
          },
          ...state.light.slice(index + 1)
        ]
      };


    case 'LIGHT_CHART_DATA':
      index = state.light.findIndex((f) => f._id === action.st_id);
      return {
        ...state,
        light: [
          ...state.light.slice(0, index),
          {
            ...state.light[index],
            charts: {
              ...state.light[index].charts,
              data: action.payload.data,
              labels: action.payload.labels,
              isLoading: false
            }
          },
          ...state.light.slice(index + 1)
        ],
        chartLoading: false
      };

    case 'LIGHT_CHART_LOADING':
      index = state.light.findIndex((f) => f._id === action.st_id);
        
      return {
        ...state,
        light: [
          ...state.light.slice(0, index),
          {
            ...state.light[index],
            charts: {
              ...state.light[index].charts,
              data: [],
              labels: [],
              isLoading: true
            }
          },
          ...state.light.slice(index + 1)
        ]
      };
      
    case 'GET_LIGHT_ALERTS':
      return {
        ...state,
        alertColumns: action.payload.columns,
        alertData: action.payload.data,
        alertTitle: action.payload.title,
        alertLoading: false
      };

    case 'LIGHT_TABLE_LOADING':
      index = state.light.findIndex((f) => f._id === action.st_id);
      return {
        ...state,
        light: [
          ...state.light.slice(0, index),
          {
            ...state.light[index],
            logs: {
              ...state.light[index].logs,
              columns: [],
              data: [],
              title: [],
              isLoading: true
            }
          },
          ...state.light.slice(index + 1)
        ]
      };


    case 'LIGHT_ALERTS_LOADING':
      return {
        ...state,
        alertLoading: true
      };

    case 'SET_ROUTINE_LOADING':
      return {
        ...state,
        routineLoading: true
      };
      
    default:
      return state;
  }
};
  
export default lightReducer;
  