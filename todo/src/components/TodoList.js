import React from 'react';
import { connect } from 'react-redux';
import { finishTodo, delTodo } from '../actions/Todo'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const TodoListContainer = styled.div`
    display: flex;
    flex-direction: column
    align-items: center;
`;

const StyledP = styled.p`
    min-width: 350px;
    min-height: 30px;
    background-color: lightgrey;
    text-align: center;
    padding: 10px 5px 0 5px;
    border-radius: 10px;

    ${props => (props.completed ? `background-color: lightgreen;` : null)}
`;

const StyledSpan = styled.span`
    margin: 0 5px;
`;

const TodoList = props => {
  return (
    <TodoListContainer>
      {props.todos.map((todoItem, id) => {
       return (
            <StyledP completed={todoItem.completed} key={id} onClick={(e) => {props.finishTodo(e, id)}}>
              <StyledSpan>
                {todoItem.value}
              </StyledSpan>
              <button onClick={(e) => {props.delTodo(e,id)}}>X</button>
            </StyledP>
          );
        
      })}
    </TodoListContainer>
  );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    finishTodo: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
  };

  export default connect(mapStateToProps, { finishTodo, delTodo })(TodoList);