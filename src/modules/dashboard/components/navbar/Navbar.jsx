import React, { useContext, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './navbar.styles.css';
import { ReactComponent as BellLogo } from '../../../../assets/svg/bell.svg';
import { StateContext } from '../../../../store';
import { fetchUserInfo } from '../../../../actions/auth.actions';
import jwt_decode from "jwt-decode";

const Navbar = (props) => {
	const { dispatch, state } = useContext(StateContext)
	const { user_id } = jwt_decode(localStorage.access_token)
	useEffect(() => {
		fetchUserInfo(user_id, dispatch)
	},[]) 
	const { user } = state
	return (
		<div className='navbar'>
			<ul
				className={`header-nav  ${
					props.match.url === '/profile' ? 'hide-nav' : ''
				}`}>
				<li className='header-nav-item'>
					<Link to='#' className='active'>
						{' '}
						Requests
					</Link>
					<span className='span-active'>24</span>
				</li>
				<li className='header-nav-item'>
					<Link to='#' className=''>
						{' '}
						Suggestions
					</Link>
					<span className=''>24</span>
				</li>
				<li className='header-nav-item'>
					<Link to='#' className=''>
						{' '}
						Matches
					</Link>
					<span className=''>24</span>
				</li>
			</ul>
			<div className='profile-nav'>
				<div className='bell'>
					<BellLogo />
					<div className='space'></div>
				</div>
				<div className='profile'>
					<p>{user.username}</p>
					<div className='profile-img'>
						<img src={user.avatar} alt='' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default withRouter(Navbar);
