import React from 'react';
// import { IonIcon } from '@ionic/react';
import { IoMdArrowForward } from "react-icons/io";
const services = [
  {
    icon: 'flaticon-salon',
    title: 'Hair Cutting Style',
    description: 'Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    icon: 'flaticon-shampoo',
    title: 'Hair Washing',
    description: 'Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    icon: 'flaticon-hot-stone',
    title: 'Body Treatments',
    description: 'Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    icon: 'flaticon-treatment',
    title: 'Beauty & Spa',
    description: 'Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    icon: 'flaticon-shaving-razor',
    title: 'Stylist Shaving',
    description: 'Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    icon: 'flaticon-hair-dye',
    title: 'Multi Hair Colors',
    description: 'Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
];

const Services = () => (
  <section className="section service" id="services" aria-label="services">
    <div className="container">
      <h2 className="h2 section-title text-center">Service We Provide</h2>
      <p className="section-text text-center">Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore magna aliqua suspendisse</p>
      <ul className="grid-list">
        {services.map((service, index) => (
          <li key={index}>
            <div className="service-card">
              <div className="card-icon"><i className={service.icon}></i></div>
              <h3 className="h3"><a href="#" className="card-title">{service.title}</a></h3>
              <p className="card-text">{service.description}</p>
              <a href="#" className="card-btn" aria-label="more"></a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Services;