import React from "react";
import SearchBar from "../components/search-bar/SearchBar";
import Section from "../components/section/Section";

const TaskPage = () => {
  return (
    <div className="main-tasks">
      <SearchBar />
      <Section text="Tasks to do" />
      <Section text="Done" />
    </div>
  );
};

export default TaskPage;
