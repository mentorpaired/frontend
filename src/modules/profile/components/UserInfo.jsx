import React, { useContext } from 'react';
import MentorButton from './MentorButton';
import Rating from './Rating';
import editIcon from '../../../assets/svg/edit-btn.svg';
import locationIcon from '../../../assets/svg/location.svg';
import './user_info.scss';
import { StateContext } from '../../../store';

function UserInfo() {
	const { state: {user}} = useContext(StateContext)
	// const gMapsAddress = user.address.replace(',', '').replace(' ', '+');

	return (
		<div className='user-info'>
			<div className='user-info--pic-container'>
				<button className='user-info--edit-btn'>
					<img src={editIcon} className={'user-info--edit-btn-icon'} alt='' />
				</button>
				<img src={user.avatar} className='user-info--pic' alt='User profile' />
				<div className={'user-info--online'} />
			</div>
			<h2 className='user-info--name'>{user?.username}</h2>
			<a
				href={`https://www.google.com/maps/place/${null}/`}
				target={'_blank'}
				rel='noreferrer'
				className='user-info--address'>
				<div className={'user-info--address-text'}>
					<img
						className={'user-info--map-marker'}
						src={locationIcon}
						alt='Location pin'
					/>
					Munich, Dominicana
				</div>
			</a>
			<Rating rating="5.0" section={'user-info'} votes="20" />
			<MentorButton />
		</div>
	);
}

export default UserInfo;
