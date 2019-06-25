export const ADD_TODO = 'ADD_TODO';
export const FINISH_TODO = 'FINISH_TODO';
export const DEL_TODO = 'DEL_TODO'

export const addTodo = (e, todoItem) => {
  e.preventDefault();
  return {
    type: ADD_TODO,
    payload: todoItem
  }
};

export const finishTodo = (e, id) => {
  e.preventDefault();
  e.stopPropagation();
  return {
    type: FINISH_TODO,
    payload: id
  }
};

export const delTodo = (e, id) => {
  e.preventDefault();
  e.stopPropagation();
  return {
    type: DEL_TODO,
    payload: id
  }
};