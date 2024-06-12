import React from 'react';

const Hero = () => (
  <section className="section hero has-before has-bg-image" id="home" aria-label="home" style={{ backgroundImage: 'url(./assets/images/hero-banner.jpg)' }}>
    <div className="container">
      <h1 className="h1 hero-title">Barbers & Hair Cutting</h1>
      <p className="hero-text">Sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua suspendisse ultrices gravida</p>
      <a href="#services" className="btn has-before">
        <span className="span">Explore Our Services</span>
        <ion-icon name="arrow-forward" aria-hidden="true" />
      </a>
    </div>
  </section>
);

export default Hero;