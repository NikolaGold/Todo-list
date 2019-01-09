import * as React from 'react';
import './App.css';
import TodoList from './todo-list/Todo-list';

class App extends React.Component {
	public render() {
		return (
			<div>
				<header>
					<TodoList />
				</header>
			</div>
		);
	}
}

export default App;
