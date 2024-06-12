import React from 'react';

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
                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </button>
            </form>
          </div>
          {/* Add your footer link boxes here */}
        </div>
        <div className="footer-bottom">
          <p className="copyright">&copy; 2022 <a href="#" className="copyright-link">codewithsadee</a>. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;