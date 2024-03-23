import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import CompletedTaskList from './CompletedTaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleCompleteTask = (index) => {
    const completedTask = tasks[index];
    setCompletedTasks([...completedTasks, completedTask]);
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <TaskInput onAddTask={handleAddTask} />
      <h2>Tasks for Today:</h2>
      <TaskList tasks={tasks} onCompleteTask={handleCompleteTask} />
      <h2>Completed Tasks:</h2>
      <CompletedTaskList completedTasks={completedTasks} />
    </div>
  );
};

export default App;
