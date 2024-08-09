import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AppointmentsForm = () => {
    const [services, setServices] = useState([]);
    const [timeSlots, setTimeSlots] = useState([]);
    const [selectedServices, setSelectedServices] = useState([]);
    const [date, setDate] = useState('');
    const [timeSlot, setTimeSlot] = useState('');
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        axios.get('/api/services').then(response => {
            setServices(response.data);
        });

        axios.get('/api/time-slots').then(response => {
            setTimeSlots(response.data);
        });
    }, []);

    const handleServiceChange = (event, service) => {
        const isChecked = event.target.checked;
        const updatedServices = isChecked
            ? [...selectedServices, { ...service, quantity: 1 }]
            : selectedServices.filter(s => s.id !== service.id);

        setSelectedServices(updatedServices);
        setTotalCost(updatedServices.reduce((sum, s) => sum + s.price * s.quantity, 0));
    };

    const handleQuantityChange = (event, serviceId) => {
        const quantity = parseInt(event.target.value, 10);
        const updatedServices = selectedServices.map(service =>
            service.id === serviceId ? { ...service, quantity } : service
        );

        setSelectedServices(updatedServices);
        setTotalCost(updatedServices.reduce((sum, s) => sum + s.price * s.quantity, 0));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const appointmentData = {
            date,
            time_slot_id: timeSlot,
            services: selectedServices.map(service => ({ id: service.id, quantity: service.quantity })),
        };

        axios.post('/api/appointments', appointmentData)
            .then(response => {
                alert('Appuntamento creato con successo');
                // Redirect or clear the form
            })
            .catch(error => {
                console.error(error);
                alert('Errore durante la creazione dell\'appuntamento');
            });
    };

    return (
        <div className="container">
            <h1>Prenota un Appuntamento</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="date">Data</label>
                    <input
                        type="date"
                        className="form-control"
                        id="date"
                        name="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="time_slot">Orario</label>
                    <select
                        className="form-control"
                        id="time_slot"
                        name="time_slot"
                        value={timeSlot}
                        onChange={e => setTimeSlot(e.target.value)}
                        required
                    >
                        <option value="">Seleziona un orario</option>
                        {timeSlots.map(slot => (
                            <option key={slot.id} value={slot.id}>
                                {slot.start_time} - {slot.end_time}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Servizi</label>
                    {services.map(service => (
                        <div key={service.id} className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value={service.id}
                                id={`service-${service.id}`}
                                onChange={e => handleServiceChange(e, service)}
                            />
                            <label className="form-check-label" htmlFor={`service-${service.id}`}>
                                {service.name} - €{service.price}
                            </label>
                            {selectedServices.some(s => s.id === service.id) && (
                                <input
                                    type="number"
                                    min="1"
                                    value={selectedServices.find(s => s.id === service.id).quantity}
                                    onChange={e => handleQuantityChange(e, service.id)}
                                />
                            )}
                        </div>
                    ))}
                </div>
                <div className="form-group">
                    <strong>Costo Totale: €{totalCost}</strong>
                </div>
                <button type="submit" className="btn btn-primary">Prenota</button>
            </form>
        </div>
    );
};

export default AppointmentsForm;