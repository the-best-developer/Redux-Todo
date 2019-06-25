import React from 'react';
import './App.css';
import TodoList from './components/TodoList'
import TodoSubmit from './components/TodoSubmit'
import styled from 'styled-components'

const MainContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const App = _ => {
  return (
    <MainContainer>
      <h1>Redux Todo List!!!</h1>
      <TodoSubmit />
      <TodoList />
    </MainContainer>
  );
}

export default App;