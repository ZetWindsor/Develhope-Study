import { useState } from 'react';

export function TodoList3() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(event) {
    event.preventDefault();

    const todo = event.target.elements.todo.value;

    setTodos((pippo) => [...pippo, todo]);

    event.target.elements.todo.value = '';
  }

  function handleResetTodos() {
    setTodos([]);
  }

  function handleRemoveTodo(index) {
    setTodos((pippo) => {
      const updatedTodos = [...pippo];
      updatedTodos.splice(index, 1);
      return updatedTodos;
    });
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input data-testid="todo-input" name="todo" />
        <button type="submit">Add</button>
      </form>
      <button onClick={handleResetTodos}>Reset</button>

      <ul data-testid="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={handleRemoveTodo}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
