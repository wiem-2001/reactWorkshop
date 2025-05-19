import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/counter'
import ListManager from './Components/ListManager'
import ColorBox from './Components/ColorBox'
import Evaluation from './Components/evaluation'
import TodoList from './Components/TodoList'
import Event from './Components/Event'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import NotFound from './Components/NotFound'
import NavigationBar from './Components/NavigatorBar'
const Home = React.lazy(() => import ('./Components/Home'))
const Events = React.lazy(() => import ('./Components/Events'))
const EventDetails = React.lazy(() => import ('./Components/EventDetails'))
import ReactNavBar from './Components/ReactNavBar'

import React, { Suspense, lazy } from 'react';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      {/* <p className="read-the-docs">
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

    <Events />*/}

      <ReactNavBar />
       {/* <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
     <Route path="/events" element={<Events/>}>
        <Route path="details/:id" element={<EventDetails/>}/>
      </Route>
        <Route path="*" element={<h2>404 - Page not found</h2>} /> {/* this will display details within events because it is nested route 
      </Routes>
    </div> */}
    <Suspense fallback={<div>Loading...</div>}>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/events" element={<Events />} />
  <Route path="/events/details/:id" element={<EventDetails />} /> {/* NOT nested */}
  <Route path="*" element={<h2>404 - Page not found</h2>} />
  </Routes>
    </Suspense> 


    </>
  )
}

export default App
