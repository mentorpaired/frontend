import React from 'react';
import appLogo from '../../../assets/svg/applogo.svg';

const Logo = ({ className }) => {
	return (
		<img src={appLogo} alt='Mentorpaired app logo' className={className} />
	);
};
export default Logo;
