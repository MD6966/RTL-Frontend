const initState = {
  socket : null
}
    
const socketReducer = (state = initState , action) => {
  switch(action.type) {
    case 'SOCKET_CONNECTION' :
      return {
        ...state,
        socket : action.payload
      }
    default :
      return state;
  }
}
    
export default socketReducer;