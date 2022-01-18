import Header from "./components/Header.js";
import Tasks from "./components/Tasks.js";
import { useState, useEffect } from "react";
import AddTask from "./components/AddTaskForm/AddTask.js";

function App() {
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

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
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
    </div>
  );
}

export default App;
