import React, { useReducer } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import SignIn from './modules/sign/components/Signin';
import { initialState, reducer, UserContext } from './store';

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<BrowserRouter>
			<UserContext.Provider value={{ state: state, dispatch: dispatch }}>
				<Switch>
					<Route exact path='/' component={DashboardPage} />
					<Route path='/profile' component={DashboardPage} />
					<Route path='/messages' component={DashboardPage} />
					<Route path='/signin' component={SignIn} />
				</Switch>
			</UserContext.Provider>
		</BrowserRouter>
	);
}

export default App;
