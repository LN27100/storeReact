import React from 'react';
import { Event } from '../types/event';
import EventCard from './EventCard';

type EventListProps = {
  events: Event[];
  onDelete: (id: string) => void;
};

const EventList: React.FC<EventListProps> = ({ events, onDelete }) => {
  return (
    <div>
      {events.map((event) => (
        <EventCard key={event.id} event={event} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default EventList;
