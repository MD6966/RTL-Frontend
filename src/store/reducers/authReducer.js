const initState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: null,
  isAdminAuthenticated: null,
  user: null,
  admin: null,
  isRegistered: false
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'USER_LOADING':
      return {
        ...state,
        isLoading: true
      };
    case 'ADMIN_LOADING':
      return {
        ...state,
        isLoading: true
      };
    case 'USER_LOADED':
      // console.log(action.payload)
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
      };
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        isRegistered: true,
        isLoading: false
      };
    case 'LOGIN_SUCCESS':
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false
      };
    case 'ADMIN_LOGIN_SUCCESS':
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        admin: action.payload.admin,
        isAdminAuthenticated: true,
        isLoading: false
      };
    case 'AUTH_ERROR':
    case 'LOGIN_FAIL':
    case 'LOGOUT_SUCCESS':
    case 'REGISTER_FAIL':
      localStorage.removeItem('token');
      return {
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
      };
    case 'USER_PICTURE_UPLOAD':
      return {
        ...state,
        user: {
          ...state.user,
          profilePic: action.payload
        }
      };
    case 'USER_THEME':
      return {
        ...state,
        user: {
          ...state.user,
          settings: action.payload
        }
      };
    case 'REFRESH_REGISTER':
      return {
        ...state,
        isRegistered: false,
        isLoading: false
      };
    default:
      return state;
  }
};

export default authReducer;
