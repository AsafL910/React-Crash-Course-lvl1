import Header from './components/Header.js'
import Tasks from './components/Tasks.js'
import { useState } from 'react'
import AddTask from './components/AddTask.js'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Task1',
        day: 'Feb 5th at 2:30pm',
        reminder:  true
    },
    {
        id: 2,
        text: 'Task2',
        day: 'Feb 6th at 1:30pm',
        reminder:  true
    }
    ,
    {
        id: 3,
        text: 'Task3',
        day: 'Feb 8th at 9:00am',
        reminder:  false
    }])

    const deleteTask = (id) => {
      setTasks(tasks.filter(task => task.id !== id))
    }

    const toggleReminder = (id) => {
      setTasks(tasks.map(task => task.id ===id ?  { ...task , reminder: !task.reminder} : task))
    }

  return (
    <div className='container'>
      <AddTask/>
      <Header title='Task Tracker' />
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
    </div>
  );
}

export default App;
