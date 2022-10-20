const initState = {
    humidity: [],
    isLoading: true,
    macroChartData: [],
    macroChartLabels: [],
    macroChartLoading: false,
    alertColumns: [],
    alertData: [],
    alertTitle: '',
    alertLoading: true
  };
  
  const HumidityReducer = (state = initState, action) => {
    let index = null;
    switch (action.type) {
      case 'GET_HUMIDITY':
        return {
          ...state,
          humidity: action.payload,
          isLoading: false
        };
      case 'UPDATE_HUMIDITY_TEMP':
        index = state.humidity.findIndex(
          (humidity) => humidity._id === action.payload.humidity_id
        );
        return {
          ...state,
          humidity: [
            ...state.humidity.slice(0, index),
            {
              ...state.humidity[index],
              currentTemp: action.payload.temperature
            },
            ...state.humidity.slice(index + 1)
          ]
        };
      case 'UPDATE_HUMIDITY_TEMP_UT':
        index = state.humidity.findIndex(
          (humidity) => humidity._id === action.id
        );
        return {
          ...state,
          humidity: [
            ...state.humidity.slice(0, index),
            {
              ...state.humidity[index],
              upperThreshold: action.payload
            },
            ...state.humidity.slice(index + 1)
          ]
        };
      case 'UPDATE_HUMIDITY_TEMP_LT':
        index = state.humidity.findIndex(
          (humidity) => humidity._id === action.id
        );
        return {
          ...state,
          humidity: [
            ...state.humidity.slice(0, index),
            {
              ...state.humidity[index],
              threshold: action.payload
            },
            ...state.humidity.slice(index + 1)
          ]
        };
      case 'UPDATE_HUMIDITY':
        index = state.humidity.findIndex(
          (humidity) => humidity._id === action.payload.humidity_id
        );
        return {
          ...state,
          humidity: [
            ...state.humidity.slice(0, index),
            {
              ...state.humidity[index],
              currentHumidity: action.payload.humidity
            },
            ...state.humidity.slice(index + 1)
          ]
        };
      case 'UPDATE_HUMIDITY_UT':
        index = state.humidity.findIndex(
          (humidity) => humidity._id === action.id
        );
        return {
          ...state,
          humidity: [
            ...state.humidity.slice(0, index),
            {
              ...state.humidity[index],
              humidity_upperThreshold: action.payload
            },
            ...state.humidity.slice(index + 1)
          ]
        };
      case 'UPDATE_HUMIDITY_LT':
        index = state.humidity.findIndex(
          (humidity) => humidity._id === action.id
        );
        return {
          ...state,
          humidity: [
            ...state.humidity.slice(0, index),
            {
              ...state.humidity[index],
              humidity_threshold: action.payload
            },
            ...state.humidity.slice(index + 1)
          ]
        };
      case 'SET_THRESHOLD':
        index = state.humidity.findIndex(
          (humidity) => humidity._id === action.payload.humidity_id
        );
        return {
          ...state,
          humidity: [
            ...state.humidity.slice(0, index),
            {
              ...state.humidity[index],
              threshold: action.payload.threshold
            },
            ...state.humidity.slice(index + 1)
          ],
          count: 0
        };
      case 'SET_UPPER_THRESHOLD':
        index = state.humidity.findIndex(
          (humidity) => humidity._id === action.payload.humidity_id
        );
        return {
          ...state,
          humidity: [
            ...state.humidity.slice(0, index),
            {
              ...state.humidity[index],
              upperThreshold: action.payload.threshold
            },
            ...state.humidity.slice(index + 1)
          ],
          count: 0
        };
      case 'SET_HTHRESHOLD':
          index = state.humidity.findIndex(
            (humidity) => humidity._id === action.payload.humidity_id
          );
          return {
            ...state,
            humidity: [
              ...state.humidity.slice(0, index),
              {
                ...state.humidity[index],
                humidity_threshold: action.payload.threshold
              },
              ...state.humidity.slice(index + 1)
            ],
            count: 0
          };
      case 'SET_HUPPER_THRESHOLD':
          index = state.humidity.findIndex(
            (humidity) => humidity._id === action.payload.humidity_id
          );
          return {
            ...state,
            humidity: [
              ...state.humidity.slice(0, index),
              {
                ...state.humidity[index],
                humidity_upperThreshold: action.payload.threshold
              },
              ...state.humidity.slice(index + 1)
            ],
            count: 0
          };  
      case 'HUMIDITY_MACRO_CHART_DATA':
        return {
          ...state,
          macroChartData: action.payload.data,
          macroChartLabels: action.payload.labels,
          macroChartLoading: false
        };
      case 'GET_HUMIDITY_ALERTS':
        return {
          ...state,
          alertColumns: action.payload.columns,
          alertData: action.payload.data,
          alertTitle: action.payload.title,
          alertLoading: false
        };
      case 'HUMIDITY_TABLE_LOADING':
        index = state.humidity.findIndex((f) => f._id === action.humidity_id);
        return {
          ...state,
          humidity: [
            ...state.humidity.slice(0, index),
            {
              ...state.humidity[index],
              logs: {
                ...state.humidity[index].logs,
                columns: [],
                data: [],
                title: [],
                isLoading: true
              }
            },
            ...state.humidity.slice(index + 1)
          ]
        };
      case 'CHART_LOADING':
        index = state.humidity.findIndex((f) => f._id === action.humidity_id);
        return {
          ...state,
          humidity: [
            ...state.humidity.slice(0, index),
            {
              ...state.humidity[index],
              charts: {
                ...state.humidity[index].charts,
                data: [],
                labels: [],
                isLoading: true
              }
            },
            ...state.humidity.slice(index + 1)
          ]
        };
      case 'HUMIDITY_TABLE_DATA':
        index = state.humidity.findIndex((f) => f._id === action.humidity_id);
        return {
          ...state,
          humidity: [
            ...state.humidity.slice(0, index),
            {
              ...state.humidity[index],
              logs: {
                ...state.humidity[index].logs,
                columns: action.payload.columns,
                data: action.payload.data,
                title: action.payload.title,
                isLoading: false
              }
            },
            ...state.humidity.slice(index + 1)
          ]
        };
      case 'TEMPERATURE_CHART_DATA':
      case 'HUMIDITY_CHART_DATA':
        index = state.humidity.findIndex((f) => f._id === action.humidity_id);
        return {
          ...state,
          humidity: [
            ...state.humidity.slice(0, index),
            {
              ...state.humidity[index],
              charts: {
                ...state.humidity[index].charts,
                data: action.payload.data,
                labels: action.payload.labels,
                isLoading: false
              }
            },
            ...state.humidity.slice(index + 1)
          ]
        };
      case 'TEMP_MACRO_CHART_LOADING':
        return {
          ...state,
          macroChartLoading: true
        };
      case 'TEMP_ALERTS_LOADING':
        return {
          ...state,
          alertLoading: true
        };
      default:
        return state;
    }
  };
  
  export default HumidityReducer;
  