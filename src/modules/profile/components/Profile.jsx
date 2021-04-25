import React, { useContext } from 'react';
import { StateContext } from '../../../store';
import './profile.scss';
import UserDescription from './UserDescription';
import UserInfo from './UserInfo';

export default function Profile() {
	return (
		<div className='profile-container'>
			<UserInfo />
			<UserDescription />
		</div>
	);
}
