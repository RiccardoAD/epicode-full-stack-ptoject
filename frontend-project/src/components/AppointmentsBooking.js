import React, { useState } from 'react';
import api from '../api';
import ServiceList from './ServiceList';
import TimeSlotList from './TimeSlotList';

const AppointmentBooking = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [date, setDate] = useState('');

  const handleServiceSelect = (service, quantity) => {
    const updatedServices = selectedServices.filter(s => s.id !== service.id);
    const serviceTotal = service.price * quantity;

    updatedServices.push({ ...service, quantity, total: serviceTotal });

    setSelectedServices(updatedServices);

    const newTotalCost = updatedServices.reduce((sum, s) => sum + s.total, 0);
    setTotalCost(newTotalCost);
  };

  const handleSubmit = () => {
    if (!selectedTimeSlot || !date) {
      alert('Please select a time slot and date');
      return;
    }

    const appointmentData = {
      time_slot_id: selectedTimeSlot,
      date,
      services: selectedServices.map(service => ({
        id: service.id,
        quantity: service.quantity,
      })),
    };

    api.post('/appointments', appointmentData).then(response => {
      console.log('Appointment booked:', response.data);
    }).catch(error => {
      console.error('Error booking appointment:', error);
    });
  };

  return (
    <div>
      <TimeSlotList onTimeSlotSelect={setSelectedTimeSlot} />
      <input 
        type="date" 
        value={date}
        onChange={e => setDate(e.target.value)}
      />
      <ServiceList onServiceSelect={handleServiceSelect} />
      <h3>Total Cost: ${totalCost.toFixed(2)}</h3>
      <button onClick={handleSubmit}>Book Appointment</button>
    </div>
  );
};

export default AppointmentBooking;