import React from 'react'
import { useParams ,useNavigate } from 'react-router-dom';
import events from "../data/events.json" ;
import { Card, Button, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import {getEventDetails} from "../service/api";
import Alert from 'react-bootstrap/Alert';
function EventDetails() {
   const { id } = useParams();
   const [event, setEvent] = useState(null);
    const navigate = useNavigate();
     const fetchEvent = async () => {
       try {
         const data = await getEventDetails(id);
         console.log("Fetched event details:", data);
         setEvent(data); 
       } catch (error) {
         console.error('Error fetching event:', error);
       }
     };
   
     useEffect(() => {
       fetchEvent();
     }, []);

  return (
  <Container className="d-flex justify-content-center mt-5">
    {event ? (
      <Card style={{ width: "30rem" }}>
        {/* <Card.Img variant="top" src={`/images/${event.img}`} alt={event.name} /> */}
        <Card.Body>
          <Card.Title>{event.name}</Card.Title>
          <Card.Text>{event.description}</Card.Text>
          <p>
            <strong>Prix :</strong> {event.price}dt
          </p>
          <p>
            <strong>Tickets disponibles :</strong> {event.nbTickets}
          </p>
          <p>
            <strong>Participants :</strong> {event.nbParticipants}
          </p>
        </Card.Body>
      </Card>
    ) : (
        <div>
        <div>Event does not exist</div>
        <Alert className="alert alert-danger"> Event Does Not Exist </Alert>
        </div>
    
    )}
    <Button
          variant="btn btn-secondary"
          type="reset"
          onClick={() => navigate(-1)}
        >
          Go Back 
        </Button>
        <Button
          variant="btn btn-secondary"
          type="reset"
          onClick={() => navigate("/")}
        >
          Go Home
        </Button>
  </Container>
);

}


export default EventDetails
