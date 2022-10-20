/* eslint-disable linebreak-style */
const initState = {
  geyser: [],
  // logs: {
  //   data: [],
  //   title: '',
  //   columns: []
  // },
  // charts : {
  //   data: [],
  //   type: '',
  //   labels: []
  // },
  moduleloading: [],
  chartLoading: true, 
  generalLoading: true,
  maintananceLoading: true,
  maintananceTableLoading: true,
  alertColumns: [],
  alertData: [],
  alertTitle: '',
  alertLoading: true,
  geyserLoading: false,
  isLoading: true,
  // routines: null,
  routineLoading: true,
  addRoutineLoading: true
};
const geyserHybridReducer = (state = initState, action) => {
  let index = null;
  switch (action.type) {
    case 'GET_HYBRID_GEYSER_SENSOR':
      // console.log(action.payload)
      return {
        ...state,
        geyser: action.payload,
        generalLoading: false
      };

    case 'UPDATE_TEMPERATURE_LOWER_THRESHOLD_HYBRID':
      // console.log('Reducer',action.payload)
      if (state.geyser.length > 0) {
          return{
            ...state,
            geyser: state.geyser.map( (obj, index) => {
              if(obj._id === action.id)
              {
                obj.temp_lowerthreshold = action.payload;

                return obj;
              }
              else
              {
                return obj;
              }
            }) 
          };
      }
      else {
        return state
      }
      
      case 'UPDATE_SUPPLY_MODE_HYBRID':
      // console.log('Reducer',action.payload)
      if (state.geyser.length > 0) {
          return{
            ...state,
            geyser: state.geyser.map( (obj, index) => {
              if(obj._id === action.id)
              {
                obj.supply_mode = action.status;

                return obj;
              }
              else
              {
                return obj;
              }
            }) 
          };
      }
      else {
        return state
      }

    case 'UPDATE_TEMPERATURE_UPPER_THRESHOLD_HYBRID':
      if (state.geyser.length > 0) {
        index = state.geyser.findIndex((f) => f._id === action.id);
        if (index === -1) {
          return state
        }
        else {
          return{
            ...state,
            geyser: [
              ...state.geyser.slice(0, index),
              {
                ...state.geyser[index],
                temp_upperthreshold: action.payload,
              },
              ...state.geyser.slice(index+1)
            ]
          };
        }
      }
      else {
        return state
      }
      
      case 'UPDATE_SYSTEM_STATUS_HYBRID':
        // console.log(action.payload);


        if (state.geyser.length > 0) {
          index = state.geyser.findIndex((f) => f._id === action.id);
          if (index === -1) {
            return state
          }
          else {
            return{
              ...state,
              geyser: [
                ...state.geyser.slice(0, index),
                {
                  ...state.geyser[index],
                  system_status: action.payload.system_status
                },
                ...state.geyser.slice(index+1)
              ]
            };
          }
        }
        else {
          return state
        }

    case 'UPDATE_TEMPERATURE_HYBRID':
      if (state.geyser.length > 0) {
        index = state.geyser.findIndex((f) => f._id === action.id);
        if (index === -1) {
          return state;
        }else {
          return {
            ...state,
            geyser: [
              ...state.geyser.slice(0, index),
              {
                ...state.geyser[index],
                temperature: action.payload.temperature
              },
              ...state.geyser.slice(index + 1)
            ]
          };
        }
      }
      else {
        return state
      }
      

    case 'UPDATE_GAS_VALVE_HYBRID':
      if (state.geyser.length > 0) {
        index = state.geyser.findIndex((f) => f._id === action.id);
        if (index === -1) {
          return state;
        }else {
          return {
            ...state,
            geyser: [
              ...state.geyser.slice(0, index),
              {
                ...state.geyser[index],
                gas_valve: action.payload.valve_status
              },
              ...state.geyser.slice(index + 1)
            ]
          };
        }
      }
      else {
        return state
      }
     

    case 'UPDATE_BURNER_STATUS_HYBRID':
      if (state.geyser.length > 0) {
        index = state.geyser.findIndex((f) => f._id === action.id);
        if (index === -1) {
          return state;
        }else {
          return {
            ...state,
            geyser: [
              ...state.geyser.slice(0, index),
              {
                ...state.geyser[index],
                burner_status: action.payload.burner_status
              },
              ...state.geyser.slice(index + 1)
            ]
          };
        }
      }
      else {
        return state
      }

      case 'UPDATE_GAS_STATUS_HYBRID':
      if (state.geyser.length > 0) {
        index = state.geyser.findIndex((f) => f._id === action.id);
        if (index === -1) {
          return state;
        }else {
          return {
            ...state,
            geyser: [
              ...state.geyser.slice(0, index),
              {
                ...state.geyser[index],
                gas_status: action.payload.gas_status
              },
              ...state.geyser.slice(index + 1)
            ]
          };
        }
      }
      else {
        return state
      }
      

    case 'UPDATE_GEYSER_STATUS_HYBRID':
      if (state.geyser.length > 0) {
        index = state.geyser.findIndex((f) => f._id === action.id);
        if (index === -1) {
          return state;
        }else {
          return {
            ...state,
            geyser: [
              ...state.geyser.slice(0, index),
              {
                ...state.geyser[index],
                geyser_status: action.payload.geyser_status,
                // geyser_control: action.payload.geyser_control,
    
              },
              ...state.geyser.slice(index + 1)
            ],
            geyserLoading: false
          };
        }
      }
      else {
        return state
      }

      case 'UPDATE_GEYSER_CONTROL_HYBRID':
        console.log('Hybrid Geyser Control')
      if (state.geyser.length > 0) {
        index = state.geyser.findIndex((f) => f._id === action.id);
        if (index === -1) {
          return state;
        }else {
          return {
            ...state,
            geyser: [
              ...state.geyser.slice(0, index),
              {
                ...state.geyser[index],
                // geyser_status: action.payload.geyser_status,
                geyser_control: action.payload.geyser_control,
    
              },
              ...state.geyser.slice(index + 1)
            ],
            geyserLoading: false
          };
        }
      }
      else {
        return state
      }
      

    // case 'GEYSER_TABLE_DATA':

    //   if (state.geyser.length > 0) 
    //   {
    //     index = state.geyser.findIndex((f) => f._id === action.geyser_id);
    //     if (index === -1)
    //     {
    //       return state;
    //     }
    //     // ...state,
    //     else
    //     {
    //       return {
    //       ...state,
    //       geyser: [
    //         ...state.geyser.slice(0, index),
    //         {
    //           ...state.geyser[index],
    //           logs: {
    //             ...state.geyser[index].logs,
    //             columns: action.payload.columns,
    //             data: action.payload.data,
    //             title: action.payload.title,
    //             isLoading: false
    //         }
    //       },
    //       ...state.geyser.slice(index + 1)
    //     ]
    //   };
    //     }
    //   }
    //   else 
    //   {
    //     return state
    //   }
      

    // case 'GEYSER_CHART_DATA':
    //   if (state.geyser.length > 0) {
    //     index = state.geyser.findIndex((f) => f._id === action.geyser_id);
    //     if (index === -1) {
    //       return state;
    //     }else {
    //       return {
    //         ...state,
    //         geyser: [
    //           ...state.geyser.slice(0, index),
    //           {
    //             ...state.geyser[index],
    //             charts: {
    //               ...state.geyser[index].charts,
    //               data: action.payload.data,
    //               labels: action.payload.labels,
    //               isLoading: false
    //             }
    //           },
    //           ...state.geyser.slice(index + 1)
    //         ],
    //         chartLoading: false
    //       };
    //     }
    //   }
    //   else {
    //     return state
    //   }
      

    // case 'GEYSER_CHART_LOADING':
    //   if (state.geyser.length > 0) {
    //     index = state.geyser.findIndex((f) => f._id === action.geyser_id);
    //     if (index === -1) {
    //       return state;
    //     }else {
        
    //       return {
    //         ...state,
    //         geyser: [
    //           ...state.geyser.slice(0, index),
    //           {
    //             ...state.geyser[index],
    //             charts: {
    //               ...state.geyser[index].charts,
    //               data: [],
    //               labels: [],
    //               isLoading: true
    //             }
    //           },
    //           ...state.geyser.slice(index + 1)
    //         ]
    //       };
    //     }
    //   }
    //   else {
    //     return state
    //   }
      
      
    case 'GET_GEYSER_ALERTS_HYBRID':
      return {
        ...state,
        alertColumns: action.payload.columns,
        alertData: action.payload.data,
        alertTitle: action.payload.title,
        alertLoading: false
      };

    // case 'GEYSER_TABLE_LOADING':
    //   if (state.geyser.length > 0) {  
    //     index = state.geyser.findIndex((f) => f._id === action.geyser_id);
    //     if (index === -1) {
    //       return state;
    //     }else {
    //       return {
    //         ...state,
    //         geyser: [
    //           ...state.geyser.slice(0, index),
    //           {
    //             ...state.geyser[index],
    //             logs: {
    //               ...state.geyser[index].logs,
    //               columns: [],
    //               data: [],
    //               title: [],
    //               isLoading: true
    //             }
    //           },
    //           ...state.geyser.slice(index + 1)
    //         ]
    //       };
    //     }
    //   }
    //   else {
    //     return state
    //   }

      case 'GET_ROUTINES_HYBRID':
        index = state.geyser.findIndex((f)=> f._id === action.geyser_id);
        return{
          ...state,
          geyser : [
            ...state.geyser.slice(0, index),
            {
              ...state.geyser[index],
              scheduling: {
                routine: action.payload,
                routineLoading: false
              },
            },
            ...state.geyser.slice(index + 1)
          ],
        };
      case 'DELETE_ROUTINE_HYBRID':
        index = state.geyser.findIndex((f) => f._id === action.geyser_id);
        return {
          ...state,
          geyser: [
            ...state.geyser.slice(0, index),
           {
            ...state.geyser[index],
            scheduling: {
              routine: action.payload,
              routineLoading: false
            },
           
           },
           ...state.geyser.slice(index + 1)
          ],
          

      };
      
      case 'ADD_ROUTINE_HYBRID':
      index = state.geyser.findIndex((f) => f._id === action.payload.geyser_id);
      // index = state.geyser[geyser_index].routines.findIndex((f) => f._id === action.payload._id );
      return {
        ...state,
        geyser: [
          ...state.geyser.slice(0, index),
         {
          ...state.geyser[index],
          scheduling: {
            
            routine:[
              ...state.geyser[index].scheduling.routine,
               action.payload,
            ]
          }

         
         },
         ...state.geyser.slice(index + 1)
        ],
        

    };
      // return {
      //   ...state,
      //   routines: [
      //     ...state.routines,
      //     action.payload,
      //     // ...state.routines.slice(index + 1)
      //   ]
      // }

      case 'UPDATE_SINGLE_ROUTINE_HYBRID':
        // console.log('Hybrid ');
      index = state.geyser.findIndex((f) => f._id === action.payload.routine.geyser_id );
      let i = state.geyser[index].scheduling.routine.findIndex((f)=> f._id === action.payload.routine._id );

      return {
        ...state,
        geyser:[
          ...state.geyser.slice(0, index),
          {
            ...state.geyser[index],
            scheduling: {
              routine: [
                ...state.geyser[index].scheduling.routine.slice(0,i),
                action.payload.routine,
                ...state.geyser[index].scheduling.routine.slice(i+1),

              ]

            }

          },

          ...state.geyser.slice(index + 1)
        ]
        // routines: [
        //   ...state.routines.slice(0, index),
        //   action.payload.routine,
        //   ...state.routines.slice(index + 1)
        // ]
      }

    case 'UPDATE_ALL_ROUTINES_HYBRID':
      index = state.geyser.findIndex((f) => f._id === action.id);
      return {
        ...state,
        geyser: [
          ...state.geyser.slice(0, index),
          {
            ...state.geyser[index],
            routine_enable: action.status
          },
          ...state.geyser.slice(index + 1)
        ]
      };
      

    case 'GEYSER_ALERTS_LOADING_HYBRID':
      return {
        ...state,
        alertLoading: true
      };

      case 'GEYSER_LOADING_TRUE_HYBRID':
        console.log(action.payload)
      return {
        // ...state,
        // geyserLoading: true
        ...state,
        moduleloading: state.moduleloading.map( (obj, index) =>{ 
          if(obj._id === action.payload)
          {
            obj.isLoading = true;
            console.log(obj.isLoading);
            return obj;
            
          }
          else 
          {
            obj.isLoading = true;
            console.log("Else",obj.isLoading);
            return obj;
          }
        })
      }

      case 'GEYSER_LOADING_FALSE_HYBRID':
      return {
        // ...state,
        // geyserLoading: false
        ...state,
        moduleloading: state.moduleloading.map( (obj, index) =>{ 
          if(obj._id === action.payload)
          {
            obj.isLoading = false;
            console.log(obj.isLoading);
            return obj;
            
          }
          else 
          {
            obj.isLoading = false;
            console.log("Else",obj.isLoading);
            return obj;
          }
        })
      }

      
    //   case 'COPY_MODULES':
    //     // console.log("+++++++++++",action.payload, "+++++++++++");
    //     return {
    //       ...state,
    //       moduleloading: action.payload,
    //     }


    default:
      return state;
  }
};
  
export default geyserHybridReducer;
  