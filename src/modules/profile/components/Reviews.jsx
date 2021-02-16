import React, { useState } from 'react';
import RatingComments from './RatingComments';
import filterIcon from '../../../assets/svg/filter-btn.svg';
import DropdownButton from './DropdownButton';
import Dropdown from './Dropdown';

function Reviews({ reviews, children }) {
	const [dropdownDisplay, setDropdownDisplay] = useState(true);

	function handleClick() {
		console.log('Clicked');
		setDropdownDisplay(!dropdownDisplay);
	}
	return (
		<div className='user-description--reviews user-description--section'>
			<div className='user-description--header-wrapper'>
				<div className='user-description--reviews-header'>
					<h2 className='user-description--title'>Reviews</h2>
					<Dropdown
						dropdownDisplay={dropdownDisplay}
						handleClick={handleClick}
					/>
				</div>
				<button className='user-description--button'></button>
				{children}
			</div>
			{reviews.map((review) => (
				<div key={review.name} className='user-description--review'>
					<a
						href={review.profileLink}
						className='user-description--review-profile-link'>
						<img
							src={review.profilePic}
							className={'user-description--review-pic'}
							alt='Reviewing user'
						/>
					</a>
					<div className='user-description--review-text'>
						<div className='user-description--review-heading'>
							<p className={'user-description--review-name'}>
								<a href={review.profileLink}>{review.name}</a>
							</p>
							<RatingComments rating={review.rating} />
							<p className='user-description--review-date'>{review.date}</p>
						</div>
						<p className='user-description--review-comment'>{review.comment}</p>
					</div>
				</div>
			))}
		</div>
	);
}

export default Reviews;
