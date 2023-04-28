import { useState, useEffect } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = async (title, taskDesc) => {
    const response = await axios.post("http://localhost:3000/tasks", {
      title,
      taskDesc,
    });
    //console.log(response)
    // console.log(title,taskDesc);
    const createdTasks = [...tasks, response.data];
    setTasks(createdTasks);
  };

  const getTasks = async () => {
    const response = await axios.get("http://localhost:3000/tasks");
    console.log(response);
    setTasks(response.data);
  };
  useEffect(() => {
    getTasks();
  }, []);

  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    // console.log(id)
    const aferDeleteTask = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(aferDeleteTask);
  };
  const updateTaskById = async (id, updatedTitle, updatedTaskDesc) => {
    await axios.put(`http://localhost:3000/tasks/${id}`,{
      title:updatedTitle,
      taskDesc:updatedTaskDesc
    });
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, taskDesc: updatedTaskDesc };
      }
      return task;
    });
    setTasks(updatedTasks);
  };
  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1 className="task-header">My Tasks</h1>
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={updateTaskById}
      />
    </div>
  );
}

export default App;
