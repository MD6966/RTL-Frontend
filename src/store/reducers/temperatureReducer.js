const initState = {
  temperature: [],
  isLoading: true,
  macroChartData: [],
  macroChartLabels: [],
  macroChartLoading: false,
  alertColumns: [],
  alertData: [],
  alertTitle: '',
  alertLoading: true
};

const temperatureReducer = (state = initState, action) => {
  let index = null;
  switch (action.type) {
    case 'GET_TEMPERATURE':
      return {
        ...state,
        temperature: action.payload,
        isLoading: false
      };
    case 'UPDATE_TEMPERATURE':
      index = state.temperature.findIndex(
        (temp) => temp._id === action.payload.temp_id
      );
      return {
        ...state,
        temperature: [
          ...state.temperature.slice(0, index),
          {
            ...state.temperature[index],
            currentTemp: action.payload.temperature
          },
          ...state.temperature.slice(index + 1)
        ]
      };
    case 'UPDATE_TEMPERATURE_UT':
      index = state.temperature.findIndex(
        (temp) => temp._id === action.payload.temp_id
      );
      return {
        ...state,
        temperature: [
          ...state.temperature.slice(0, index),
          {
            ...state.temperature[index],
            upperThreshold: action.payload.ut
          },
          ...state.temperature.slice(index + 1)
        ]
      };
    case 'UPDATE_TEMPERATURE_LT':
      index = state.temperature.findIndex(
        (temp) => temp._id === action.payload.temp_id
      );
      return {
        ...state,
        temperature: [
          ...state.temperature.slice(0, index),
          {
            ...state.temperature[index],
            threshold: action.payload.lt
          },
          ...state.temperature.slice(index + 1)
        ]
      };
    case 'SET_THRESHOLD':
      index = state.temperature.findIndex(
        (temp) => temp._id === action.payload.temp_id
      );
      return {
        ...state,
        temperature: [
          ...state.temperature.slice(0, index),
          {
            ...state.temperature[index],
            threshold: action.payload.threshold
          },
          ...state.temperature.slice(index + 1)
        ],
        count: 0
      };
    case 'SET_UPPER_THRESHOLD':
      index = state.temperature.findIndex(
        (temp) => temp._id === action.payload.temp_id
      );
      return {
        ...state,
        temperature: [
          ...state.temperature.slice(0, index),
          {
            ...state.temperature[index],
            upperThreshold: action.payload.threshold
          },
          ...state.temperature.slice(index + 1)
        ],
        count: 0
      };
    case 'TEMP_MACRO_CHART_DATA':
      return {
        ...state,
        macroChartData: action.payload.data,
        macroChartLabels: action.payload.labels,
        macroChartLoading: false
      };
    case 'GET_TEMP_ALERTS':
      return {
        ...state,
        alertColumns: action.payload.columns,
        alertData: action.payload.data,
        alertTitle: action.payload.title,
        alertLoading: false
      };
    case 'TEMP_TABLE_LOADING':
      index = state.temperature.findIndex((f) => f._id === action.temp_id);
      return {
        ...state,
        temperature: [
          ...state.temperature.slice(0, index),
          {
            ...state.temperature[index],
            logs: {
              ...state.temperature[index].logs,
              columns: [],
              data: [],
              title: [],
              isLoading: true
            }
          },
          ...state.temperature.slice(index + 1)
        ]
      };
    case 'TEMP_CHART_LOADING':
      index = state.temperature.findIndex((f) => f._id === action.temp_id);
      return {
        ...state,
        temperature: [
          ...state.temperature.slice(0, index),
          {
            ...state.temperature[index],
            charts: {
              ...state.temperature[index].charts,
              data: [],
              labels: [],
              isLoading: true
            }
          },
          ...state.temperature.slice(index + 1)
        ]
      };
    case 'TEMP_TABLE_DATA':
      index = state.temperature.findIndex((f) => f._id === action.temp_id);
      return {
        ...state,
        temperature: [
          ...state.temperature.slice(0, index),
          {
            ...state.temperature[index],
            logs: {
              ...state.temperature[index].logs,
              columns: action.payload.columns,
              data: action.payload.data,
              title: action.payload.title,
              isLoading: false
            }
          },
          ...state.temperature.slice(index + 1)
        ]
      };
    case 'TEMP_CHART_DATA':
      index = state.temperature.findIndex((f) => f._id === action.temp_id);
      return {
        ...state,
        temperature: [
          ...state.temperature.slice(0, index),
          {
            ...state.temperature[index],
            charts: {
              ...state.temperature[index].charts,
              data: action.payload.data,
              labels: action.payload.labels,
              isLoading: false
            }
          },
          ...state.temperature.slice(index + 1)
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

export default temperatureReducer;
