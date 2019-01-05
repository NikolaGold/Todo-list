import * as React from 'react';
import './App.css';
import ToDoList from './todolist/todolist';

class App extends React.Component {
  public render() {
    return (
      <div>
        <header>
        <ToDoList />
        </header>
      </div>
    );
  }
}

export default App;
