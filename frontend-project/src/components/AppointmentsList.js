import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AppointmentsList = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        axios.get('/api/user/appointments').then(response => {
            setAppointments(response.data);
        });
    }, []);

    return (
        <div className="container">
            <h1>I Miei Appuntamenti</h1>
            {appointments.length === 0 && <p>Non hai appuntamenti.</p>}
            <table className="table">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Orario</th>
                        <th>Servizi</th>
                        <th>Costo Totale</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map(appointment => (
                        <tr key={appointment.id}>
                            <td>{appointment.date}</td>
                            <td>{appointment.time_slot.start_time} - {appointment.time_slot.end_time}</td>
                            <td>
                                <ul>
                                    {appointment.services.map(service => (
                                        <li key={service.id}>{service.name} x{service.pivot.quantity}</li>
                                    ))}
                                </ul>
                            </td>
                            <td>
                                €{appointment.services.reduce((total, service) => total + (service.price * service.pivot.quantity), 0)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AppointmentsList;