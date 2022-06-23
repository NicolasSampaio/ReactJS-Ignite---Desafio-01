import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Task } from "../api/testApi";

import plusImg from "../assets/plus.svg";

import styles from "./NewTask.module.css";

interface NewTaskProps {
  onNewTask: (task: Task) => void;
}

export function NewTask({ onNewTask }: NewTaskProps) {
  const [newTask, setNewTask] = useState("");

  function handleNewTaskChange(event: React.FormEvent<HTMLInputElement>) {
    setNewTask(event.currentTarget.value);
  }

  function handleNewTaskKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    if (event.key === "Enter") {
      handleCreateNewTask();
    }
  }

  function handleCreateNewTask() {
    if (newTask.trim() !== "") {
      onNewTask({ id: uuidv4(), info: newTask, isCompleted: false });
      setNewTask("");
    }
  }

  return (
    <div className={styles.newTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        onChange={handleNewTaskChange}
        onKeyDown={handleNewTaskKeyDown}
      />
      <button onClick={handleCreateNewTask}>
        Criar <img src={plusImg} />
      </button>
    </div>
  );
}
