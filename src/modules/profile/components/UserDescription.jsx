import React from 'react';
import AboutMe from './AboutMe';
import Goals from './Goals';
import Rating from './Rating';
import Reviews from './Reviews';
import './user_description.scss';

function UserDescription({ user }) {
	return (
		<div className='user-description'>
			<AboutMe position={user.position} aboutme={user.aboutme} />
			<Goals goals={user.goals} />
			<Reviews reviews={user.reviews}>
				<Rating
					rating={user.rating}
					section={'user-description'}
					votes={user.votes}
				/>
			</Reviews>
		</div>
	);
}

export default UserDescription;
