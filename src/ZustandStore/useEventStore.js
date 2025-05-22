import { create } from 'zustand';
import { getEvents, addEvent, updateEvent, deleteEvent } from '../service/api';

const useEventStore = create((set) => ({
  events: [],
  loading: false,
  error: null,

  fetchEvents: async () => {
    set({ loading: true, error: null });
    try {
      const response = await getEvents();
      set({ events: response, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  addEvent: async (event) => {
    try {
      const response = await addEvent(event);
      set((state) => ({ events: [...state.events, response.data] }));
    } catch (error) {
      set({ error: error.message });
    }
  },

  editEvent: async (id, updatedEvent) => {
    try {
      await updateEvent(id, updatedEvent);
      set((state) => ({
        events: state.events.map((event) =>
          event.id === id ? { ...event, ...updatedEvent } : event
        ),
      }));
    } catch (error) {
      set({ error: error.message });
    }
  },

  deleteEvent: async (id) => {
    try {
      await deleteEvent(id);
      set((state) => ({ events: state.events.filter((event) => event.id !== id) }));
    } catch (error) {
      set({ error: error.message });
    }
  },
}));

export default useEventStore;