import React, { useState, useEffect } from 'react';
import Event from './Event';
import { getEvents } from '../service/api';
import { useNavigate } from 'react-router-dom';
function Events() {
  const [events, setEvents] = useState([]);
    const navigate = useNavigate();
  const fetchEvents = async () => {
    try {
      const data = await getEvents();
      console.log("Fetched data:", data);
      setEvents(data); 
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);
const handleDelete = (deletedEventId) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== deletedEventId));
  };

  return (
    <div className="justify-content-center d-flex flex-wrap gap-3">
      {
        events.map((item, index) => (
          <Event key={index} event={item} onDelete={handleDelete}/>
          
        )
       
      )}
    <div className="d-flex gap-3 mt-5 display-justify-content-inline">
           <button onClick={() => navigate("/events/addEvent")}>Add Event</button>
   
    </div>
    </div>
   
  );
}

export default Events;
