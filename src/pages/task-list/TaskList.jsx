import React from "react";
import SearchBar from "../../components/search-bar/SearchBar";
import TaskSection from "../../components/task-section/TaskSection";

import "./TaskList.scss";

const TaskPage = () => {
  const toDo = [
    { id: 1, text: "To study React fundamentals" },
    { id: 2, text: "To study React fundamentals" },
    { id: 3, text: "To study React fundamentals" },
    { id: 4, text: "To study React fundamentals" },
  ];

  const done = [{ id: 5, text: "To study React fundamentals" }];

  return (
    <div className="main-tasks">
      <SearchBar />
      <TaskSection text="Tasks to do" tasks={toDo} />
      <TaskSection text="Done" tasks={done} />
    </div>
  );
};

export default TaskPage;
