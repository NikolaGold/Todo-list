import * as React from 'react';
import './App.css';
import TodoList from './Todo-list/Todo-list';

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
