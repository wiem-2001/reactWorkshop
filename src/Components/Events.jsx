import React, { useState, useEffect } from 'react';
import Event from './Event';
import { getEvents } from '../service/api';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import useEventStore from '../ZustandStore/useEventStore'
function Events() {
 // const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const {events, fetchEvents , deleteEvent} = useEventStore();
  // const fetchEvents = async () => {
  //   try {
  //     const data = await getEvents();
  //     setEvents(data); 
  //   } catch (error) {
  //     console.error('Error fetching events:', error);
  //   }
  // };

  useEffect(() => {
    fetchEvents();
  }, []);

  // const handleDelete = (deletedEventId) => {
  //   setEvents((prevEvents) =>
  //     prevEvents.filter((event) => event.id !== deletedEventId)
  //   );
  // };
  const handleDelete = async (eventId) => {
  
    deleteEvent(eventId);
    
  };
  // const filteredEvents = events.filter((event) =>
  //   event.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <div className="justify-content-center d-flex flex-column align-items-center gap-3 mt-5">
      <Form className="d-flex w-50 mb-4" onSubmit={(e) => e.preventDefault()}>
        <Form.Control
          type="text"
          placeholder="Search for an event"
          className="me-2"
          aria-label="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="outline-success" type="submit">
          Search
        </Button>
      </Form>

      <div className="d-flex flex-wrap justify-content-center gap-3">
        {
          events.map((item,index) => (
            <Event key={index} event={item} onDelete={handleDelete} />
          ))
        }
      </div>

      <div className="mt-5">
        <Button onClick={() => navigate("/events/addEvent")}>
          Add Event
        </Button>
      </div>
    </div>
  );
}

export default Events;
