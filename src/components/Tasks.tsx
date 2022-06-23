import { TasksEmpty } from "./TasksEmpty";

import { Task } from "../api/testApi";

import { CheckCircle, Circle } from "phosphor-react";
import trashNotHoverImg from "../assets/trash.svg";
import trashHoverImg from "../assets/trashHover.svg";

import styles from "./Tasks.module.css";
import { useState } from "react";

interface TasksProps {
  tasks: Task[];
  onSetTasks: (tasks: Task[]) => void;
}

export function Tasks({ tasks, onSetTasks }: TasksProps) {
  function handleCheckTask(task: Task) {
    task.isCompleted = true;

    onSetTasks([...tasks]);
  }

  function handleUncheckTask(task: Task) {
    task.isCompleted = false;

    onSetTasks([...tasks]);
  }

  function handleDeleteTask(task: Task) {
    tasks.splice(tasks.indexOf(task), 1);

    onSetTasks([...tasks]);
  }

  return (
    <div className={styles.tasks}>
      <div className={styles.info}>
        <div>
          <span className={styles.criadas}>Tarefas Criadas</span>
          <span className={styles.counter}>{tasks.length}</span>
        </div>
        <div>
          <span className={styles.concluidas}>Concluídas</span>
          <span className={styles.counter}>
            {tasks.filter((task) => task.isCompleted === true).length} de{" "}
            {tasks.length}
          </span>
        </div>
      </div>

      {tasks.length === 0 ? (
        <TasksEmpty />
      ) : (
        <>
          {tasks.map((task) => {
            return (
              <div className={styles.task} key={task.id}>
                {task.isCompleted ? (
                  <div className={styles.divCheckbox}>
                    <CheckCircle
                      className={styles.checkboxChecked}
                      size={24}
                      color="#5e60ce"
                      weight="fill"
                      onClick={() => handleUncheckTask(task)}
                    />
                    <span
                      className={styles.whiteBackgroundCheckCircle}
                      onClick={() => handleUncheckTask(task)}
                    ></span>
                  </div>
                ) : (
                  <div className={styles.divCheckbox}>
                    <Circle
                      className={styles.checkboxNotChecked}
                      size={24}
                      color="#4ea8de"
                      onClick={() => handleCheckTask(task)}
                    />
                  </div>
                )}

                <p className={task.isCompleted ? styles.pTaskChecked : ""}>
                  {task.info}
                </p>

                <span
                  className={styles.trashIcon}
                  onClick={() => handleDeleteTask(task)}
                ></span>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
