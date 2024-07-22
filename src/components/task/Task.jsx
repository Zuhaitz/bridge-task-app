import React from "react";
import "./Task.scss";

import checkIcon from "../../assets/icons/Check.svg";
import trashIcon from "../../assets/icons/TrashSimple.svg";

const Task = ({ task }) => {
  const { id, text, done } = task;
  return (
    <div className="task">
      <p className={`${done ? "task__cross-text" : ""}`}>{text}</p>

      {!done && (
        <div className="task__btn-container">
          <button className="task__btn">
            <img src={checkIcon} alt="Mark task as done button" />
          </button>
          <button className="task__btn">
            <img src={trashIcon} alt="Delete task button" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Task;
