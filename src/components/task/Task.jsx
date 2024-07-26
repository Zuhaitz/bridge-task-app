import React from "react";
import "./Task.scss";

import checkIcon from "../../assets/icons/Check.svg";
import trashIcon from "../../assets/icons/TrashSimple.svg";

const Task = ({ task, setToDo, setDone }) => {
  const { id, text, done } = task;

  const handleComplete = () => {
    task.done = true;
    console.log(task);
    setToDo((old) => old.filter((task) => task.id !== id));
    setDone((old) => [task, ...old]);
  };

  const handleDelete = () => {
    console.log(task);
    setToDo((old) => old.filter((task) => task.id !== id));
  };

  return (
    <div className="task">
      <p className={`${done ? "task__cross-text" : ""}`}>{text}</p>

      {!done && (
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
