import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import SignIn from "./modules/sign/components/Signin"
import { useReducer } from 'react';
import PrivateRoute from './modules/shared/components/PrivateRoute';
import { reducer, initialState, StateContext } from './store';
import NotFoundPage from './components/404-page/404Page';

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
		</StateContext.Provider>
	);
}

export default App;
