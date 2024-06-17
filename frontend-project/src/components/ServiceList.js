import React, { useState, useEffect } from 'react';
import api from '../api';

const ServiceList = ({ onServiceSelect }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    api.get('/services').then(response => {
      setServices(response.data);
    });
  }, []);

  const handleSelect = (service, event) => {
    const quantity = parseInt(event.target.value, 10);
    onServiceSelect(service, quantity);
  };

  return (
    <div>
      <h2>Select Services</h2>
      {services.map(service => (
        <div key={service.id}>
          <span>{service.name} - ${service.price.toFixed(2)}</span>
          <input 
            type="number" 
            min="0" 
            onChange={(event) => handleSelect(service, event)}
          />
        </div>
      ))}
    </div>
  );
};

export default ServiceList;