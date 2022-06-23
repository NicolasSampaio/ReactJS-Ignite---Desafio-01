import { useState } from "react";

import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { Tasks } from "./components/Tasks";

import { getTasks, Task } from "./api/testApi";

import styles from "./App.module.css";

export function App() {
  const [tasks, setTasks] = useState<Task[]>(getTasks());

  function createNewTask(task: Task) {
    setTasks([...tasks, task]);
  }

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <NewTask onNewTask={createNewTask} />
        <Tasks tasks={tasks} onSetTasks={setTasks} />
      </main>
    </>
  );
}
