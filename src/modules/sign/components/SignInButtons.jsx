import React, { useContext } from 'react';
import github from '../../../../src/assets/svg/github.svg';
import gitlab from '../../../../src/assets/svg/gitlab.svg';
import { StateContext } from '../../../store';

function GitSignIn() {
	const { dispatch } = useContext(StateContext);
	return (
		<div className='git'>
			<a
				href={`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_GITLAB_REDIRECT_URI}&scope=user`}
				id='button'
				className='button'
				onClick={() => dispatch({ type: 'CLEAR_GITLAB_AUTH' })}>
				<img src={github} alt='' />
				<span className='button-text'>Continue with GitHub</span>
			</a>
			<br />
			<a
				className='button'
				href={`https://gitlab.com/oauth/authorize?client_id=${process.env.REACT_APP_GITLAB_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_GITLAB_REDIRECT_URI}&response_type=code&scope=read_user+profile&state=gitlab`}
				onClick={() => dispatch({ type: 'GITLAB_AUTH' })}>
				<img src={gitlab} alt='' />
				<span className='button-text'>Continue with Gitlab</span>
			</a>
		</div>
	);
}

export default GitSignIn;
