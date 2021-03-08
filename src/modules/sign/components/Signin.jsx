import React from 'react';
import Logo from '../icons/logo';
import AmazonLogo from '../icons/amazonlogo';
import AirbnbLogo from '../icons/airbnblogo';
import UberLogo from '../icons/uberlogo';
import MicrosoftLogo from '../icons/mslogo';
import NetflixLogo from '../icons/netflixlogo';
import './SignIn.css';
import LogInContainer from '../containers/LoginContainer';

const SignIn = () => {
	return (
		<div className='container'>
			<div>
				<Logo className='svg_logo' />
			</div>
			<div className='centered_div'>
				<p className='sign_in_text'>Sign In</p>
				<p className='more_text'>
					You are one step away from connecting with the
					<br />
					mentor or mentee of your dreams
				</p>
			</div>

			<LogInContainer />
			<p className='bottom_text'>Trusted by Tech Companies around the world</p>

			<div className='logo_div'>
				<AmazonLogo className='svg_amazon brand_logo' />
				<AirbnbLogo className='svg_airbnb brand_logo' />
				<UberLogo className='svg_uber brand_logo' />
				<NetflixLogo className='svg_netflix brand_logo' />
				<MicrosoftLogo className='svg_microsoft brand_logo' />
			</div>
		</div>
	);
};

export default SignIn;
