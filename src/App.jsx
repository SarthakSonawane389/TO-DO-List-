import "./App.css";
import { useState,useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState(()=>
  {
    const savedtasks = localStorage.getItem("tasks");
    return savedtasks ? JSON.parse(savedtasks) : [];
  }
  );
useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);


  const addTask = (taskText) => {
    const exists = tasks.some((task)=> task.text.toLowerCase() === taskText.toLowerCase());
    if(exists) return;
    return setTasks([...tasks, {text : taskText, completed : false}]);
  };

  const deleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter(
      (_, index) => index !== indexToDelete
    );
    setTasks(updatedTasks);
  };
  const toggleTask = (indextoToggle)=>{ 
    const updatedTasks = tasks.map((task, index) => 
      index === indextoToggle ? {...task,completed: !task.completed} : task
  );
    setTasks(updatedTasks);
  }
    
        return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} onToggleTask={toggleTask} />
    </div>
  );
}

export default App;
