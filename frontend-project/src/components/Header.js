import React, { useState, useEffect } from 'react';
import { CiFacebook, CiYoutube,CiPhone, CiClock2  } from "react-icons/ci";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";



const Header = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNavbar = () => {
    setIsNavActive(!isNavActive);
  };

  const closeNavbar = () => {
    setIsNavActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'active' : ''}`}>
      <div className="header-top">
        <div className="container">
          <ul className="header-top-list">
            <li className="header-top-item">
            <CiPhone className="icon" aria-hidden="true" />
            <p className="item-title"> Call Us :</p>
              <a href="tel:01234567895" className="item-link">540546540650465</a>
            </li>
            <li className="header-top-item">
            <CiClock2 className="icon" aria-hidden="true"/>
              <p className="item-title">Opening Hour :</p>
              <p className="item-text">Sunday - Friday, 08 am - 09 pm</p>
            </li>
            <li>
              <ul className="social-list">
                <li><a href="#" className="social-link"><CiFacebook /></a></li>
                <li><a href="#" className="social-link"><CiYoutube /></a></li>
                <li><a href="#" className="social-link"><HiOutlineChatBubbleLeftRight /></a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className={`header-bottom ${isScrolled ? 'active' : ''} ${isNavActive ? 'active' : ''}`} data-header>
        <div className="container">
          <a href="#" className="logo">
            Barber <span className="span">Hair Salon</span>
          </a>
          <nav className={`navbar container ${isNavActive ? 'active' : ''}`} data-navbar>
            <ul className="navbar-list">
              <li className="navbar-item"><a href="#home" className="navbar-link" data-nav-link onClick={closeNavbar}>Home</a></li>
              <li className="navbar-item"><a href="#services" className="navbar-link" data-nav-link onClick={closeNavbar}>Services</a></li>
              <li className="navbar-item"><a href="#pricing" className="navbar-link" data-nav-link onClick={closeNavbar}>Pricing</a></li>
              <li className="navbar-item"><a href="#gallery" className="navbar-link" data-nav-link onClick={closeNavbar}>Gallery</a></li>
              <li className="navbar-item"><a href="#appointment" className="navbar-link" data-nav-link onClick={closeNavbar}>Appointment</a></li>
              <li className="navbar-item"><a href="#" className="navbar-link" data-nav-link onClick={closeNavbar}>Contact</a></li>
            </ul>
          </nav>


       {/* partle login  */}

          <button className="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler onClick={toggleNavbar}>
            
          </button>
          <a href="#" className="btn has-before">
            <span className="span">login</span>
            
          </a>

          

          
          {/* <button className="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler onClick={toggleNavbar}>
           
          </button>
          <a href="#" className="btn has-before">
            <span className="span">Register/Appointment</span>
            
          </a> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
