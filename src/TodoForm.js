import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';


const INITIAL_STATE = { todo: "" };

function TodoForm({ addTodo }) {
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));

  };

  const handleSubmit = e => {
    e.preventDefault();
    addTodo({ ...formData, id: uuid() });
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">Todo: </label>
      <input
        id="todo"
        name="todo"
        onChange={handleChange}
        value={formData.todo}
      />
      <button>Add Todo!</button>
    </form>
  );
}

export default TodoForm;