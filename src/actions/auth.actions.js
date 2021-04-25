import { axiosInstance } from '../modules/sign/components/axiosApi';
import { authorizeUser } from '../utils/misc.utils';
import axios from "axios"
import { GET_USER, IS_LOADING, LOGIN, LOGIN_FAILED, NOT_LOADING } from './actionTypes';
import notify from '../utils/notify';

export const logIn = async function (token, dispatch, history, isGitlab) {
	try {
		dispatch({ type: LOGIN });
		const authEndPoint = isGitlab ? 'gitlab_auth' : 'github_auth';
		const response = await axiosInstance.post(
			`http://mentorpaired-staging-backend.herokuapp.com/${authEndPoint}/`,
			{ code: token }
		);
		authorizeUser(response, dispatch);
		//Commented out the history.push because it wasn't working as expected
		// history.push('/');
		window.location.href = "/"
	} catch (error) {
		localStorage.setItem('loggedIn', false);
		dispatch({ type: LOGIN_FAILED, payload: error });
	}
};



/**
 * 
 * @param {uuid} id [The current logged in user ID decoded from the access_token from local storage] 
 * @param {*} dispatch 
 * @description fetched the user's data/info
 */
export const fetchUserInfo = async (id, dispatch) => {
	try {
		dispatch({ type: IS_LOADING})
		const response = await axios.get(`https://mentorpaired-staging-backend.herokuapp.com/users/${id}`)
		dispatch({ type: GET_USER, payload: response.data})
		dispatch({ type: NOT_LOADING})
	}catch(err) {
		dispatch({ type: NOT_LOADING})
		console.log("ERROR: ", err)
	}
}



export const updateUserAboutInfo = async (id, dispatch, data) => {
	try {
		dispatch({ type: IS_LOADING})
		const response = await axios.put(`https://mentorpaired-staging-backend.herokuapp.com/users/${id}/`, data)
		console.log(response)
		dispatch({ type: GET_USER, payload: response.data})
		dispatch({ type: NOT_LOADING})
		fetchUserInfo(id, dispatch)
		return notify("About updated!", "success")
	}catch(err) {
		dispatch({ type: NOT_LOADING})
		console.log("ERROR: ", err)
	}
}