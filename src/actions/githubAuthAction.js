import {
  LOADING,
  GITHUB_LOGIN_SUCCESS,
  GITHUB_LOGIN_FAIL,
} from "./actionTypes";

const url = process.env.REACT_APP_BACKEND_PROXY_URL;

const githubAuthAction = (code) => {
  return (dispatch) => {
    dispatch({ type: LOADING });
    try {
      fetch(`${url}/github_auth/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch({
            type: GITHUB_LOGIN_SUCCESS,
            payload: { user: data, isLoggedIn: true },
          });
        });
    } catch (error) {
      return dispatch({
        type: GITHUB_LOGIN_FAIL,
      });
    }
  };
};

export default githubAuthAction;
