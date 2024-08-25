import React from "react";
import TaskPage from "./pages/task-list/TaskList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <main>
        <TaskPage />
      </main>
    </GlobalProvider>
  );
}

export default App;
