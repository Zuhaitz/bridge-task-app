import { useState } from "react";
import TaskInput from "../../components/task-input/TaskInput";
import TaskSection from "../../components/task-section/TaskSection";

import "./TaskList.scss";

const TaskPage = () => {
  const initialValue = [
    { id: 1, text: "To study React fundamentals", done: false },
    { id: 2, text: "To study React fundamentals", done: false },
    { id: 3, text: "To study React fundamentals", done: false },
    { id: 4, text: "To study React fundamentals", done: false },
  ];
  const [toDo, setToDo] = useState(initialValue);

  const initialDone = [
    { id: 5, text: "To study React fundamentals", done: true },
  ];
  const [done, setDone] = useState(initialDone);

  return (
    <div className="container">
      <TaskInput setToDo={setToDo} />
      <div className="container__tasks">
        <TaskSection
          text="Tasks to do"
          tasks={toDo}
          setToDo={setToDo}
          setDone={setDone}
        />
        <TaskSection text="Done" tasks={done} />
      </div>
    </div>
  );
};

export default TaskPage;
