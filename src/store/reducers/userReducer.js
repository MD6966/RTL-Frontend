const initState = {
  users: [],
  isLoading: false,
  sensorsLoading: true
};

const userReducer = (state = initState, action) => {
  let index = null;

  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        isLoading: false
      };
    case 'USERS_LOADING':
      return {
        ...state,
        isLoading: true
      };
    case 'USER_SENSORS_LOADING':
      return {
        ...state,
        sensorsLoading: true
      };
    case 'USERS_ADD_DASHBOARD':
      index = state.users.findIndex(u => u._id === action.id);
      return {
        users: [
          ...state.users.slice(0, index),
          {
            ...state.users[index],
            dashboards: [
              ...state.users[index].dashboards,
              {
                title: action.payload.title,
                href: action.payload.href
              }
            ]
          },
          ...state.users.slice(index + 1)
        ]
      };
    case 'USER_DASHBOARD_SENSORS':
      index = state.users.findIndex(u => u._id === action.id);
      return {
        users: [
          ...state.users.slice(0, index),
          {
            ...state.users[index],
            sensors: action.payload
          },
          ...state.users.slice(index + 1)
        ],
        sensorsLoading: false
      };
    case 'USER_DASHBOARD_ADD_SENSOR':
      index = state.users.findIndex(u => u._id === action.id);
      return {
        users: [
          ...state.users.slice(0, index),
          {
            ...state.users[index],
            sensors: [...state.users[index].sensors, action.payload]
          },
          ...state.users.slice(index + 1)
        ]
      };
    default:
      return {
        ...state
      };
  }
};

export default userReducer;
