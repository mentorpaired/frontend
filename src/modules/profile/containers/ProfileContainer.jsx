import React, { useContext } from 'react';
import { UserContext } from '../../../store';
import Profile from '../components/Profile';

function ProfileContainer() {
	const context = useContext(UserContext);

	return <Profile user={context.state.user} />;
}

export default ProfileContainer;
