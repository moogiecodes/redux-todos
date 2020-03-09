import React from 'react';
import TodoForm from './TodoForm';
import { useSelector, useDispatch } from 'react-redux';
import Todo from './Todo';

function TodoContainer() {
  const todos = useSelector(s => s.todos);
  const dispatch = useDispatch();

  const addTodo = (newTodo) => {
    dispatch({ type: "ADD_TODO", todo: newTodo });
  }

  const deleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", id });
  }

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <ul>
        {todos.map(t =>
          <li key={t.id}>
            <Todo
              todoText={t.todo}
              deleteTodo={() => deleteTodo(t.id)} />
          </li>)}
      </ul>
    </div>
  );
}

export default TodoContainer;