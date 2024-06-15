import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundImage: 'url(./assets/images/footer-bg.png)' }}>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="logo">Barber <span className="span">Hair Salon</span></a>
            <form action="" className="input-wrapper">
              <input type="email" name="email_address" placeholder="Enter Your Email" required className="email-field" />
              <button type="submit" className="btn has-before">
                <span className="span">Subscribe Now</span>
              </button>
            </form>
          </div>
          <div className="footer-link-box">
      <ul className="footer-list">
        <li>
          <p className="footer-list-title">Quick Links</p>
        </li>
        <li>
          <a href="#" className="footer-link has-before">Our Services</a>
        </li>
        <li>
          <a href="#" className="footer-link has-before">Meet Our Team</a>
        </li>
        <li>
          <a href="#" className="footer-link has-before">Our Portfolio</a>
        </li>
        <li>
          <a href="#" className="footer-link has-before">Need A Career?</a>
        </li>
        <li>
          <a href="#" className="footer-link has-before">News & Blog</a>
        </li>
      </ul>
      <ul className="footer-list">
        <li>
          <p className="footer-list-title">Services</p>
        </li>
        <li>
          <a href="#" className="footer-link has-before">Hair Cutting</a>
        </li>
        <li>
          <a href="#" className="footer-link has-before">Shaving & Design</a>
        </li>
        <li>
          <a href="#" className="footer-link has-before">Hair Colors</a>
        </li>
        <li>
          <a href="#" className="footer-link has-before">Beauty & Spa</a>
        </li>
        <li>
          <a href="#" className="footer-link has-before">Body Massages</a>
        </li>
      </ul>
      <ul className="footer-list">
        <li>
          <p className="footer-list-title">Recent News</p>
        </li>
        <li>
          <div className="blog-card">
            <div className="card-content">
              <h3>
                <a href="#" className="card-title">The beginners guide to Henna Brows in Brisbane</a>
              </h3>
              <div className="card-date">
                
                <time dateTime="2022-08-25">25 August 2022</time>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="blog-card">
            <div className="card-content">
              <h3>
                <a href="#" className="card-title">How do I get rid of unwanted hair on my face?</a>
              </h3>
              <div className="card-date">
               
                <time dateTime="2022-08-25">25 August 2022</time>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <ul className="footer-list">
        <li>
          <p className="footer-list-title">Contact Us</p>
        </li>
        <li className="footer-list-item">
        
          <address className="contact-link">
            7528 Roberts Ave. Palm Bay, FL 32907
          </address>
        </li>
        <li className="footer-list-item">
          <a href="tel:+0123456789" className="contact-link">+012 (345) 67 89</a>
        </li>
        <li className="footer-list-item">
          <span className="contact-link">Sun - Friday, 08 am - 09 pm</span>
        </li>
        <li className="footer-list-item">
          
          <a href="mailto:support@gmail.com" className="contact-link">support@gmail.com</a>
        </li>
      </ul>
    </div>
          



        </div>
        <div className="footer-bottom">
          <p className="copyright">&copy; 2024 <a href="#" className="copyright-link">354435346463</a>. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;