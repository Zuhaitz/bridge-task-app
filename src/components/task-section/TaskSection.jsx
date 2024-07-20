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
          <Task text={task.text} />
        ))}
      </div>
    </div>
  );
};

export default TaskSection;
