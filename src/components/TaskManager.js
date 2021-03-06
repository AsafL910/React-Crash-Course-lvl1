import Header from "./Header.js";
import Tasks from "./Tasks.js";
import Footer from "./Footer.js";
import { useState, useEffect } from "react";
import AddTask from "./AddTaskForm/AddTask.js";

function TaskManager() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const getTasks = async () => {
      setTasks(await fetchTasks());
    };
    getTasks();
  }, []);
  const fetchTasks = async () =>
    await (await fetch("http://localhost:5000/tasks")).json();

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });
    setTasks(await fetchTasks());
  };

  const toggleReminder = async (id) => {
    const oldTask = tasks.find((task) => task.id === id);
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...oldTask, reminder: !oldTask.reminder }),
    });
    setTasks(await fetchTasks());
  };

  const addTask = async (task) => {
    await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(task),
    });
    setTasks(await fetchTasks());
  };

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        buttonClick={() => setShowAddTask(!showAddTask)}
        showAddTask={showAddTask}
      />
      {showAddTask && <AddTask onSubmit={addTask} />}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      <Footer />
    </div>
  );
}

export default TaskManager;
