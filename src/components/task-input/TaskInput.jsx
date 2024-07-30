import { useState } from "react";
import "./TaskInput.scss";

import plusIcon from "../../assets/icons/Plus.svg";

const TaskInput = ({ setToDo }) => {
  const [task, setTask] = useState("");

  const createTask = (event) => {
    event.preventDefault();

    if (!task) return;

    setToDo((old) => {
      const last = old.at(-1);
      return [...old, { id: last ? last.id + 5 : 1, text: task, done: false }];
    });

    setTask("");
  };

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  return (
    <form onSubmit={createTask} className="search">
      <input
        className="search__input"
        placeholder="Add a new task"
        value={task}
        onChange={handleChange}
      />
      <button type="submit" className="search__btn">
        <img src={plusIcon} alt="Add button" />
      </button>
    </form>
  );
};

export default TaskInput;
