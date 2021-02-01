import React, { useReducer } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import SignIn from './modules/sign/components/Signin';

export const UserContext = React.createContext();

const initialState = {
	user: {
		online: true,
		name: 'Miguel Cervantes',
		profileImg: '',
		address: 'Munich, Dominicana',
		rating: '5.0',
		votes: 20,
		position: 'Junior Frontend Developer',
		aboutme:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat molestiae, unde doloremque error voluptates nisi eligendi ullam a. Voluptates aperiam molestias eius culpa. Adipisci non recusandae aut, molestiae aliquam ad! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat molestiae, unde doloremque error voluptates nisi eligendi ullam a. Voluptates aperiam molestias eius culpa. Adipisci non recusandae aut, molestiae aliquam ad!',
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
	},
};

const reducer = (state, { type, payload }) => {
	switch (type) {
		default:
			return state;
	}
};

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<BrowserRouter>
			<UserContext.Provider value={{ state: state, dispatch: dispatch }}>
				<Switch>
					<Route exact path='/' component={DashboardPage} />
					<Route path='/profile' component={DashboardPage} />
					<Route path='/messages' component={DashboardPage} />
					<Route path='/signin' component={SignIn} />
				</Switch>
			</UserContext.Provider>
		</BrowserRouter>
	);
}

export default App;
