// TodoItem.js
import React from 'react';

const TodoItem=({ text }) =>{
  return <div>{text}</div>;
}

export default TodoItem;




// TodoList.js
import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList=() =>{
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([todos, { text: newTodo }]);
      setNewTodo('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new todo"
      />
      <button onClick={handleAddTodo}>Add</button>
      <div>
        {todos.map((todo, index) => (
          <TodoItem key={index} text={todo.text} />
        ))}
      </div>
    </div>
  );
}


