import {
  LOADING,
  AUTHENTICATED,
  GITHUB_LOGIN_SUCCESS,
  GITHUB_LOGIN_FAIL,
  GITHUB_LOGOUT,
} from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
  token: JSON.parse(localStorage.getItem("token")) || null,
  jwt: JSON.parse(localStorage.getItem("jwt")) || null,
  user: JSON.parse(localStorage.getItem("user")) || null,
  err: null,
};

const githubAuth = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true,
        isLoggedIn: false,
      };
    case AUTHENTICATED:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        token: action.payload.token,
      };
    case GITHUB_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        jwt: action.payload.jwt,
        user: action.payload.user,
      };
    case GITHUB_LOGIN_FAIL:
      return {
        ...state,
        err: action.payload.err,
      };
    case GITHUB_LOGOUT:
      localStorage.clear();
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default githubAuth;
