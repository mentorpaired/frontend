import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../modules/dashboard/components/Dashboard';
import Messages from '../modules/dashboard/components/Messages';
import Navbar from '../modules/dashboard/components/navbar/Navbar';
import Profile from '../modules/dashboard/components/Profile';
import Sidebar from '../modules/dashboard/components/sidebar/Sidebar';
import ProfileContainer from '../modules/profile/containers/ProfileContainer';

const DashboardPage = () => {
	return (
		<div className='main-wrapper'>
			<Sidebar />
			<div className='page-wrapper'>
				<Navbar />
				<div className='page-content'>
					<Switch>
						<Route exact path='/' component={Dashboard} />
						<Route path='/profile' component={ProfileContainer} />
						<Route path='/messages' component={Messages} />
					</Switch>
				</div>
			</div>
		</div>
	);
};

export default DashboardPage;
