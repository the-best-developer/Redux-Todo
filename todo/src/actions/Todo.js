export const ADD_TODO = 'ADD_TODO';
export const FINISH_TODO = 'FINISH_TODO';

export const addTodo = (e, todoItem) => {
  // Fill in this function
  e.preventDefault();
  return {
    type: ADD_TODO,
    payload: todoItem
  }
};

export const finishTodo = (e, id) => {
  // Fill in this function
  e.preventDefault();
  return {
    type: FINISH_TODO,
    payload: id
  }
};