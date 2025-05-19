    import {useState} from 'react'

    function TodoList({initialTasks}) {
        const [tasks, setTasks] = useState(initialTasks);
        const [newTask, setNewTask] = useState('');
        const [searchTerm, setSearchTerm] = useState('');
        const [doneTasks, setDoneTasks] = useState([]);   
        const [newTaskPriority, setNewTaskPriority] = useState('medium');  
        const deleteTask = (index) => {
            const newTasks = [...tasks]; // Copie du tableau
            newTasks.splice(index, 1);   // Supprime 1 élément à la position index
            setTasks(newTasks);
        }
     const addTask = () => {
    if (newTask.trim() !== '') {
      const task = { name: newTask, priority: newTaskPriority };
      setTasks([...tasks, task]);
      setNewTask('');
      setNewTaskPriority('medium');
    }
  };
    return (
        <div>
        <h1>Todo List with priorities</h1>
        <h2>Tasks</h2>
            <ul>
                {tasks
                    .filter(task => task.name.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map((task, index) => (
                    <li key={index}>
                        {task.name} - Priority: {task.priority}
                        <button onClick={() => deleteTask(index)}>Delete</button>
                        <button>Done</button>
                    </li>
                ))}
                </ul>

            <h2>Total tasks : </h2>
            <h2>Tasks done  : </h2>
            <input type="text" placeholder='search for task'  value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <input type="text" placeholder='task Name' value={newTask} onChange={(e) => setNewTask(e.target.value)} />
               <select value={newTaskPriority} onChange={(e) => setNewTaskPriority(e.target.value)}>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>
                <button onClick={()=>addTask(newTask)} >Add</button>
        </div>
    )
    }

    export default TodoList
