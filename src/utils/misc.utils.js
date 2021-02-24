import { axiosInstance } from "../modules/sign/components/axiosApi"

export const authorizeUser = (response, dispatch) => {
    axiosInstance.defaults.headers["Authorization"] =
    "JWT " + response.data.jwt.access;
    localStorage.setItem("access_token", response.data.jwt.access);
    localStorage.setItem("refresh_token", response.data.jwt.refresh);
    localStorage.setItem("loggedIn", true);
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data.user });
}

