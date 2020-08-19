import {
  LOADING,
  AUTHENTICATED,
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
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("token", JSON.stringify(data.token));
          localStorage.setItem("user", JSON.stringify(data.user));
          dispatch({
            type: AUTHENTICATED,
            payload: { token: data.token, isAuthenticated: true },
          });
          dispatch({
            type: GITHUB_LOGIN_SUCCESS,
            payload: {
              isLoggedIn: true,
              isAuthenticated: true,
              user: data.user,
            },
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
