import React, { useContext } from 'react';
import { StateContext } from '../../../store';
import Profile from '../components/Profile';

function ProfileContainer() {
	const context = useContext(StateContext);

	return <Profile user={context.state.user} />;
}

export default ProfileContainer;
