import React from 'react';
import AboutMe from './AboutMe';
import Goals from './Goals';
import Rating from './Rating';
import Reviews from './Reviews';
import './user_description.scss';

function UserDescription({ user }) {
	return (
		<div className='user-description'>
			<AboutMe position="Junior Frontend Developer"/>
			<Goals/>
			<Reviews>
				<Rating
					rating="5.0"
					section={'user-description'}
					votes="20"
				/>
			</Reviews>
		</div>
	);
}

export default UserDescription;
