const INITIAL_STATE = {
  todos: []
}
// change todos key to payload 
// action { payload: { task: xxx }, type: xxx }
function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.todo] };
    case "DELETE_TODO":
      return { ...state, todos: state.todos.filter(t => t.id !== action.id) };
    default:
      return state;
  }
}

export default rootReducer;