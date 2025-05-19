import React from 'react'
import events from '../data/events.json';
import Event from './Event';
import { Outlet } from 'react-router-dom';
function Events() {

  return (
    <div className='justify-content-center d-flex flex-wrap space-x-px-8'>
       
            {events.map((item, index) => (
            <Event key={index} event={item} />
          
            ))}
       
    </div>
  )
}

export default Events
