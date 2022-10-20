const initState = {
  notifications : [
  ],
  count : 0
}
  
const notificationReducer = (state = initState , action) => {

  let i = 0;

  switch(action.type) {
    case 'ADD_NOTIFICATION' :
      state.notifications.forEach(notif => {
        if(notif.title === action.payload.title) {
          i = 1;
        }
      })
      if(i === 0) {
        return {
          ...state,
          notifications : [action.payload , ...state.notifications],
          count : state.count + 1,
        }
      }
      else {
        return {
          ...state
        }
      }
    case 'CLEAR_NOTIFICATIONS' :
      return {
        ...state,
        notifications : [],
        count : 0
      }
    default :
      return state;
  }
}
  
export default notificationReducer