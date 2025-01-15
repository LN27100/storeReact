// src/App.tsx
import React from 'react';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import EventFilters from './components/EventFilters';
import { useEventStore } from './store/eventStore';
import '../src/style.css';

const App: React.FC = () => {
  const filteredEvents = useEventStore((state) => state.filteredEvents);
  const deleteEvent = useEventStore((state) => state.deleteEvent);

  return (
    <div className="app">
      <h1>Gestion d'évènements</h1>
      <EventFilters />
      <div className="main-container">
        <div className="event-form-container">
          <EventForm />
        </div>
        <div className="event-list-container">
          <EventList events={filteredEvents} onDelete={deleteEvent} />
        </div>
      </div>
    </div>
  );
};

export default App;
