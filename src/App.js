import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import SignIn from "./modules/sign/components/Signin"
import { useReducer } from 'react';
import PrivateRoute from './modules/shared/components/PrivateRoute';
import { reducer, initialState, StateContext } from './store';
import NotFoundPage from './components/404-page/404Page';
import { setAuthToken } from './utils/misc.utils';
import jwt_decode from "jwt-decode";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

if (localStorage.access_token) {
	// Set auth token header auth
	setAuthToken(localStorage.access_token);
	// Decode token and get user info and exp
	const decoded = jwt_decode(localStorage.access_token);
	//checks if the access token is expired to refresh it
	const currentTime = Date.now() / 1000;
	if (decoded.exp < currentTime) {
		axios.post("http://mentorpaired-staging-backend.herokuapp.com/api/token/refresh/", {
			refresh: localStorage.refresh_token
		})
	}
}


function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<StateContext.Provider value={{ state: state, dispatch: dispatch }}>
			<BrowserRouter>
				<Switch>
					<PrivateRoute exact path='/' component={DashboardPage} />
					<PrivateRoute path='/profile' component={DashboardPage} />
					<PrivateRoute path='/messages' component={DashboardPage} />
					<Route path='/signin' component={SignIn} />
					<Route component={NotFoundPage}/>
				</Switch>
			</BrowserRouter>
			<ToastContainer />
		</StateContext.Provider>
	);
}

export default App;
