import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/counter'
import ListManager from './Components/ListManager'
import ColorBox from './Components/ColorBox'
import Evaluation from './Components/evaluation'
import TodoList from './Components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <p className="read-the-docs">
       rendering the counter component to try the useState and useEffect hooks
      </p>
      <Counter />
      <p className="read-the-docs">
       rendering the list manager component to try props and state
      </p>
      <ListManager initialItems={['Apples', 'Bananas']} placeholder="Enter item" />
          <p className="read-the-docs">
       rendering the color box component to try props and state on sytle
      </p>
      <ColorBox initialColor="blue" />
          <p className="read-the-docs">
       rendering the evaluation component to try props 
      </p>
     <Evaluation initialNotes={[10, 12, 15]} />
         <p className="read-the-docs">
       rendering the todo list component to try props and state
      </p>
    <TodoList initialTasks={[{ name: "Finish project", priority: "High" }, { name: "Read book", priority: "Low" }]} />

    </>
  )
}

export default App
