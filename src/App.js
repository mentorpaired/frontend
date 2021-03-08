import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import SignIn from './modules/sign/components/SignIn';
import { useReducer } from 'react';
import PrivateRoute from './modules/shared/components/PrivateRoute';
import { reducer, initialState, StateContext } from './store';

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
				</Switch>
			</BrowserRouter>
		</StateContext.Provider>
	);
}

export default App;
