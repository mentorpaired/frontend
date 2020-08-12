import {
  LOADING,
  GITHUB_LOGIN_SUCCESS,
  GITHUB_LOGIN_FAIL,
  GITHUB_LOGOUT,
} from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
  token: JSON.parse(localStorage.getItem("token")) || null,
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
    case GITHUB_LOGIN_SUCCESS:
      localStorage.setItem(
        "isLoggedIn",
        JSON.stringify(action.payload.isLoggedIn)
      );
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
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
