import axios from "axios";

const baseURL ="http://localhost:3001/events";

//get all events
export const getEvents = async () => {
  try {
    const response = await axios.get(`${baseURL}`);
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};

// add an envent 
export const addEvent = async (eventData) => {
  try {
   return  await axios.post(`${baseURL}`, eventData);
  } catch (error) {
    console.error("Error adding event:", error);
    throw error;
  }
}

//get event by id
export const getEventDetails = async (eventId) => {
  try {
    const response = await axios.get(`${baseURL}/${eventId}`);
   if(response.data !=null)  console.log("response", response.data);
   else console.log("response", "event not found");
    return response.data;
  } catch (error) {
    console.error("Error fetching event details:", error);
    throw error;
  }
};  

// update event
export const updateEvent = async (eventId, eventData) => {
  try {
    return await axios.put(`${baseURL}/${eventId}`, eventData);
  } catch (error) {
    console.error("Error updating event:", error);
    throw error;
  }
};

// delete event
export const deleteEvent = async (eventId) => {
  try {
    return await axios.delete(`${baseURL}/${eventId}`);
  } catch (error) {
    console.error("Error deleting event:", error);
    throw error;
  }
};