import { motion } from "framer-motion";
import React from "react";
function TaskItem({task,index,onDeleteTask,onToggleTask}) {
    return(
        <>
         <motion.li  initial={{ opacity: 0, y: -10 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: 10 }}
                     transition={{ duration: 0.2 }} key={index}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleTask(index)}
          />

          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {task.text}
          </span>

          <button style={{marginLeft:"10px"}} onClick={() => onDeleteTask(index)}>
            Delete
          </button>
        </motion.li>
        </>
    )
}
export default TaskItem;
