import React, { useState } from 'react';
import { Event } from '../types/event';
import { useEventStore } from '../store/eventStore';

const EventForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const addEvent = useEventStore((state) => state.addEvent);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEvent: Event = {
      id: Date.now().toString(),
      title,
      date,
      location,
      description,
    };
    addEvent(newEvent);
    setTitle('');
    setDate('');
    setLocation('');
    setDescription('');
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Titre"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Lieu"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default EventForm;
