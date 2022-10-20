const initState = {
  led: [],
  learn_image: null,
  generalLoading: true,
  isLoading: true,
  chartLoading: true
};

const ledReducer = (state = initState, action) => {
  let index = null;
  switch (action.type) {
    case 'GET_LED':
      return {
        ...state,
        led: action.payload,
        generalLoading: false
      };
    case 'UPDATE_CNC_COLOR':
      index = state.led.findIndex(temp => temp._id === action.id);
      return {
        ...state,
        led: [
          ...state.led.slice(0, index),
          {
            ...state.led[index],
            color: action.payload
          },
          ...state.led.slice(index + 1)
        ]
      };
    case 'UPDATE_CNC_OFFLINE':
      index = state.led.findIndex(temp => temp._id === action.id);
      return {
        ...state,
        led: [
          ...state.led.slice(0, index),
          {
            ...state.led[index],
            offline: action.payload
          },
          ...state.led.slice(index + 1)
        ]
      };
    case 'UPDATE_CNC_CAMERA':
      index = state.led.findIndex(temp => temp._id === action.id);
      return {
        ...state,
        led: [
          ...state.led.slice(0, index),
          {
            ...state.led[index],
            camera: action.payload
          },
          ...state.led.slice(index + 1)
        ]
      };
    case 'LED_TABLE_DATA':
      index = state.led.findIndex(f => f._id === action.led_id);
      return {
        ...state,
        led: [
          ...state.led.slice(0, index),
          {
            ...state.led[index],
            logs: {
              ...state.led[index].logs,
              columns: action.payload.columns,
              data: action.payload.data,
              title: action.payload.title,
              isLoading: false
            }
          },
          ...state.led.slice(index + 1)
        ]
      };
    case 'LED_CHART_DATA':
      index = state.led.findIndex(f => f._id === action.led_id);
      return {
        ...state,
        led: [
          ...state.led.slice(0, index),
          {
            ...state.led[index],
            charts: {
              ...state.led[index].charts,
              data: action.payload,
              isLoading: false
            }
          },
          ...state.led.slice(index + 1)
        ]
      };
    case 'LED_TABLE_LOADING':
      index = state.led.findIndex(f => f._id === action.led_id);
      return {
        ...state,
        led: [
          ...state.led.slice(0, index),
          {
            ...state.led[index],
            logs: {
              ...state.led[index].logs,
              columns: [],
              data: [],
              title: [],
              isLoading: true
            }
          },
          ...state.led.slice(index + 1)
        ]
      };
    case 'LED_CHART_LOADING':
      index = state.led.findIndex(f => f._id === action.led_id);
      return {
        ...state,
        led: [
          ...state.led.slice(0, index),
          {
            ...state.led[index],
            charts: {
              ...state.led[index].charts,
              data: [],
              isLoading: true
            }
          },
          ...state.led.slice(index + 1)
        ]
      };
    case 'LEARN_ENCODING':
      return {
        ...state,
        learn_image: action.payload
      };
    case 'LED_LOADING':
      return {
        ...state,
        generalLoading: true
      };
    default:
      return state;
  }
};

export default ledReducer;
