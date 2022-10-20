const initState = {
  message : {},
  status : null,
  id : null
}

const errorReducer = (state = initState , action) => {
  switch(action.type) {
    case 'GET_ERRORS' :
      return {
        ...state,
        message : action.message,
        status : action.status,
        id : action.id
      }
    case 'CLEAR_ERRORS' :
      return {
        ...state,
        message : {},
        status : null,
        id : null,
      }
    default :
      return state;
  }
}

export default errorReducer