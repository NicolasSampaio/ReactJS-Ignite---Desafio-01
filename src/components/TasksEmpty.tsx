import clipboardImg from "../assets/clipboard.svg";

import styles from "./TasksEmpty.module.css";

export function TasksEmpty() {
  return (
    <div className={styles.tasksEmpty}>
      <img src={clipboardImg} alt="Empty Notebook" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <br />
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
}
