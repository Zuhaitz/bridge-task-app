import React from "react";
import Task from "../task/Task";

import "./TaskSection.scss";

const TaskSection = ({ text, tasks }) => {
  return (
    <div className="task-container">
      <p className="task-container__title">
        {text} - {tasks.length}
      </p>
      <div className="task-container__list">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskSection;
