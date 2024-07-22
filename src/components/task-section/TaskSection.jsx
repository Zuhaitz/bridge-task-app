import React from "react";
import Task from "../task/Task";

const TaskSection = ({ text, tasks }) => {
  return (
    <div>
      <p>
        {text} - {tasks.length}
      </p>
      <div>
        {tasks.map((task) => (
          <Task task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskSection;
