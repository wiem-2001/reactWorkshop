import React, { useEffect, useState } from 'react';
import { Card ,Alert, NavLink } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import eventimage from  '../assets/event.jpg';
import soldout from '../assets/sold_out.jpg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {deleteEvent} from '../service/api';
function Event({ event ,onDelete }) {
    const [eventData, setEventData] = useState(event);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMsg, setAlertMsg] = useState('');
    const [Like, setLike] = useState('❤️');
    const [alertVariant, setAlertVariant] = useState('success');
    const navigate = useNavigate();
    const incrementParticipants = () => {
        if(eventData.nbTickets > 0) {
            setEventData((eventData) => ({
            ...eventData,
            nbParticipants: eventData.nbParticipants + 1,
            nbTickets : eventData.nbTickets - 1,
        })); 
        // add an alert to notify the user that the ticket has been booked
         setAlertMsg(`You have successfully booked a ticket for ${eventData.name}.`);
         setAlertVariant('success');
        }
        else {
            setAlertMsg(`No tickets available for ${eventData.name}.`);
            setAlertVariant('danger');
        }
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 2000);
    }
    useEffect(() => {
        
        if(eventData.nbTickets === 0) {
        setEventData(event);
        }
    }, [event]);
    const handleLike = () => {
        setLike(Like === '❤️' ? '💔' : '❤️');
        setAlertMsg(Like === '❤️' ? 'You liked this event.' : 'You unliked this event.');
        setEventData((eventData) => ({
            ...eventData,
            nbLikes: eventData.nbLikes + (Like === '❤️' ? 1 : -1),
        }));
        setAlertVariant('info');
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 2000);
    }
   const handleDelete = async () => {
    try {
      const res = await deleteEvent(event.id);
      if (res.status === 200) {
        onDelete(event.id);  // Notify parent to update events list
        setAlertMsg(`You have successfully deleted ${event.name}.`);
        setAlertVariant("danger");
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 2000);
      }
    } catch (error) {
      console.error("Error deleting event:", error);
      setAlertMsg("Failed to delete the event.");
      setAlertVariant("danger");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 2000);
    }
  };
  return (
    
    <div>
        {showAlert && (
        <Alert variant={alertVariant} className="mt-2">
          {alertMsg}
        </Alert>
      )}
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={event.nbTickets == 0 ? soldout : eventimage} />
        <Card.Body>
          <Card.Title><Link to={`/events/details/${event.id}`}>{event.name}</Link></Card.Title>
          <div>
            <p>Price: {eventData.price}</p>
            <p>Number of tickets: {eventData.nbTickets}</p>
            <p>Number of participants: {eventData.nbParticipants}</p>
          </div>
          <Button variant="primary" onClick={() => incrementParticipants()} disabled={event.nbTickets ===0}>Book an event</Button>
          <Button variant="secondary" onClick={() => handleLike(event)}>{Like}</Button>
           <button onClick={() => navigate(`/events/updateEvent/${eventData.id}`)} >update Event</button>
           <button onClick={() => handleDelete(eventData.id)} >delete Event</button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Event;
