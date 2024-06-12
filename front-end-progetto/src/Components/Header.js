import React from 'react';
import { IonIcon } from '@ionic/react';

const Header = () => (
  <header className="header">
    <div className="header-top">
      <div className="container">
        <ul className="header-top-list">
          <li className="header-top-item">
            <IonIcon name="call-outline" aria-hidden="true" />
            <p className="item-title">Call Us :</p>
            <a href="tel:01234567895" className="item-link">012 (345) 67 895</a>
          </li>
          <li className="header-top-item">
            <IonIcon name="time-outline" aria-hidden="true" />
            <p className="item-title">Opening Hour :</p>
            <p className="item-text">Sunday - Friday, 08 am - 09 pm</p>
          </li>
          <li>
            <ul className="social-list">
              <li><a href="#" className="social-link"><IonIcon name="logo-facebook" /></a></li>
              <li><a href="#" className="social-link"><IonIcon name="logo-twitter" /></a></li>
              <li><a href="#" className="social-link"><IonIcon name="logo-youtube" /></a></li>
              <li><a href="#" className="social-link"><IonIcon name="chatbubble-ellipses-outline" /></a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div className="header-bottom" data-header>
      <div className="container">
        <a href="#" className="logo">Barber<span className="span">Hair Salon</span></a>
        <nav className="navbar container" data-navbar>
          <ul className="navbar-list">
            <li className="navbar-item"><a href="#home" className="navbar-link" data-nav-link>Home</a></li>
            <li className="navbar-item"><a href="#services" className="navbar-link" data-nav-link>Services</a></li>
            <li className="navbar-item"><a href="#pricing" className="navbar-link" data-nav-link>Pricing</a></li>
            <li className="navbar-item"><a href="#gallery" className="navbar-link" data-nav-link>Gallery</a></li>
            <li className="navbar-item"><a href="#appointment" className="navbar-link" data-nav-link>Appointment</a></li>
            <li className="navbar-item"><a href="#contact" className="navbar-link" data-nav-link>Contact</a></li>
          </ul>
        </nav>
        <button className="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler>
          <IonIcon name="menu-outline" aria-hidden="true" />
        </button>
        <a href="#appointment" className="btn has-before">
          <span className="span">Appointment</span>
          <IonIcon name="arrow-forward" aria-hidden="true" />
        </a>
      </div>
    </div>
  </header>
);

export default Header;