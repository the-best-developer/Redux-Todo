import { FINISH_TODO, ADD_TODO } from '../actions/Todo';

const initialState = {
  todos: []
}

let newTodos = [];

export default (state = initialState, action) => {
  newTodos = [...state.todos];
  switch (action.type) {
    case FINISH_TODO:
      // 1. Check if newTodos has items to delete
      // 2. Check if payload is a valid position in the array 
      // 3. If both true, evaluate a toggle of the completed the item on the object
      (((newTodos.length > 0) && (action.payload > -1)) &&
        (newTodos[action.payload].completed = !newTodos[action.payload].completed)
      );
      return ({todos: newTodos})

    case ADD_TODO:
      //Check if payload is valid, if so add value(todo) to the array
      ((action.payload) && 
        newTodos.push({value: action.payload, completed: false})
      )
      return ({todos: newTodos})

    default:
      return state;
  }
};