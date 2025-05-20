import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getEventDetails, updateEvent } from "../service/api";

function UpdateEvent() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [event, setEvent] = useState({
    name: "",
    description: "",
    price: 0,
    nbTickets: 0,
    img: "",
  });

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const eventData = await getEventDetails(id);
        setEvent(eventData);
      } catch (error) {
        console.error("Error loading event:", error);
      }
    };
    fetchEvent();
  }, [id]);

  const onValueChange = (e) => {
    const { name, value } = e.target;
    setEvent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEvent((prev) => ({
        ...prev,
        img: file.name,  // just saving the filename, adapt if you want to upload
      }));
    }
  };

  const handleUpdate = async () => {
    try {
      const res = await updateEvent(id, event);
      if (res.status === 200) {
        navigate("/events");
      } else {
        console.error("Update failed:", res.status);
      }
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  if (!event.name) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
        <div className="text-center">
          <div className="spinner-border" role="status" />
          <div>Loading...</div>
        </div>
      </Container>
    );
  }

  return (
    <Container style={{ marginTop: "30px" }}>
      <h2>Update Event: {event.name}</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={event.name}
            onChange={onValueChange}
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={event.description}
            onChange={onValueChange}
            placeholder="Enter description"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={event.price}
            onChange={onValueChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Number of Tickets</Form.Label>
          <Form.Control
            type="number"
            name="nbTickets"
            value={event.nbTickets}
            onChange={onValueChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            name="img"
            onChange={onFileChange}
          />
          {event.img && <small>Current Image: {event.img}</small>}
        </Form.Group>

        <Button variant="primary" onClick={handleUpdate}>
          Update
        </Button>
        <Button
          variant="secondary"
          onClick={() => navigate("/events")}
          style={{ marginLeft: "10px" }}
        >
          Cancel
        </Button>
      </Form>
    </Container>
  );
}

export default UpdateEvent;
