const initState = {
  chain: [],
  overviewCenter: {},
  macroChartData: [],
  macroChartLabels: [],
  macroChartLoading: false,
  alertColumns: [],
  alertData: [],
  alertTitle: '',
  alertLoading: true,
  loading: true
};

const coldChainReducer = (state = initState, action) => {

  let index = null;
  switch (action.type) {
    case 'GET_COLDCHAIN':
      return {
        ...state,
        overviewCenter: action.latlng,
        chain: action.payload,
        loading: false
      };
    case 'UPDATE_COLDCHAIN_STATUS':
      index = state.chain.findIndex(
        (temp) => temp._id === action.payload.coldChain_id
      );
      if (index !== -1) {
        return {
          ...state,
          chain: [
            ...state.chain.slice(0, index),
            {
              ...state.chain[index],
              status: action.payload.status
            },
            ...state.chain.slice(index + 1)
          ]
        };
      } else {
        return {
          ...state
        };
      }
    case 'UPDATE_COLDCHAIN_BATTERY':
      index = state.chain.findIndex(
        (temp) => temp._id === action.payload.coldChain_id
      );
      if (index !== -1) {
        return {
          ...state,
          chain: [
            ...state.chain.slice(0, index),
            {
              ...state.chain[index],
              battery: action.payload.battery
            },
            ...state.chain.slice(index + 1)
          ]
        };
      } else {
        return {
          ...state
        };
      }
    case 'UPDATE_COLDCHAIN_LATLONG':
      index = state.chain.findIndex(
        (temp) => temp._id === action.payload.coldChain_id
      );
      if (index !== -1) {
        return {
          ...state,
          chain: [
            ...state.chain.slice(0, index),
            {
              ...state.chain[index],
              latitude: action.payload.latitude,
              longitude: action.payload.longitude
            },
            ...state.chain.slice(index + 1)
          ]
        };
      } else {
        return {
          ...state
        };
      }
    case 'UPDATE_COLDCHAIN_TEMPERATURE':
      index = state.chain.findIndex(
        (temp) => temp._id === action.payload.coldChain_id
      );
      if (index !== -1) {
        return {
          ...state,
          chain: [
            ...state.chain.slice(0, index),
            {
              ...state.chain[index],
              temperature: action.payload.temperature
            },
            ...state.chain.slice(index + 1)
          ]
        };
      } else {
        return {
          ...state
        };
      }
    case 'UPDATE_COLDCHAIN_UT':
      index = state.chain.findIndex(
        (temp) => temp._id === action.payload.coldChain_id
      );
      if (index !== -1) {
        return {
          ...state,
          chain: [
            ...state.chain.slice(0, index),
            {
              ...state.chain[index],
              upperThreshold: action.payload.ut
            },
            ...state.chain.slice(index + 1)
          ]
        };
      } else {
        return {
          ...state
        };
      }
    case 'UPDATE_COLDCHAIN_LT':
      index = state.chain.findIndex(
        (temp) => temp._id === action.payload.coldChain_id
      );
      if (index !== -1) {
        return {
          ...state,
          chain: [
            ...state.chain.slice(0, index),
            {
              ...state.chain[index],
              lowerThreshold: action.payload.lt
            },
            ...state.chain.slice(index + 1)
          ]
        };
      } else {
        return {
          ...state
        };
      }
    case 'UPDATE_COLDCHAIN_RADIUS':
      index = state.chain.findIndex(
        (temp) => temp._id === action.payload.coldChain_id
      );
      if (index !== -1) {
        return {
          ...state,
          chain: [
            ...state.chain.slice(0, index),
            {
              ...state.chain[index],
              geofenceCenter: {
                ...state.chain[index].geofenceCenter,
                radius: action.payload.radius
              }
            },
            ...state.chain.slice(index + 1)
          ]
        };
      } else {
        return {
          ...state
        };
      }
    case 'UPDATE_COLDCHAIN_CENTER':
      index = state.chain.findIndex(
        (temp) => temp._id === action.payload.coldChain_id
      );
      if (index !== -1) {
        return {
          ...state,
          chain: [
            ...state.chain.slice(0, index),
            {
              ...state.chain[index],
              geofenceCenter: {
                ...state.chain[index].geofenceCenter,
                latitude: action.payload.latitude,
                longitude: action.payload.longitude
              }
            },
            ...state.chain.slice(index + 1)
          ]
        };
      } else {
        return {
          ...state
        };
      }
    case 'SET_COLDCHAIN_THRESHOLD':
      index = state.chain.findIndex((temp) => temp._id === action.id);
      return {
        ...state,
        chain: [
          ...state.chain.slice(0, index),
          {
            ...state.chain[index],
            upperThreshold: action.ut,
            lowerThreshold: action.lt
          },
          ...state.chain.slice(index + 1)
        ]
      };
    case 'SET_COLDCHAIN_RADIUS':
      index = state.chain.findIndex((temp) => temp._id === action.id);
      return {
        ...state,
        chain: [
          ...state.chain.slice(0, index),
          {
            ...state.chain[index],
            geofenceCenter: {
              ...state.chain[index].geofenceCenter,
              radius: action.radius
            }
          },
          ...state.chain.slice(index + 1)
        ]
      };
    case 'SET_COLDCHAIN_CENTER':
      index = state.chain.findIndex((temp) => temp._id === action.id);
      return {
        ...state,
        chain: [
          ...state.chain.slice(0, index),
          {
            ...state.chain[index],
            geofenceCenter: {
              ...state.chain[index].geofenceCenter,
              latitude: state.chain[index].latitude,
              longitude: state.chain[index].longitude
            }
          },
          ...state.chain.slice(index + 1)
        ]
      };
    case 'COLDCHAIN_TABLE_DATA':
      index = state.chain.findIndex((f) => f._id === action.chain_id);
      return {
        ...state,
        chain: [
          ...state.chain.slice(0, index),
          {
            ...state.chain[index],
            logs: {
              ...state.chain[index].logs,
              columns: action.payload.columns,
              data: action.payload.data,
              title: action.payload.title,
              isLoading: false
            }
          },
          ...state.chain.slice(index + 1)
        ]
      };
    case 'COLDCHAIN_CHART_DATA':
      index = state.chain.findIndex((f) => f._id === action.chain_id);
      return {
        ...state,
        chain: [
          ...state.chain.slice(0, index),
          {
            ...state.chain[index],
            charts: {
              ...state.chain[index].charts,
              data: action.payload.data,
              labels: action.payload.labels,
              isLoading: false
            }
          },
          ...state.chain.slice(index + 1)
        ]
      };
    case 'COLDCHAIN_TABLE_LOADING':
      index = state.chain.findIndex((f) => f._id === action.chain_id);
      return {
        ...state,
        chain: [
          ...state.chain.slice(0, index),
          {
            ...state.chain[index],
            logs: {
              ...state.chain[index].logs,
              columns: [],
              data: [],
              title: [],
              isLoading: true
            }
          },
          ...state.chain.slice(index + 1)
        ]
      };
    case 'COLDCHAIN_CHART_LOADING':
      index = state.chain.findIndex((f) => f._id === action.chain_id);
      return {
        ...state,
        chain: [
          ...state.chain.slice(0, index),
          {
            ...state.chain[index],
            charts: {
              ...state.chain[index].charts,
              data: [],
              labels: [],
              isLoading: true
            }
          },
          ...state.chain.slice(index + 1)
        ]
      };
    case 'GET_COLDCHAIN_ALERTS':
      return {
        ...state,
        alertColumns: action.payload.columns,
        alertData: action.payload.data,
        alertTitle: action.payload.title,
        alertLoading: false
      };
    case 'COLDCHAIN_ALERTS_LOADING':
      return {
        ...state,
        alertLoading: true
      };
    case 'COLDCHAIN_LOADING':
      return {
        ...state,
        loading: true
      };
    case 'CLEAR_AND_LOAD_CHAIN':
      return {
        ...state,
        chain: [],
        overviewCenter: {},
        macroChartData: [],
        macroChartLabels: [],
        macroChartLoading: true,
        alertColumns: [],
        alertData: [],
        alertTitle: '',
        alertLoading: true,
        loading: true
      };
    default:
      return state;
  }
};

export default coldChainReducer;
