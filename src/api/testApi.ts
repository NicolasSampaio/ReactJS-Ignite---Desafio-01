import { v4 as uuidv4 } from "uuid";

export interface Task {
  id: string;
  info: string;
  isCompleted: boolean;
}

// const tasks: Task[] = [
//   {
//     id: uuidv4(),
//     info: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
//     isCompleted: false,
//   },
//   {
//     id: uuidv4(),
//     info: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
//     isCompleted: true,
//   },
// ];

const tasks: Task[] = [];

export function getTasks(): Task[] {
  return tasks;
}

export function createNewTask(task: Task): void {
  tasks.push(task);
}
