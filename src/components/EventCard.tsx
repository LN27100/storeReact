import React from 'react';
import { Event } from '../types/event';

type EventCardProps = {
  event: Event;
  onDelete: (id: string) => void;
};

const EventCard: React.FC<EventCardProps> = ({ event, onDelete }) => {
  const currentDate = new Date();
  const eventDate = new Date(event.date);
  const isPast = eventDate < currentDate;

  return (
    <div className="event-card">
      <h2>{event.title}</h2>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
      {event.description && <p>Description: {event.description}</p>}
      <p className={`status ${isPast ? 'past' : 'upcoming'}`}>{isPast ? 'Passé' : 'À venir'}</p>
      <button onClick={() => onDelete(event.id)}>Supprimer</button>
    </div>
  );
};

export default EventCard;
