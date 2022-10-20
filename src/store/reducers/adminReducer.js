const initState = {
  dashboards: []
};

const adminReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_DASHBOARD':
      return {
        ...state,
        dashboards: action.payload
      };
    default:
      return state;
  }
};

export default adminReducer;
