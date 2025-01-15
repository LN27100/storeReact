import React, { useState } from 'react';
import { useEventStore } from '../store/eventStore';

const EventFilters: React.FC = () => {
  const [location, setLocation] = useState('');
  const sortEvents = useEventStore((state) => state.sortEvents);
  const filterEventsByLocation = useEventStore((state) => state.filterEventsByLocation);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    sortEvents(e.target.value as 'asc' | 'desc');
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
    filterEventsByLocation(e.target.value);
  };

  return (
    <div className="event-filters">
      <select onChange={handleSortChange}>
        <option value="asc">Chronologique</option>
        <option value="desc">Inverse</option>
      </select>
      <input
        type="text"
        value={location}
        onChange={handleLocationChange}
        placeholder="Filtrer par lieu"
      />
    </div>
  );
};

export default EventFilters;
