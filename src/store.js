import { createContext } from 'react';
import * as action from './actions/actionTypes';

export const reducer = (state, { type, payload }) => {
	switch (type) {
		case action.LOGIN:
			return { ...state, loading: true /*user:{}*/ };

		case action.LOGIN_SUCCESS:
			return {
				...state,
				user: payload,
				loading: false,
				loggedIn: localStorage.getItem('loggedIn') === 'true',
			};

		case action.LOGIN_FAILED:
			return { ...state, user: {}, error: payload, loading: false };
		
		case action.IS_LOADING:
			return {
				...state,
				loading: true
			}
		
		case action.NOT_LOADING:
			return {
				...state,
				loading: false
			}

		case action.GET_USER:
			return {
				...state,
				user: payload
			}
		default:
			return state;
	}
};
export const initialState = {
	loggedIn: localStorage.getItem('loggedIn') === 'true',
	user: {},
	goals: [
		{
			title: 'Learn JavaScript',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat molestiae, unde doloremque error voluptates nisi eligendi ullam a. Voluptates aperiam molestias eius culpa. Adipisci non recusandae aut, molestiae aliquam ad! Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
		},
		{
			title: 'Learn React',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat molestiae, unde doloremque error voluptates nisi eligendi ullam a. Voluptates aperiam molestias eius culpa. Adipisci non recusandae aut, molestiae aliquam ad! Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
		},
		{
			title: 'Learn Git',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat molestiae, unde doloremque error voluptates nisi eligendi ullam a. Voluptates aperiam molestias eius culpa. Adipisci non recusandae aut, molestiae aliquam ad! Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
		},
	],
	reviews: [
		{
			profilePic: 'https://via.placeholder.com/50',
			name: 'Perencejo Dom',
			profileLink: '#',
			rating: '5.0',
			date: 'Nov 2020',
			comment:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat molestiae, unde doloremque error voluptates nisi eligendi ullam a. Voluptates aperiam molestias eius culpa. Adipisci non recusandae aut, molestiae aliquam ad! Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
		},
		{
			profilePic: 'https://via.placeholder.com/50',
			name: 'Juan Don',
			profileLink: '#',
			rating: '5.0',
			date: 'Nov 2020',
			comment:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat molestiae, unde doloremque error voluptates nisi eligendi ullam a. Voluptates aperiam molestias eius culpa. Adipisci non recusandae aut, molestiae aliquam ad! Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
		},
		{
			profilePic: 'https://via.placeholder.com/50',
			name: 'Piolin',
			profileLink: '#',
			rating: '5.0',
			date: 'Nov 2020',
			comment:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat molestiae, unde doloremque error voluptates nisi eligendi ullam a. Voluptates aperiam molestias eius culpa. Adipisci non recusandae aut, molestiae aliquam ad! Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
		},
	],
	loading: false,
	error: '',
	isGitlabAuth: false,
};

export const StateContext = createContext(initialState);
