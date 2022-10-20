/* eslint-disable linebreak-style */
const initState = {
  tubewell: [],
  chartLoading: true, 
  generalLoading: true,
  maintananceLoading: true,
  maintananceTableLoading: true,
  alertColumns: [],
  alertData: [],
  alertTitle: '',
  alertLoading: true,
  motorLoading: false
};
  
const tubewellReducer = (state = initState, action) => {
  let index = null;
  switch (action.type) {
    case 'GET_TW_SENSOR':
      return {
        ...state,
        tubewell: action.payload,
        generalLoading: false
      };
    case 'GET_TUBEWELL_MAINTANANCE_DATA':
      index = state.tubewell.findIndex((f) => f._id === action.tw_id);
      return {
        ...state,
        tubewell: [
          ...state.tubewell.slice(0, index),
          {
            ...state.tubewell[index],
            maintanance: {
              ...state.tubewell[index].maintanance,
              totalRunningTime: action.payload.overallRunningTime,
              runningTime: action.payload.filterRunningTime,
              motorRunningTime: action.payload.MotorRunningTime
            }
          },
          ...state.tubewell.slice(index + 1)
        ],
        maintananceLoading: false
      };

    
    case 'UPDATE_TANK_UPPER_THRESHOLD':
      index = state.tubewell.findIndex((f) => f._id === action.payload.tw_id);
      return{
        ...state,
        tubewell: [
          ...state.tubewell.slice(0, index),
          {
            ...state.tubewell[index],
            fillLevel_upperLmt: action.payload.fillLevel_upperLmt,
            updated_filluppr: action.payload.time
          },
          ...state.tubewell.slice(index+1)

        ]

      };

    case 'UPDATE_TANK_LOWER_THRESHOLD':
      index = state.tubewell.findIndex((f) => f._id === action.payload.tw_id);
      return{
        ...state,
        tubewell: [
          ...state.tubewell.slice(0, index),
          {
            ...state.tubewell[index],
            fillLevel_lwrLmt: action.payload.fillLevel_lwrLmt,
            updated_fillLwr: action.payload.time
          },
          ...state.tubewell.slice(index+1)

        ]

      };

    case 'UPDATE_PH_LOWER_THRESHOLD':
      index = state.tubewell.findIndex((f) => f._id === action.payload.tw_id);
      return{
        ...state,
        tubewell: [
          ...state.tubewell.slice(0, index),
          {
            ...state.tubewell[index],
            ph_lwrLmt: action.payload.ph_lwrLmt,
            updated_phLwr: action.payload.time
          },
          ...state.tubewell.slice(index+1)
  
        ]
  
      };

    case 'UPDATE_PH_UPPER_THRESHOLD':
      index = state.tubewell.findIndex((f) => f._id === action.payload.tw_id);
      return{
        ...state,
        tubewell: [
          ...state.tubewell.slice(0, index),
          {
            ...state.tubewell[index],
            ph_upperLmt: action.payload.ph_upperLmt,
            updated_phUppr: action.payload.time
          },
          ...state.tubewell.slice(index+1)
  
        ]
  
      };

    case 'UPDATE_CURRENT_LOWER_THRESHOLD':
      index = state.tubewell.findIndex((f) => f._id === action.id);
      return{
        ...state,
        tubewell: [
          ...state.tubewell.slice(0, index),
          {
            ...state.tubewell[index],
            I_lwrLmt: action.payload,
            updated_ILwr: action.time
          },
          ...state.tubewell.slice(index+1)
  
        ]
  
      };

    case 'UPDATE_PHASE':
      index = state.tubewell.findIndex((f) => f._id === action.id);
      return{
        ...state,
        tubewell: [
          ...state.tubewell.slice(0, index),
          {
            ...state.tubewell[index],
            phaseDown: action.payload
          },
          ...state.tubewell.slice(index+1)
  
        ]
  
      };

    case 'UPDATE_TDS_LOWER_THRESHOLD':
      index = state.tubewell.findIndex((f) => f._id === action.payload.tw_id);
      return{
        ...state,
        tubewell: [
          ...state.tubewell.slice(0, index),
          {
            ...state.tubewell[index],
            tds_lwrLmt: action.payload.tds_lwrLmt,
            updated_tdsLwr: action.payload.time
          },
          ...state.tubewell.slice(index+1)
  
        ]
  
      };

    case 'UPDATE_TDS_UPPER_THRESHOLD':
      index = state.tubewell.findIndex((f) => f._id === action.payload.tw_id);
      return{
        ...state,
        tubewell: [
          ...state.tubewell.slice(0, index),
          {
            ...state.tubewell[index],
            tds_upperLmt: action.payload.tds_upperLmt,
            updated_tdsUppr: action.payload.time
          },
          ...state.tubewell.slice(index+1)
  
        ]
  
      };

    case 'WATER_MAINTANANCE_THRESHOLD':
    case 'UPDATE_WATER_MAINTANANCE_THRESHOLD':
      index = state.tubewell.findIndex((f) => f._id === action.id);
      return{
        ...state,
        tubewell: [
          ...state.tubewell.slice(0, index),
          {
            ...state.tubewell[index],
            waterMaintenance: action.payload
          },
          ...state.tubewell.slice(index+1)
  
        ]
  
      };

    case 'MOTOR_MAINTANANCE_THRESHOLD':
    case 'UPDATE_MOTOR_MAINTANANCE_THRESHOLD':
      index = state.tubewell.findIndex((f) => f._id === action.id);
      return{
        ...state,
        tubewell: [
          ...state.tubewell.slice(0, index),
          {
            ...state.tubewell[index],
            motorMaintenance: action.payload
          },
          ...state.tubewell.slice(index+1)
  
        ]
  
      };

    
    case 'UPDATE_LITER_THRESHOLD':
      index = state.tubewell.findIndex((f) => f._id === action.id);
      return{
        ...state,
        tubewell: [
          ...state.tubewell.slice(0, index),
          {
            ...state.tubewell[index],
            liters: action.payload,
            updated_liter: action.time
          },
          ...state.tubewell.slice(index+1)
  
        ]
  
      };



    case 'MOTOR_MAINTANANCE':
      index = state.tubewell.findIndex((f) => f._id === action.payload.tw_id);
      return{
        ...state,
        tubewell: [
          ...state.tubewell.slice(0, index),
          {
            ...state.tubewell[index],
            m_maintenance: action.payload
          },
          ...state.tubewell.slice(index+1)
  
        ]
  
      };

    case 'TANK_CAPACITY':
      index = state.tubewell.findIndex((f) => f._id === action.payload.tw_id);
      return{
        ...state,
        tubewell: [
          ...state.tubewell.slice(0, index),
          {
            ...state.tubewell[index],
            t_capacity: action.payload
          },
          ...state.tubewell.slice(index+1)
  
        ]
  
      };
    
    case 'UPDATE_TANK_FILLLEVEL':
      index = state.tubewell.findIndex((f) => f._id === action.payload.tw_id);
      return {
        ...state,
        tubewell: [
          ...state.tubewell.slice(0, index),
          {
            ...state.tubewell[index],
            fillLevel: action.payload.fillLevel
          },
          ...state.tubewell.slice(index + 1)
        ]
      };

    case 'UPDATE_TANK_DOORSTATUS':
      index = state.tubewell.findIndex((f) => f._id === action.payload.tw_id);
      return {
        ...state,
        tubewell: [
          ...state.tubewell.slice(0, index),
          {
            ...state.tubewell[index],
            t_lid: action.payload.t_lid
          },
          ...state.tubewell.slice(index + 1)
        ]
      };
    case 'UPDATE_PH_VALUE':
      index = state.tubewell.findIndex((f) => f._id === action.payload.tw_id);
      return {
        ...state,
        tubewell: [
          ...state.tubewell.slice(0, index),
          {
            ...state.tubewell[index],
            ph: action.payload.ph
          },
          ...state.tubewell.slice(index + 1)
        ]
      };
    case 'UPDATE_TDS_VALUE':
      index = state.tubewell.findIndex((f) => f._id === action.payload.tw_id);
      return {
        ...state,
        tubewell: [
          ...state.tubewell.slice(0, index),
          {
            ...state.tubewell[index],
            tds: action.payload.tds
          },
          ...state.tubewell.slice(index + 1)
        ]
      };
    case 'UPDATE_MAIN_LINE_STATUS':
      index = state.tubewell.findIndex((f) => f._id === action.payload.tw_id);
      return {
        ...state,
        tubewell: [
          ...state.tubewell.slice(0, index),
          {
            ...state.tubewell[index],
            power: action.payload.power
          },
          ...state.tubewell.slice(index + 1)
        ]
      };

    case 'UPDATE_PRIMING':
      index = state.tubewell.findIndex((f) => f._id === action.id);
      return {
        ...state,
        tubewell: [
          ...state.tubewell.slice(0, index),
          {
            ...state.tubewell[index],
            volve: action.payload.volve
          },
          ...state.tubewell.slice(index + 1)
        ]
      };

    case 'UPDATE_PRIMING_LEVEL':
      index = state.tubewell.findIndex((f) => f._id === action.id);
      return {
        ...state,
        tubewell: [
          ...state.tubewell.slice(0, index),
          {
            ...state.tubewell[index],
            plvl: action.payload.plvl
          },
          ...state.tubewell.slice(index + 1)
        ]
      };

    case 'UPDATE_PUMP_VIBRATION':
      index = state.tubewell.findIndex((f) => f._id === action.id);
      return {
        ...state,
        tubewell: [
          ...state.tubewell.slice(0, index),
          {
            ...state.tubewell[index],
            vib: action.payload.vib
          },
          ...state.tubewell.slice(index + 1)
        ]
      };

    case 'UPDATE_MOTOR_CURRENT_STATUS':
      index = state.tubewell.findIndex((f) => f._id === action.payload.tw_id);
      return {
        ...state,
        tubewell: [
          ...state.tubewell.slice(0, index),
          {
            ...state.tubewell[index],
            Ia: action.payload.Ia
          },
          ...state.tubewell.slice(index + 1)
        ]
      };
    case 'UPDATE_TANK_MOTORSTATUS':
      index = state.tubewell.findIndex((f) => f._id === action.payload.tw_id);
      return {
        ...state,
        tubewell: [
          ...state.tubewell.slice(0, index),
          {
            ...state.tubewell[index],
            motor: action.payload.motor,
            forceMotor: action.payload.forceMotor,
          },
          ...state.tubewell.slice(index + 1)
        ],
        motorLoading: false
      };
    case 'UPDATE_TUBEWELL_DOOR_STATUS':
      index = state.tubewell.findIndex((f) => f._id === action.payload.tw_id);
      return {
        ...state,
        tubewell: [
          ...state.tubewell.slice(0, index),
          {
            ...state.tubewell[index],
            door_status: action.payload.door_status
          },
          ...state.tubewell.slice(index + 1)
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
    case 'UPDATE_SMOKE_ALARM_STATUS':
      index = state.tubewell.findIndex((f) => f._id === action.payload.tw_id);
      return {
        ...state,
        tubewell: [
          ...state.tubewell.slice(0, index),
          {
            ...state.tubewell[index],
            alarm: action.payload.alarm
          },
          ...state.tubewell.slice(index + 1)
        ]
      };
    case 'SET_TANK_MAINTANANCE_THRESHOLD':
      index = state.tubewell.findIndex((f) => f._id === action.id);
      return {
        ...state,
        tubewell: [
          ...state.tubewell.slice(0, index),
          {
            ...state.tubewell[index],
            liters: action.payload
          },
          ...state.tubewell.slice(index + 1)
        ]
      };

    case 'UPDATE_AUTO_MODE':
      index = state.tubewell.findIndex((f) => f._id === action.id);
      return {
        ...state,
        tubewell: [
          ...state.tubewell.slice(0, index),
          {
            ...state.tubewell[index],
            auto: action.payload
          },
          ...state.tubewell.slice(index + 1)
        ]
      };
    case 'TUBEWELL_TABLE_DATA':
      index = state.tubewell.findIndex((f) => f._id === action.tw_id);
      return {
        ...state,
        tubewell: [
          ...state.tubewell.slice(0, index),
          {
            ...state.tubewell[index],
            logs: {
              ...state.tubewell[index].logs,
              columns: action.payload.columns,
              data: action.payload.data,
              title: action.payload.title,
              isLoading: false
            }
          },
          ...state.tubewell.slice(index + 1)
        ]
      };
    case 'TUBEWELL_CHART_DATA':
      index = state.tubewell.findIndex((f) => f._id === action.tw_id);
      return {
        ...state,
        tubewell: [
          ...state.tubewell.slice(0, index),
          {
            ...state.tubewell[index],
            charts: {
              ...state.tubewell[index].charts,
              data: action.payload.data,
              labels: action.payload.labels,
              isLoading: false
            }
          },
          ...state.tubewell.slice(index + 1)
        ],
        chartLoading: false
      };

    case 'TUBEWELL_CHART_LOADING':
      index = state.tubewell.findIndex((f) => f._id === action.tw_id);
        
      return {
        ...state,
        tubewell: [
          ...state.tubewell.slice(0, index),
          {
            ...state.tubewell[index],
            charts: {
              ...state.tubewell[index].charts,
              data: [],
              labels: [],
              isLoading: true
            }
          },
          ...state.tubewell.slice(index + 1)
        ]
      };
    case 'TUBEWELL_MAINTANANCE':
      index = state.tubewell.findIndex((f) => f._id === action.tw_id);
      return {
        ...state,
        tubewell: [
          ...state.tubewell.slice(0, index),
          {
            ...state.tubewell[index],
            maintanance: {
              ...state.tubewell[index].maintanance,
              runningTime: '0'
            }
          },
          ...state.tubewell.slice(index + 1)
        ],
        maintananceTableLoading: false
      };


    case 'TUBEWELL_MOTOR_MAINTENANCE':
      index = state.tubewell.findIndex((f) => f._id === action.tw_id);
      return {
        ...state,
        tubewell: [
          ...state.tubewell.slice(0, index),
          {
            ...state.tubewell[index],
            maintanance: {
              ...state.tubewell[index].maintanance,
              motorRunningTime: '0'
            }
          },
          ...state.tubewell.slice(index + 1)
        ],
        maintananceTableLoading: false
      };

      
    case 'GET_TUBEWELL_ALERTS':
      return {
        ...state,
        alertColumns: action.payload.columns,
        alertData: action.payload.data,
        alertTitle: action.payload.title,
        alertLoading: false
      };
    case 'TUBEWELL_TABLE_LOADING':
      index = state.tubewell.findIndex((f) => f._id === action.tw_id);
      return {
        ...state,
        tubewell: [
          ...state.tubewell.slice(0, index),
          {
            ...state.tubewell[index],
            logs: {
              ...state.tubewell[index].logs,
              columns: [],
              data: [],
              title: [],
              isLoading: true
            }
          },
          ...state.tubewell.slice(index + 1)
        ]
      };
    case 'UPDATE_FORCE_MOTOR':
      index = state.tubewell.findIndex((f) => f._id === action.payload.tw_id);
      return{
        ...state,
        tubewell: [
          ...state.tubewell.slice(0, index),
          {
            ...state.tubewell[index],
            forceMotor: action.payload.forceMotor
          },
          ...state.tubewell.slice(index+1)
        ]
      };
    case 'TUBEWELL_ALERTS_LOADING':
      return {
        ...state,
        alertLoading: true
      };


    case 'FORCE_MOTOR_ON':
      return{
        ...state,
      }

    case 'MOTOR_LOADING':
      return {
        ...state,
        motorLoading: true
      }
      
    default:
      return state;
  }
};
  
export default tubewellReducer;
  