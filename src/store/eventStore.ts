import { create} from "zustand";
import { Event } from '../types/event';

type EventState = {
  events: Event[];
  addEvent: (event: Event) => void;
  deleteEvent: (id: string) => void;
  sortEvents: (order: 'asc' | 'desc') => void;
  filterEventsByLocation: (location: string) => void;
  filteredEvents: Event[];
};

export const useEventStore = create<EventState>((set) => ({
  events: [
    {
      id: "1",
      title: "Conférence React",
      date: "2025-01-10",
      location: "Paris",
      description: "Une conférence pour les développeurs React.",
    },
    {
      id: "2",
      title: "Atelier TypeScript",
      date: "2025-01-15",
      location: "Lyon",
      description: "Un atelier sur les bases de TypeScript.",
    },
  ],
  filteredEvents: [],
  addEvent: (event) => set((state) => ({ events: [...state.events, event], filteredEvents: [...state.events, event] })),
  deleteEvent: (id) => set((state) => ({
    events: state.events.filter(event => event.id !== id),
    filteredEvents: state.filteredEvents.filter(event => event.id !== id)
  })),
  sortEvents: (order) => set((state) => {
    const sortedEvents = [...state.events].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return order === 'asc' ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
    });
    return { filteredEvents: sortedEvents };
  }),
  filterEventsByLocation: (location) => set((state) => {
    const filteredEvents = location ? state.events.filter(event => event.location === location) : state.events;
    return { filteredEvents };
  }),
}));
