import React from "react";
import SearchBar from "../../components/search-bar/SearchBar";
import TaskSection from "../../components/task-section/TaskSection";

import "./TaskList.scss";

const TaskPage = () => {
  const toDo = [
    { id: 1, text: "To study React fundamentals", done: false },
    { id: 2, text: "To study React fundamentals", done: false },
    { id: 3, text: "To study React fundamentals", done: false },
    { id: 4, text: "To study React fundamentals", done: false },
  ];

  const done = [{ id: 5, text: "To study React fundamentals", done: true }];

  return (
    <div className="container">
      <SearchBar />
      <div className="container__tasks">
        <TaskSection text="Tasks to do" tasks={toDo} />
        <TaskSection text="Done" tasks={done} />
      </div>
    </div>
  );
};

export default TaskPage;
