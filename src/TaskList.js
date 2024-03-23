import React from 'react';

const TaskList = ({ tasks, onCompleteTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <ol key={index}>
          {task}
          <button onClick={() => onCompleteTask(index)}>Complete</button>
        </ol>
        
      ))}
    </ul>
  );
};

export default TaskList;
