import React from "react";
import "./Task.scss";

import checkIcon from "../../assets/icons/Check.svg";
import trashIcon from "../../assets/icons/TrashSimple.svg";

const Task = ({ task, setToDo, setDone }) => {
  const { _id, text, completed } = task;

  const handleComplete = () => {
    task.completed = true;

    setToDo((old) => old.filter((task) => task._id !== _id));
    setDone((old) => [task, ...old]);
  };

  const handleDelete = () => {
    setToDo((old) => old.filter((task) => task._id !== _id));
  };

  return (
    <div className="task">
      <p className={`${completed ? "task__cross-text" : ""}`}>{text}</p>

      {!completed && (
        <div className="task__btn-container">
          <button onClick={handleComplete} className="task__btn">
            <img src={checkIcon} alt="Mark task as done button" />
          </button>
          <button onClick={handleDelete} className="task__btn">
            <img src={trashIcon} alt="Delete task button" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Task;
