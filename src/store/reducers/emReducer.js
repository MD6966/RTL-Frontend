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

const emReducer = (state = initState, action) => {

  let index ;
  switch (action.type) {
    case 'GET_EM_SENSOR':
      return{
        ...state,
        sensor: action.payload,
        isLoading: false
      };
    case 'V_UPPER_LIMIT':
      if (state.sensor.length > 0) {
        index = state.sensor.findIndex((f) => f._id === action.id);
        if (index === -1) {
          return state
        }
        else {
          return{
            ...state,
            sensor: [
              ...state.sensor.slice(0, index),
              {
                ...state.sensor[index],
                vUpperLimit: action.payload
              },
              ...state.sensor.slice(index+1)
            ]
          };
        }
      }
      else {
        return state
      }
      
      
    case 'C_UPPER_LIMIT':
      if (state.sensor.length > 0) {
        index = state.sensor.findIndex((f) => f._id === action.id);
        if (index === -1) {
          return state
        }
        else {
          return{
            ...state,
            sensor: [
              ...state.sensor.slice(0, index),
              {
                ...state.sensor[index],
                iUpperLimit: action.payload
              },
              ...state.sensor.slice(index+1)
  
            ]
  
          };
        }
      }
      else {
        return state
      }
      
      
    case 'U_UPPER_LIMIT':
      if (state.sensor.length > 0) {
        index = state.sensor.findIndex((f) => f._id === action.id);
        if (index === -1) {
          return state
        }
        else {
          return{
            ...state,
            sensor: [
              ...state.sensor.slice(0, index),
              {
                ...state.sensor[index],
                uUpperLimit: action.payload
              },
              ...state.sensor.slice(index+1)
  
            ]
  
          };
        }
      }
      else {
        return state
      }
      
      
    case 'V_LOWER_LIMIT':
      if (state.sensor.length > 0) {
        index = state.sensor.findIndex((f) => f._id === action.id);
        if (index === -1) {
          return state
        }
        else {
          return{
            ...state,
            sensor: [
              ...state.sensor.slice(0, index),
              {
                ...state.sensor[index],
                vLowerLimit: action.payload
              },
              ...state.sensor.slice(index+1)
  
            ]
  
          };
        }
      }
      else {
        return state
      }
      
      
    case 'PF_LOWER_LIMIT':
      if (state.sensor.length > 0) {
        index = state.sensor.findIndex((f) => f._id === action.id);
        if (index === -1) {
          return state
        }
        else {
          return{
            ...state,
            sensor: [
              ...state.sensor.slice(0, index),
              {
                ...state.sensor[index],
                pfLowerLimit: action.payload
              },
              ...state.sensor.slice(index+1)
            ]
          };
        }
      }
      else {
        return state
      }
      
      
    case 'UPDATE_VA':
      if (state.sensor.length > 0) {
        index = state.sensor.findIndex((f) => f._id === action.payload.em_id);
        if (index === -1) {
          return state
        }
        else {
          return{
            ...state,
            sensor: [
              ...state.sensor.slice(0, index),
              {
                ...state.sensor[index],
                Va: action.payload.Va
              },
              ...state.sensor.slice(index+1)
            ]
          };
        }
      }
      else {
        return state
      }
      
      
    case 'UPDATE_VB':
      if (state.sensor.length > 0) {
        index = state.sensor.findIndex((f) => f._id === action.payload.em_id);
        if (index === -1) {
          return state
        }
        else {
          return{
            ...state,
            sensor: [
              ...state.sensor.slice(0, index),
              {
                ...state.sensor[index],
                Vb: action.payload.Vb
              },
              ...state.sensor.slice(index+1)
            ]
          };
        }
      }
      else {
        return state
      }
      
      
    case 'UPDATE_VC':
      if (state.sensor.length > 0) {
        index = state.sensor.findIndex((f) => f._id === action.payload.em_id);
        if (index === -1) {
          return state
        }
        else {
          return{
            ...state,
            sensor: [
              ...state.sensor.slice(0, index),
              {
                ...state.sensor[index],
                Vc: action.payload.Vc
              },
              ...state.sensor.slice(index+1)
            ]
          };
        }
      }
      else {
        return state
      }
      
      
    case 'UPDATE_IA':
      if (state.sensor.length > 0) {
        index = state.sensor.findIndex((f) => f._id === action.payload.em_id);
        if (index === -1) {
          return state
        }
        else {
          return{
            ...state,
            sensor: [
              ...state.sensor.slice(0, index),
              {
                ...state.sensor[index],
                Ia: action.payload.Ia
              },
              ...state.sensor.slice(index+1)
            ]
          };
        }
      }
      else {
        return state
      }
      
      
    case 'UPDATE_IB':
      if (state.sensor.length > 0) {
        index = state.sensor.findIndex((f) => f._id === action.payload.em_id);
        if (index === -1) {
          return state
        }
        else {
          return{
            ...state,
            sensor: [
              ...state.sensor.slice(0, index),
              {
                ...state.sensor[index],
                Ib: action.payload.Ib
              },
              ...state.sensor.slice(index+1)
            ]
          };
        }
      }
      else {
        return state
      }
      
     
    case 'UPDATE_IC':
      if (state.sensor.length > 0) {
        index = state.sensor.findIndex((f) => f._id === action.payload.em_id);
        if (index === -1) {
          return state
        }
        else {
          return{
            ...state,
            sensor: [
              ...state.sensor.slice(0, index),
              {
                ...state.sensor[index],
                Ic: action.payload.Ic
              },
              ...state.sensor.slice(index+1)
            ]
          };
        }
      }
      else {
        return state
      }
      
      
    case 'UPDATE_PF':
      if (state.sensor.length > 0) {
        index = state.sensor.findIndex((f) => f._id === action.payload.em_id);
        if (index === -1) {
          return state
        }
        else {
          return{
            ...state,
            sensor: [
              ...state.sensor.slice(0, index),
              {
                ...state.sensor[index],
                Pf: action.payload.Pf
              },
              ...state.sensor.slice(index+1)
            ]
          };
        }
      }
      else {
        return state
      }
      
      
    case 'UPDATE_PA':
      if (state.sensor.length > 0) {
        index = state.sensor.findIndex((f) => f._id === action.payload.em_id);
        if (index === -1) {
          return state
        }
        else {
          return{
            ...state,
            sensor: [
              ...state.sensor.slice(0, index),
              {
                ...state.sensor[index],
                PA: action.payload.PA
              },
              ...state.sensor.slice(index+1)
            ]
          };
        }
      }
      else {
        return state
      }
      
      
    case 'UPDATE_PR':
      if (state.sensor.length > 0) {
        index = state.sensor.findIndex((f) => f._id === action.payload.em_id);
        if (index === -1) {
          return state
        }
        else {
          return{
            ...state,
            sensor: [
              ...state.sensor.slice(0, index),
              {
                ...state.sensor[index],
                PR: action.payload.PR
              },
              ...state.sensor.slice(index+1)
            ]
          };
        }
      }
      else {
        return state
      }
      
      
    case 'UPDATE_RP':
      if (state.sensor.length > 0) {
        index = state.sensor.findIndex((f) => f._id === action.payload.em_id);
        if (index === -1) {
          return state
        }
        else {
          return{
            ...state,
            sensor: [
              ...state.sensor.slice(0, index),
              {
                ...state.sensor[index],
                VAR: action.payload.VAR
              },
              ...state.sensor.slice(index+1)
            ]
          };
        }
      }
      else {
        return state
      }
      
      
    case 'UPDATE_U':
      if (state.sensor.length > 0) {
        index = state.sensor.findIndex((f) => f._id === action.payload.em_id);
        if (index === -1) {
          return state
        }
        else {
          return{
            ...state,
            sensor: [
              ...state.sensor.slice(0, index),
              {
                ...state.sensor[index],
                U: action.payload.U,
                U_updtedAt: action.time
              },
              ...state.sensor.slice(index+1)
            ]
          };
        }
      }
      else {
        return state
      }

      case 'UPDATE_FREQUENCY':
      if (state.sensor.length > 0) {
        index = state.sensor.findIndex((f) => f._id === action.payload.em_id);
        if (index === -1) {
          return state
        }
        else {
          return{
            ...state,
            sensor: [
              ...state.sensor.slice(0, index),
              {
                ...state.sensor[index],
                F: action.payload.F
              },
              ...state.sensor.slice(index+1)
            ]
          };
        }
      }
      else {
        return state
      }
      
      
      
    case 'EM_TABEL_LOADING':
      if (state.sensor.length > 0) {
        index = state.sensor.findIndex((f) => f._id === action.em_id);
        if (index === -1) {
          return state
        }
        else {
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
        }
      }
      else { return state}
      
      
    case 'EM_TABEL_DATA':
      if (state.sensor.length > 0) {
        index = state.sensor.findIndex((f) => f._id === action.em_id);
        if (index === -1) {
          return state
        }
        else {
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
        }
      }
      else {
        return state
      }
      
      
    case 'EM_CHART_LOADING':
      if (state.sensor.length > 0) {
        index = state.sensor.findIndex((f) => f._id === action.em_id);
        if (index === -1) {
          return state
        }
        else {
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
        }
      }
      else {
        return state
      }
      
      
                  
    case 'VA_CHART':
      return{
        ...state,
        vaChart: {
          data: action.payload.data,
          labels: action.payload.labels,
          isLoading: false
        }
      };
    case 'VB_CHART':
      return{
        ...state,
        vbChart: {
          data: action.payload.data,
          labels: action.payload.labels,
          isLoading: false
        }
      };
    case 'VC_CHART':
      return{
        ...state,
        vcChart: {
          data: action.payload.data,
          labels: action.payload.labels,
          isLoading: false
        }
      };
    case 'IA_CHART':
      return{
        ...state,
        iaChart: {
          data: action.payload.data,
          labels: action.payload.labels,
          isLoading: false
        }
      };
    case 'IB_CHART':
      return{
        ...state,
        ibChart: {
          data: action.payload.data,
          labels: action.payload.labels,
          isLoading: false
        }
      };
    case 'IC_CHART':
      return{
        ...state,
        icChart: {
          data: action.payload.data,
          labels: action.payload.labels,
          isLoading: false
        }
      };
    case 'POWER_FACTOR_CHART':
    case 'REAL_POWER_CHART':
    case 'APPARENT_POWER_CHART':
    case 'UNIT_CHART':
      if (state.sensor.length > 0) {
        index = state.sensor.findIndex((f) => f._id === action.em_id);
        if (index === -1) {
          return state
        }
        else {
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
        }
      }
      else {
        return state
      }
      
      

    case 'ABNORMAL_CHART':
      if (state.sensor.length > 0) {
        index = state.sensor.findIndex((f) => f._id === action.em_id);
        if (index === -1) {
          return state
        }
        else {
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
        }
      }
      else {
        return state
      }
      
      
    case 'EM_ALERTS_LOADING':
      return{
        ...state,
        alertLoading: true,
      };
    case 'GET_EM_ALERTS':
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

export default emReducer;