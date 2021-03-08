import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { StateContext } from '../../../store';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { state } = useContext(StateContext);

	return (
		<Route
			{...rest}
			render={(props) =>
				state.loggedIn ? <Component {...props} /> : <Redirect to='/signin' />
			}
		/>
	);
};

export default PrivateRoute;
