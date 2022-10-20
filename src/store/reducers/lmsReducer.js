/* eslint-disable linebreak-style */
const initState = {
  lms: [],
  isLoading: true,
  chartLoading: true,
  generalLoading: true,
  macroChartData: [],
  macroChartLabels: [],
  macroChartLoading: false,
  alertColumns: [],
  alertData: [],
  alertTitle: '',
  alertLoading: true
};

const lmsReducer = (state = initState, action) => {
  let index = null;
  switch (action.type) {
    case 'GET_LMS':
      return {
        ...state,
        lms: action.payload,
        generalLoading: false
      };
    case 'UPDATE_LMS_PH':
      index = state.lms.findIndex((f) => f._id === action.id);
      if (index !== -1) {
        return {
          ...state,
          lms: [
            ...state.lms.slice(0, index),
            {
              ...state.lms[index],
              ph: action.payload
            },
            ...state.lms.slice(index + 1)
          ]
        };
      } else {
        return {
          ...state
        };
      }
    case 'UPDATE_LMS_TDS':
      index = state.lms.findIndex((f) => f._id === action.id);
      if (index !== -1) {
        return {
          ...state,
          lms: [
            ...state.lms.slice(0, index),
            {
              ...state.lms[index],
              tds: action.payload
            },
            ...state.lms.slice(index + 1)
          ]
        };
      } else {
        return {
          ...state
        };
      }
    case 'UPDATE_LMS_BATTERY':
      index = state.lms.findIndex((f) => f._id === action.id);
      if (index !== -1) {
        return {
          ...state,
          lms: [
            ...state.lms.slice(0, index),
            {
              ...state.lms[index],
              battery: action.payload
            },
            ...state.lms.slice(index + 1)
          ]
        };
      } else {
        return {
          ...state
        };
      }
    case 'UPDATE_LMS_WATERFLOW':
      index = state.lms.findIndex((f) => f._id === action.id);
      if (index !== -1) {
        return {
          ...state,
          lms: [
            ...state.lms.slice(0, index),
            {
              ...state.lms[index],
              waterflow: action.payload
            },
            ...state.lms.slice(index + 1)
          ]
        };
      } else {
        return {
          ...state
        };
      }
    case 'UPDATE_LMS_O2':
      index = state.lms.findIndex((f) => f._id === action.id);
      if (index !== -1) {
        return {
          ...state,
          lms: [
            ...state.lms.slice(0, index),
            {
              ...state.lms[index],
              dissolvedOxygen: action.payload
            },
            ...state.lms.slice(index + 1)
          ]
        };
      } else {
        return {
          ...state
        };
      }
    case 'UPDATE_LMS_AERATOR':
      index = state.lms.findIndex((f) => f._id === action.id);
      if (index !== -1) {
        return {
          ...state,
          lms: [
            ...state.lms.slice(0, index),
            {
              ...state.lms[index],
              aerator: action.payload
            },
            ...state.lms.slice(index + 1)
          ]
        };
      } else {
        return {
          ...state
        };
      }
    case 'UPDATE_LMS_MOTOR':
      index = state.lms.findIndex((f) => f._id === action.id);
      if (index !== -1) {
        return {
          ...state,
          lms: [
            ...state.lms.slice(0, index),
            {
              ...state.lms[index],
              motor: action.payload
            },
            ...state.lms.slice(index + 1)
          ]
        };
      } else {
        return {
          ...state
        };
      }
    case 'UPDATE_LMS_TEMPERATURE':
      index = state.lms.findIndex((f) => f._id === action.id);
      if (index !== -1) {
        return {
          ...state,
          lms: [
            ...state.lms.slice(0, index),
            {
              ...state.lms[index],
              temperature: action.payload
            },
            ...state.lms.slice(index + 1)
          ]
        };
      } else {
        return {
          ...state
        };
      }
    case 'UPDATE_LMS_UT':
      index = state.lms.findIndex((f) => f._id === action.id);
      if (index !== -1) {
        return {
          ...state,
          lms: [
            ...state.lms.slice(0, index),
            {
              ...state.lms[index],
              upperThreshold: action.payload
            },
            ...state.lms.slice(index + 1)
          ]
        };
      } else {
        return {
          ...state
        };
      }
    case 'UPDATE_LMS_LT':
      index = state.lms.findIndex((f) => f._id === action.id);
      if (index !== -1) {
        return {
          ...state,
          lms: [
            ...state.lms.slice(0, index),
            {
              ...state.lms[index],
              threshold: action.payload
            },
            ...state.lms.slice(index + 1)
          ]
        };
      } else {
        return {
          ...state
        };
      }
    case 'SET_LMS_THRESHOLD':
      index = state.lms.findIndex((f) => f._id === action.id);
      return {
        ...state,
        lms: [
          ...state.lms.slice(0, index),
          {
            ...state.lms[index],
            threshold: action.threshold
          },
          ...state.lms.slice(index + 1)
        ]
      };
    case 'SET_LMS_UPPERTHRESHOLD':
      index = state.lms.findIndex((f) => f._id === action.id);
      return {
        ...state,
        lms: [
          ...state.lms.slice(0, index),
          {
            ...state.lms[index],
            upperThreshold: action.threshold
          },
          ...state.lms.slice(index + 1)
        ]
      };
    case 'SET_LMS_TANK':
      index = state.lms.findIndex((f) => f._id === action.id);
      return {
        ...state,
        lms: [
          ...state.lms.slice(0, index),
          {
            ...state.lms[index],
            tank: action.tank
          },
          ...state.lms.slice(index + 1)
        ]
      };
    case 'LMS_TABLE_DATA':
      index = state.lms.findIndex((f) => f._id === action.lms_id);
      return {
        ...state,
        lms: [
          ...state.lms.slice(0, index),
          {
            ...state.lms[index],
            logs: {
              ...state.lms[index].logs,
              columns: action.payload.columns,
              data: action.payload.data,
              title: action.payload.title,
              isLoading: false
            }
          },
          ...state.lms.slice(index + 1)
        ],
        isLoading: false
      };
    case 'LMS_CHART_DATA':
      index = state.lms.findIndex((f) => f._id === action.lms_id);
      return {
        ...state,
        lms: [
          ...state.lms.slice(0, index),
          {
            ...state.lms[index],
            charts: {
              ...state.lms[index].charts,
              data: action.payload.data,
              labels: action.payload.labels,
              isLoading: false
            }
          },
          ...state.lms.slice(index + 1)
        ]
      };
    case 'LMS_MACRO_CHART_DATA':
      return {
        ...state,
        macroChartData: action.payload.data,
        macroChartLabels: action.payload.labels,
        macroChartLoading: false
      };
    case 'GET_LMS_ALERTS':
      return {
        ...state,
        alertColumns: action.payload.columns,
        alertData: action.payload.data,
        alertTitle: action.payload.title,
        alertLoading: false
      };
    case 'LMS_TABLE_LOADING':
      index = state.lms.findIndex((f) => f._id === action.lms_id);
      return {
        ...state,
        lms: [
          ...state.lms.slice(0, index),
          {
            ...state.lms[index],
            logs: {
              ...state.lms[index].logs,
              columns: [],
              data: [],
              title: [],
              isLoading: true
            }
          },
          ...state.lms.slice(index + 1)
        ]
      };
    case 'LMS_CHART_LOADING':
      index = state.lms.findIndex((f) => f._id === action.lms_id);
      return {
        ...state,
        lms: [
          ...state.lms.slice(0, index),
          {
            ...state.lms[index],
            charts: {
              ...state.lms[index].charts,
              data: [],
              labels: [],
              isLoading: true
            }
          },
          ...state.lms.slice(index + 1)
        ]
      };
    case 'LMS_MACRO_CHART_LOADING':
      return {
        ...state,
        macroChartLoading: true
      };
    case 'LMS_ALERTS_LOADING':
      return {
        ...state,
        alertLoading: true
      };
    case 'LMS_GENERAL_LOADING':
      return {
        ...state,
        generalLoading: true
      };
    case 'CLEAR_AND_LOAD_LMS':
      return {
        ...state,
        lms: [],
        isLoading: true,
        chartLoading: true,
        generalLoading: true,
        macroChartData: [],
        macroChartLabels: [],
        macroChartLoading: true,
        alertColumns: [],
        alertData: [],
        alertTitle: '',
        alertLoading: true
      };
    default:
      return state;
  }
};

export default lmsReducer;
