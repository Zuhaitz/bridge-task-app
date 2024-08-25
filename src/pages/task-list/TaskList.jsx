import { useContext, useEffect, useState } from "react";
import TaskInput from "../../components/task-input/TaskInput";
import TaskSection from "../../components/task-section/TaskSection";
import { GlobalContext } from "../../context/GlobalState";

import "./TaskList.scss";

const TaskPage = () => {
  const { tasks, getTasks } = useContext(GlobalContext);
  const [toDo, setToDo] = useState([]);
  const [done, setDone] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  useEffect(() => {
    setToDo(tasks.filter((task) => task.completed == false));
    setDone(tasks.filter((task) => task.completed == true));

    console.log(toDo);
  }, [tasks]);

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
