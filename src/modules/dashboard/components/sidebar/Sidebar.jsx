import React, { useState } from 'react';
import './sidebar.styles.scss';
import { Link, withRouter } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../../assets/svg/logo.svg';
import DashboardIcon from '../sidebar-icons/DashboardIcon';
import ProfileIcon from '../sidebar-icons/ProfileIcon';
import MessageIcon from '../sidebar-icons/MessageIcon';
import Modal from '../modal/Modal';

const Sidebar = (props) => {
	const [visible, setVisible] = useState(false)
	const makeModalVisible = () => {
		setVisible(true)
	}
	const hideModal = () => {
		setVisible(false)
	}
	return (
		<div className='sidebar'>
			{ visible ? (<Modal hideModal={hideModal}/>) : null}
			<div className='sidebar-header'>
				<div className='sidebar-logo'>
					<Link to='#' className='sidebar-brand'>
						<Logo />
					</Link>
				</div>
			</div>
			<div className='sidebar-body ps'>
				<div className="flex-container">
				<ul className='nav'>
					<li
						className={`nav-item ${
							props.match.url === '/' ? 'nav-item-active' : ''
						}`}>
						<Link to='/'>
							<DashboardIcon active={props.match.url === '/' ? true : false} />
						</Link>
					</li>
					<li
						className={`nav-item ${
							props.match.url === '/profile' ? 'nav-item-active' : ''
						}`}>
						<Link to='/profile'>
							<ProfileIcon
								active={props.match.url === '/profile' ? true : false}
							/>
						</Link>
					</li>
					<li
						className={`nav-item ${
							props.match.url === '/messages' ? 'nav-item-active' : ''
						}`}>
						<Link to='/messages'>
							<MessageIcon
								active={props.match.url === '/messages' ? true : false}
							/>
						</Link>
					</li>
				</ul>
				<button onClick={makeModalVisible} className='btn-req'>Request a mentor</button>
				</div>
			</div>
		</div>
	);
};

export default withRouter(Sidebar);
