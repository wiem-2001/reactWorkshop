import React from 'react';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { eventSchema } from "../schema";
// is a schema validation library
import { z } from 'zod';
//connects the zod schema to react-hook-form
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { addEvent } from '../service/api';


function AddEvent() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,  //this will clear the form
    formState: { errors },
  } = useForm({
    resolver: zodResolver(eventSchema),
  });

  const onSubmit = async (data) => {
    const eventData = {
      name: data.name,
      description: data.description,
      price: data.price,
      nbTickets: data.tickets,
      img: data.imageUrl[0] ? data.imageUrl[0].name : null,
    };
    console.log(data);
    const res = await addEvent(eventData);
    if (res.status === 201) {
      navigate("/events");
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Event Name</Form.Label>
          <Form.Control type="text" placeholder="Enter event name" {...register("name")} />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Event Description</Form.Label>
          <Form.Control type="text" placeholder="Enter event description" {...register("description")} />
          {errors.description && <p style={{ color: "red" }}>{errors.description.message}</p>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Event Price</Form.Label>
          <Form.Control type="number" placeholder="Enter event price" {...register("price", { valueAsNumber: true })} />
          {errors.price && <p style={{ color: "red" }}>{errors.price.message}</p>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Number of Tickets</Form.Label>
          <Form.Control type="number" placeholder="Enter number of tickets" {...register("tickets", { valueAsNumber: true })} />
          {errors.tickets && <p style={{ color: "red" }}>{errors.tickets.message}</p>}
        </Form.Group>


        <Form.Group className="mb-3">
          <Form.Label>Event Image</Form.Label>
          <Form.Control type="file" {...register("imageUrl")} />
          {errors.imageUrl && <p style={{ color: "red" }}>{errors.imageUrl.message}</p>}
        </Form.Group>

        <button type="submit" className="btn btn-primary">Add Event</button>
        <button type="button" className="btn btn-secondary" style={{ marginLeft: "10px" }}
          onClick={() => {
            reset();
          }}
        >Reset</button>
      </Form>
    </div>
  );
}

export default AddEvent;
