import { axiosInstance } from '../modules/sign/components/axiosApi';
import axios from "axios";


export const authorizeUser = (response, dispatch) => {
	axiosInstance.defaults.headers['Authorization'] =
		'JWT ' + response.data.jwt.access;
	localStorage.setItem('access_token', response.data.jwt.access);
	localStorage.setItem('refresh_token', response.data.jwt.refresh);
	localStorage.setItem('loggedIn', true);
	dispatch({ type: 'LOGIN_SUCCESS', payload: response.data.user });
};


export const setAuthToken = (token) => {
    if (token) {
        // Apply to every request
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    } else {
        // Delete auth header
        delete axios.defaults.headers.common["Authorization"];
    }
};

