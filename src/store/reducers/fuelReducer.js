/* eslint-disable linebreak-style */
const initState = {
  fuel: [],
  chartLoading: true,
  generalLoading: true,
  gen_loading: true,
  maintananceLoading: true,
  maintananceTableLoading: true,
  macroChartData: [],
  macroChartLabels: [],
  macroChartLoading: false,
  alertColumns: [],
  alertData: [],
  alertTitle: '',
  alertLoading: true
};

const fuelReducer = (state = initState, action) => {
  let index = null;
  switch (action.type) {
    case 'GET_FUEL':
      return {
        ...state,
        fuel: action.payload,
        generalLoading: false
      };
    case 'GET_FUEL_MAINTANANCE_DATA':
      index = state.fuel.findIndex((f) => f._id === action.fuel_id);
      return {
        ...state,
        fuel: [
          ...state.fuel.slice(0, index),
          {
            ...state.fuel[index],
            maintanance: {
              ...state.fuel[index].maintanance,
              totalRunningTime: action.payload.overallRunningTime,
              runningTime: action.payload.runningTime,
              oilRunningTime: action.payload.oilRunningTime
            }
          },
          ...state.fuel.slice(index + 1)
        ],
        maintananceLoading: false
      };

      case 'GEN_MODE':
        index = state.fuel.findIndex((f) => f._id === action.payload.fuel_id);
        // console.log(index,'+++++++++++',action.payload.gen_mode)
        return {
          ...state,
          fuel: [
            ...state.fuel.slice(0, index),
            {
              ...state.fuel[index],
              gen_mode: action.payload.gen_mode
            },
            ...state.fuel.slice(index + 1)
          ]
        };
  
    case 'UPDATE_FUEL_FILLLEVEL':
      index = state.fuel.findIndex((f) => f._id === action.payload.fuel_id);
      return {
        ...state,
        fuel: [
          ...state.fuel.slice(0, index),
          {
            ...state.fuel[index],
            fillLevel: action.payload.fillLevel
          },
          ...state.fuel.slice(index + 1)
        ]
      };
    case 'UPDATE_FUEL_DOORSTATUS':
      index = state.fuel.findIndex((f) => f._id === action.payload.fuel_id);
      return {
        ...state,
        fuel: [
          ...state.fuel.slice(0, index),
          {
            ...state.fuel[index],
            door_status: action.payload.door_status
          },
          ...state.fuel.slice(index + 1)
        ]
      };
    case 'UPDATE_FUEL_VOLTAGE':
      index = state.fuel.findIndex((f) => f._id === action.payload.fuel_id);
      return {
        ...state,
        fuel: [
          ...state.fuel.slice(0, index),
          {
            ...state.fuel[index],
            voltage: action.payload.voltage
          },
          ...state.fuel.slice(index + 1)
        ]
      };
    case 'UPDATE_FUEL_CURRENT':
      index = state.fuel.findIndex((f) => f._id === action.payload.fuel_id);
      return {
        ...state,
        fuel: [
          ...state.fuel.slice(0, index),
          {
            ...state.fuel[index],
            current: action.payload.current
          },
          ...state.fuel.slice(index + 1)
        ]
      };
    case 'UPDATE_FUEL_POWER':
      index = state.fuel.findIndex((f) => f._id === action.payload.fuel_id);
      return {
        ...state,
        fuel: [
          ...state.fuel.slice(0, index),
          {
            ...state.fuel[index],
            power: action.payload.power
          },
          ...state.fuel.slice(index + 1)
        ]
      };
    case 'UPDATE_FUEL_TEMPERATURE':
      index = state.fuel.findIndex((f) => f._id === action.payload.fuel_id);
      return {
        ...state,
        fuel: [
          ...state.fuel.slice(0, index),
          {
            ...state.fuel[index],
            temperature: action.payload.temperature
          },
          ...state.fuel.slice(index + 1)
        ]
      };
    case 'UPDATE_FUEL_GENSTATUS':
      index = state.fuel.findIndex((f) => f._id === action.payload.fuel_id);
      return {
        ...state,
        fuel: [
          ...state.fuel.slice(0, index),
          {
            ...state.fuel[index],
            gen_status: action.payload.gen_status,
            gen_loading: false
          },
          ...state.fuel.slice(index + 1)
        ]
      };

      case 'GEN_LOADING':
        index = state.fuel.findIndex((f) => f._id === action.payload.fuel_id);
        return {
          ...state,
        fuel: [
          ...state.fuel.slice(0, index),
          {
            ...state.fuel[index],
            gen_loading: false
          },
          ...state.fuel.slice(index + 1)
        ]
      };

      case 'GEN_CONTROL':
        console.log('here', action.payload);
        index = state.fuel.findIndex((f) => f._id === action.id);
        console.log('reducer index', index);
        return {
          ...state,
          fuel: [
            ...state.fuel.slice(0, index),
            {
              ...state.fuel[index],
              gen_loading: action.payload.loading
            },
            ...state.fuel.slice(index + 1)
          ]
        };

        case 'UPDATE_SYS_STATUS':
          index = state.fuel.findIndex((f) => f._id === action.payload.fuel_id);
          return {
            ...state,
            fuel: [
              ...state.fuel.slice(0, index),
              {
                ...state.fuel[index],
                sysOffline: action.payload.sysOffline
              },
              ...state.fuel.slice(index + 1)
            ]
          };

    case 'UPDATE_FUEL_LITERS':
      index = state.fuel.findIndex((f) => f._id === action.payload.fuel_id);
      return {
        ...state,
        fuel: [
          ...state.fuel.slice(0, index),
          {
            ...state.fuel[index],
            literThreshold: action.payload.liters
          },
          ...state.fuel.slice(index + 1)
        ]
      };
    case 'UPDATE_FUEL_MAINTANANCE':
      index = state.fuel.findIndex((f) => f._id === action.payload.fuel_id);
      return {
        ...state,
        fuel: [
          ...state.fuel.slice(0, index),
          {
            ...state.fuel[index],
            maintananceThreshold: action.payload.maintanance
          },
          ...state.fuel.slice(index + 1)
        ]
      };
    case 'UPDATE_FUEL_OIL':
      index = state.fuel.findIndex((f) => f._id === action.payload.fuel_id);
      return {
        ...state,
        fuel: [
          ...state.fuel.slice(0, index),
          {
            ...state.fuel[index],
            oilThreshold: action.payload.oil
          },
          ...state.fuel.slice(index + 1)
        ]
      };
    case 'SET_FUEL_THRESHOLD':
      index = state.fuel.findIndex((f) => f._id === action.id);
      return {
        ...state,
        fuel: [
          ...state.fuel.slice(0, index),
          {
            ...state.fuel[index],
            literThreshold: action.payload
          },
          ...state.fuel.slice(index + 1)
        ]
      };
    case 'SET_FUEL_MAINTANANCE_THRESHOLD':
      index = state.fuel.findIndex((f) => f._id === action.id);
      return {
        ...state,
        fuel: [
          ...state.fuel.slice(0, index),
          {
            ...state.fuel[index],
            maintananceThreshold: action.payload
          },
          ...state.fuel.slice(index + 1)
        ]
      };
    case 'SET_FUEL_OIL_THRESHOLD':
      index = state.fuel.findIndex((f) => f._id === action.id);
      return {
        ...state,
        fuel: [
          ...state.fuel.slice(0, index),
          {
            ...state.fuel[index],
            oilThreshold: action.payload
          },
          ...state.fuel.slice(index + 1)
        ]
      };
    case 'FUEL_TABLE_DATA':
      index = state.fuel.findIndex((f) => f._id === action.fuel_id);
      return {
        ...state,
        fuel: [
          ...state.fuel.slice(0, index),
          {
            ...state.fuel[index],
            logs: {
              ...state.fuel[index].logs,
              columns: action.payload.columns,
              data: action.payload.data,
              title: action.payload.title,
              isLoading: false
            }
          },
          ...state.fuel.slice(index + 1)
        ]
      };
    case 'FUEL_CHART_DATA':
      index = state.fuel.findIndex((f) => f._id === action.fuel_id);
      return {
        ...state,
        fuel: [
          ...state.fuel.slice(0, index),
          {
            ...state.fuel[index],
            charts: {
              ...state.fuel[index].charts,
              data: action.payload.data,
              labels: action.payload.labels,
              isLoading: false
            }
          },
          ...state.fuel.slice(index + 1)
        ],
        chartLoading: false
      };
    case 'FUEL_MACRO_CHART_DATA':
      return {
        ...state,
        macroChartData: action.payload.data,
        macroChartLabels: action.payload.labels,
        macroChartLoading: false
      };
    case 'FUEL_MAINTANANCE_TABLE_DATA':
      index = state.fuel.findIndex((f) => f._id === action.fuel_id);
      return {
        ...state,
        fuel: [
          ...state.fuel.slice(0, index),
          {
            ...state.fuel[index],
            maintanance: {
              ...state.fuel[index].maintanance,
              logs: {
                ...state.fuel[index].maintanance.logs,
                columns: action.payload.columns,
                data: action.payload.data,
                title: action.payload.title
              }
            }
          },
          ...state.fuel.slice(index + 1)
        ],
        maintananceTableLoading: false
      };
    case 'FUEL_MAINTANANCE':
      index = state.fuel.findIndex((f) => f._id === action.fuel_id);
      return {
        ...state,
        fuel: [
          ...state.fuel.slice(0, index),
          {
            ...state.fuel[index],
            maintanance: {
              ...state.fuel[index].maintanance,
              runningTime: '0'
            }
          },
          ...state.fuel.slice(index + 1)
        ],
        maintananceTableLoading: false
      };
    case 'FUEL_OIL':
      index = state.fuel.findIndex((f) => f._id === action.fuel_id);
      return {
        ...state,
        fuel: [
          ...state.fuel.slice(0, index),
          {
            ...state.fuel[index],
            maintanance: {
              ...state.fuel[index].maintanance,
              oilRunningTime: '0'
            }
          },
          ...state.fuel.slice(index + 1)
        ],
        maintananceTableLoading: false
      };
    case 'GET_FUEL_ALERTS':
      return {
        ...state,
        alertColumns: action.payload.columns,
        alertData: action.payload.data,
        alertTitle: action.payload.title,
        alertLoading: false
      };
    case 'FUEL_TABLE_LOADING':
      index = state.fuel.findIndex((f) => f._id === action.fuel_id);
      return {
        ...state,
        fuel: [
          ...state.fuel.slice(0, index),
          {
            ...state.fuel[index],
            logs: {
              ...state.fuel[index].logs,
              columns: [],
              data: [],
              title: [],
              isLoading: true
            }
          },
          ...state.fuel.slice(index + 1)
        ]
      };
    case 'FUEL_MAINTANANCE_TABLE_LOADING':
      index = state.fuel.findIndex((f) => f._id === action.fuel_id);
      return {
        ...state,
        fuel: [
          ...state.fuel.slice(0, index),
          {
            ...state.fuel[index],
            maintanance: {
              ...state.fuel[index].maintanance,
              logs: {
                ...state.fuel[index].maintanance.logs,
                columns: [],
                data: [],
                title: []
              }
            }
          },
          ...state.fuel.slice(index + 1)
        ],
        maintananceTableLoading: true
      };
    case 'FUEL_CHART_LOADING':
      index = state.fuel.findIndex((f) => f._id === action.fuel_id);
      
      return {
        ...state,
        fuel: [
          ...state.fuel.slice(0, index),
          {
            ...state.fuel[index],
            charts: {
              ...state.fuel[index].charts,
              data: [],
              labels: [],
              isLoading: true
            }
          },
          ...state.fuel.slice(index + 1)
        ]
      };
    case 'FUEL_GENERAL_LOADING':
      return {
        ...state,
        generalLoading: true
      };
    case 'FUEL_MAINTANANCE_LOADING':
      return {
        ...state,
        maintananceLoading: true
      };
    case 'FUEL_MACRO_CHART_LOADING':
      return {
        ...state,
        macroChartLoading: true
      };
    case 'FUEL_ALERTS_LOADING':
      return {
        ...state,
        alertLoading: true
      };
    default:
      return state;
  }
};

export default fuelReducer;
