import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LOGOUT } from '../redux/actions';

const Header = () => {
    const [isNavActive, setIsNavActive] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);

    const toggleNavbar = () => {
        setIsNavActive(!isNavActive);
    };

    const closeNavbar = () => {
        setIsNavActive(false);
    };

    const logout = () => {
        axios.post('/logout')
            .then(() => dispatch({ type: LOGOUT }))
            .then(() => navigate('/login'));
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand logo" to="/">
                    Barber <span className="span">Hair Salon</span>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className={`collapse navbar-collapse ${isNavActive ? 'show' : ''}`}
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#services" onClick={closeNavbar}>Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#pricing" onClick={closeNavbar}>Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#gallery" onClick={closeNavbar}>Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/appointment" onClick={closeNavbar}>Appointment</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={closeNavbar}>Contact</a>
                        </li>
                    </ul>

                    {user ? (
                        <>
                            <span className="me-2">{user.name}</span>
                            <button className="btn btn-primary" onClick={logout}>Logout</button>
                        </>
                    ) : (
                        <>
                            <Link className="btn btn-primary me-2" to="/login">Login</Link>
                            <Link className="btn btn-primary" to="/register">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Header;

















// import React, { useState } from 'react';

// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { LOGOUT } from '../redux/actions';

// const Header = () => {
//   const [isNavActive, setIsNavActive] = useState(false);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const user = useSelector((state) => state.user);

//   const toggleNavbar = () => {
//     setIsNavActive(!isNavActive);
//   };

//   const closeNavbar = () => {
//     setIsNavActive(false);
//   };

//   const logout = () => {
//     axios.post('/logout')
//       .then(() => dispatch({ type: LOGOUT }))
//       .then(() => navigate('/login'));
//   };

//   return (
//     <header className="header">
//        <nav className="navbar navbar-expand-lg">
//        <div className="container-fluid">
//         <div className='header-bottom '>
//         <div className="container">
//           <a href="/" className="logo">
//             Barber <span className="span">Hair Salon</span>
//           </a>
//           <nav className={`navbar container ${isNavActive ? 'active' : ''}`} data-navbar>
//             <ul className="navbar-list">
              
//               <li className="navbar-item"><a href="#services" className="navbar-link" data-nav-link onClick={closeNavbar}>Services</a></li>
//               <li className="navbar-item"><a href="#pricing" className="navbar-link" data-nav-link onClick={closeNavbar}>Pricing</a></li>
//               <li className="navbar-item"><a href="#gallery" className="navbar-link" data-nav-link onClick={closeNavbar}>Gallery</a></li>
//               <li className="navbar-item"><a href="#appointment" className="navbar-link" data-nav-link onClick={closeNavbar}>Appointment</a></li>
//               <li className="navbar-item"><a href="#" className="navbar-link" data-nav-link onClick={closeNavbar}>Contact</a></li>
//             </ul>
//           </nav>

//           <button className="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler onClick={toggleNavbar}></button>

//           {user ? (
//             <>
//               <span className="me-2">{user.name}</span>
//               <button className="btn btn-primary" onClick={logout}>Logout</button>
//             </>
//           ) : (
//             <>
//               <Link className="btn btn-primary me-2" to="/login">Login</Link>
//               <Link className="btn btn-primary" to="/register">Register</Link>
//             </>
//           )}
//         </div>
//       </div>
//      </div>
//      </nav>
//   </header>
//   );
// };

// export default Header;









// import React, { useState, useEffect } from 'react';
// import { CiFacebook, CiYoutube, CiPhone, CiClock2 } from "react-icons/ci";
// import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { LOGOUT } from '../redux/actions';

// const Header = () => {
//   const [isNavActive, setIsNavActive] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const user = useSelector((state) => state.user);

//   const toggleNavbar = () => {
//     setIsNavActive(!isNavActive);
//   };

//   const closeNavbar = () => {
//     setIsNavActive(false);
//   };

//   const handleScroll = () => {
//     if (window.scrollY > 100) {
//       setIsScrolled(true);
//     } else {
//       setIsScrolled(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const logout = () => {
//     axios.post('/logout')
//       .then(() => dispatch({ type: LOGOUT }))
//       .then(() => navigate('/login'));
//   };

//   return (
//     <header className={`header ${isScrolled ? 'active' : ''}`}>
//       <div className="header-top">
//         <div className="container">
//           <ul className="header-top-list">
//             <li className="header-top-item">
//               <CiPhone className="icon" aria-hidden="true" />
//               <p className="item-title">Call Us :</p>
//               <a href="tel:01234567895" className="item-link">540546540650465</a>
//             </li>
//             <li className="header-top-item">
//               <CiClock2 className="icon" aria-hidden="true" />
//               <p className="item-title">Opening Hour :</p>
//               <p className="item-text">Sunday - Friday, 08 am - 09 pm</p>
//             </li>
//             <li>
//               <ul className="social-list">
//                 <li><a href="#" className="social-link"><CiFacebook /></a></li>
//                 <li><a href="#" className="social-link"><CiYoutube /></a></li>
//                 <li><a href="#" className="social-link"><HiOutlineChatBubbleLeftRight /></a></li>
//               </ul>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className='header-bottom isNavActive' >
//         <div className="container">
//           <a href="#" className="logo">
//             Barber <span className="span">Hair Salon</span>
//           </a>
//           <nav className={`navbar container ${isNavActive ? 'active' : ''}`} data-navbar>
//             <ul className="navbar-list">
//               <li className="navbar-item"><a href="#home" className="navbar-link" data-nav-link onClick={closeNavbar}>Home</a></li>
//               <li className="navbar-item"><a href="#services" className="navbar-link" data-nav-link onClick={closeNavbar}>Services</a></li>
//               <li className="navbar-item"><a href="#pricing" className="navbar-link" data-nav-link onClick={closeNavbar}>Pricing</a></li>
//               <li className="navbar-item"><a href="#gallery" className="navbar-link" data-nav-link onClick={closeNavbar}>Gallery</a></li>
//               <li className="navbar-item"><a href="#appointment" className="navbar-link" data-nav-link onClick={closeNavbar}>Appointment</a></li>
//               <li className="navbar-item"><a href="#" className="navbar-link" data-nav-link onClick={closeNavbar}>Contact</a></li>
//             </ul>
//           </nav>

//           <button className="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler onClick={toggleNavbar}></button>

//           {user ? (
//             <>
//               <span className="me-2">{user.name}</span>
//               <button className="btn btn-primary" onClick={logout}>Logout</button>
//             </>
//           ) : (
//             <>
//               <Link className="btn btn-primary me-2" to="/login">Login</Link>
//               <Link className="btn btn-primary" to="/register">Register</Link>
//             </>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;





// import React, { useState, useEffect } from 'react';
// import { CiFacebook, CiYoutube,CiPhone, CiClock2  } from "react-icons/ci";
// import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";



// const Header = () => {
//   const [isNavActive, setIsNavActive] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const toggleNavbar = () => {
//     setIsNavActive(!isNavActive);
//   };

//   const closeNavbar = () => {
//     setIsNavActive(false);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <header className={`header ${isScrolled ? 'active' : ''}`}>
//       <div className="header-top">
//         <div className="container">
//           <ul className="header-top-list">
//             <li className="header-top-item">
//             <CiPhone className="icon" aria-hidden="true" />
//             <p className="item-title"> Call Us :</p>
//               <a href="tel:01234567895" className="item-link">540546540650465</a>
//             </li>
//             <li className="header-top-item">
//             <CiClock2 className="icon" aria-hidden="true"/>
//               <p className="item-title">Opening Hour :</p>
//               <p className="item-text">Sunday - Friday, 08 am - 09 pm</p>
//             </li>
//             <li>
//               <ul className="social-list">
//                 <li><a href="#" className="social-link"><CiFacebook /></a></li>
//                 <li><a href="#" className="social-link"><CiYoutube /></a></li>
//                 <li><a href="#" className="social-link"><HiOutlineChatBubbleLeftRight /></a></li>
//               </ul>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className={`header-bottom ${isScrolled ? 'active' : ''} ${isNavActive ? 'active' : ''}`} data-header>
//         <div className="container">
//           <a href="#" className="logo">
//             Barber <span className="span">Hair Salon</span>
//           </a>
//           <nav className={`navbar container ${isNavActive ? 'active' : ''}`} data-navbar>
//             <ul className="navbar-list">
//               <li className="navbar-item"><a href="#home" className="navbar-link" data-nav-link onClick={closeNavbar}>Home</a></li>
//               <li className="navbar-item"><a href="#services" className="navbar-link" data-nav-link onClick={closeNavbar}>Services</a></li>
//               <li className="navbar-item"><a href="#pricing" className="navbar-link" data-nav-link onClick={closeNavbar}>Pricing</a></li>
//               <li className="navbar-item"><a href="#gallery" className="navbar-link" data-nav-link onClick={closeNavbar}>Gallery</a></li>
//               <li className="navbar-item"><a href="#appointment" className="navbar-link" data-nav-link onClick={closeNavbar}>Appointment</a></li>
//               <li className="navbar-item"><a href="#" className="navbar-link" data-nav-link onClick={closeNavbar}>Contact</a></li>
//             </ul>
//           </nav>


//        {/* partle login  */}

//           <button className="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler onClick={toggleNavbar}>
            
//           </button>
//           <a href="#" className="btn has-before">
//             <span className="span">login</span>
            
//           </a>

          

          
//           {/* <button className="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler onClick={toggleNavbar}>
           
//           </button>
//           <a href="#" className="btn has-before">
//             <span className="span">Register/Appointment</span>
            
//           </a> */}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
