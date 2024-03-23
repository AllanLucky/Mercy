import React from 'react';

const CompletedTaskList = ({ completedTasks }) => {
  return (
    <ul>
      {completedTasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
};

export default CompletedTaskList;
