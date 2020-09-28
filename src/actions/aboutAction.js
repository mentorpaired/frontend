import { LOAD_USER_INFO, LOAD_USER_INFO_ERROR } from "./actionTypes";

const url = process.env.REACT_APP_BACKEND_PROXY_URL;

// Retrieve user information
export const loadUser = (id) => {
  return (dispatch) => {
    dispatch({ type: LOAD_USER_INFO });
    try {
      let token = localStorage.getItem("token");
      fetch(`${url}/users/${id}/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("user", JSON.stringify(data.user));
        });
    } catch (err) {
      return dispatch({
        type: LOAD_USER_INFO_ERROR,
      });
    }
  };
};
