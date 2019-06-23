import React from 'react';
import { connect } from 'react-redux';
import { finishTodo } from '../actions/Todo'
import PropTypes from 'prop-types';

const TodoList = props => {
  return (
    <div>
      {props.todos.map((todoItem, id) => {
        return (
          <p key={id} onClick={(e) => {props.finishTodo(e, id)}}>
            {todoItem.value} = completed: {`${todoItem.completed}`}
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

  export default connect(mapStateToProps, { finishTodo })(TodoList);