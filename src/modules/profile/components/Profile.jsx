import React, { useContext } from 'react';
import { Loading } from '../../../components/Loading';
import { StateContext } from '../../../store';
import './profile.scss';
import UserDescription from './UserDescription';
import UserInfo from './UserInfo';

export default function Profile() {
	const { state } = useContext(StateContext)
	return state.loading ? ( <Loading/>) : (
		<div className='profile-container'>
			<UserInfo />
			<UserDescription />
		</div>
	);
}
