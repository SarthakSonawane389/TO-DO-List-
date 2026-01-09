import { AnimatePresence } from "framer-motion";
import TaskItem from "./TaskItem";
function TaskList({ tasks, onDeleteTask, onToggleTask }) {
  if(tasks.length === 0){
    return <p>no tasks added yet</p>
  }
  return (
    <ul>
      <AnimatePresence>
      {tasks.map((task, index) => (
       <TaskItem
        task={task}
        index={index}
        onDeleteTask={onDeleteTask}
        onToggleTask={onToggleTask}
       />
      ))}
      </AnimatePresence>
    </ul>
  );
}

export default TaskList;
