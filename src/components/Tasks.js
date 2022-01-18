import Task from './Task.js'

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        tasks.length > 0 ? 
        <div>
            {tasks.map(task => 
            <Task key={task.id} id={task.id} text={task.text} day={task.day} reminder={task.reminder} onToggle={onToggle} onDelete={onDelete} />
            )} 
        </div>
        : <h3>There are no tasks available</h3>
    )
}

export default Tasks
