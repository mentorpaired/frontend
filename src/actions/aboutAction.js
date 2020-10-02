import axios from "axios";
import {
  RETRIEVING_USER_INFO,
  RETRIEVE_USER_INFO_ERROR,
  RETRIEVED_USER_INFO,
} from "./actionTypes";

const url = process.env.REACT_APP_BACKEND_PROXY_URL;

// Retrieve user information from jwt access token
export const getUserInfo = (user_id) => (dispatch, getState) => {
  dispatch({ type: RETRIEVING_USER_INFO });

  // get access token
  const jwt = getState().githubAuth.jwt.access;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // if jwt, add to headers config
  if (jwt) {
    config.headers["Authorization"] = `Bearer ${jwt}`;
  }

  axios
    .get(`${url}/users/${user_id}`, config)
    .then((res) => {
      dispatch({
        type: RETRIEVED_USER_INFO,
        payload: res.data,
      });
    })
    .catch({
      type: RETRIEVE_USER_INFO_ERROR,
    });
};
