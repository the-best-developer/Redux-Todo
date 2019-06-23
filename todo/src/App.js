import React from 'react';
import './App.css';
import TodoList from './components/TodoList'
import TodoSubmit from './components/TodoSubmit'

const App = _ => {
return (
      <div>
        <TodoList />
        <TodoSubmit />
      </div>
    );
}

export default App;