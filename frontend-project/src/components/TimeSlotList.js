import React, { useState, useEffect } from 'react';
import api from '../api';

const TimeSlotList = ({ onTimeSlotSelect }) => {
  const [timeSlots, setTimeSlots] = useState([]);

  useEffect(() => {
    api.get('/time_slots').then(response => {
      setTimeSlots(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Select Time Slot</h2>
      <select onChange={e => onTimeSlotSelect(e.target.value)}>
        <option value="">Select a time slot</option>
        {timeSlots.map(timeSlot => (
          <option key={timeSlot.id} value={timeSlot.id}>
            {timeSlot.start_time} - {timeSlot.end_time}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimeSlotList;