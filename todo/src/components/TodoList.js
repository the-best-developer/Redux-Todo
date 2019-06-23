import React from 'react';
import { connect } from 'react-redux';
import { finishTodo, delTodo } from '../actions/Todo'
import PropTypes from 'prop-types';

const TodoList = props => {
  return (
    <div>
      {props.todos.map((todoItem, id) => {
        return (
          <p key={id}>
            <span onClick={(e) => {props.finishTodo(e, id)}}>
              {todoItem.value} = completed: {`${todoItem.completed} `}
              
            </span>
            <button onClick={(e) => {props.delTodo(e,id)}}>X</button>
          </p>
        );
      })}
    </div>
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