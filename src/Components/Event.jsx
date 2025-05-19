import React, { useEffect, useState } from 'react';
import { Card ,Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import eventimage from  '../assets/event.jpg';
import soldout from '../assets/sold_out.jpg';
function Event({ event }) {
    const [eventData, setEventData] = useState(event);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMsg, setAlertMsg] = useState('');
    const [Like, setLike] = useState('❤️');
    const [alertVariant, setAlertVariant] = useState('success');
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
          <Card.Title>{eventData.name}</Card.Title>
          <div>
            <p>Price: {eventData.price}</p>
            <p>Number of tickets: {eventData.nbTickets}</p>
            <p>Number of participants: {eventData.nbParticipants}</p>
          </div>
          <Button variant="primary" onClick={() => incrementParticipants()} disabled={event.nbTickets ===0}>Book an event</Button>
          <Button variant="secondary" onClick={() => handleLike(event)}>{Like}</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Event;
