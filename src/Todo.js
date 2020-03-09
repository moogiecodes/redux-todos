import React from 'react';

function Todo({ todoText, deleteTodo }) {
  return (
    <div>
      <h2>
        {todoText}
      </h2>
      <button onClick={deleteTodo}>X</button>
    </div>
  );
}

export default Todo;