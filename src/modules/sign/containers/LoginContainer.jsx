import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { logIn } from '../../../actions/auth.actions';
import { StateContext } from '../../../store';
import GitSignIn from '../components/SignInButtons';

const LogInContainer = (props) => {
	const { dispatch } = useContext(StateContext);
	const history = useHistory();
	useEffect(() => {
		const url = window.location.href;
		if (url.includes('code')) {
			let token = url.slice(url.indexOf('=') + 1);
            token = token.includes("&state=gitlab") ? token.replace("&state=gitlab","") : token
			const isGitlab = url.includes('gitlab');
			logIn(token, dispatch, history, isGitlab);
		}
	}, []);

	return <GitSignIn />;
};

export default LogInContainer;
