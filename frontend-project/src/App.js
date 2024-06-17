
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {
  return (
  <BrowserRouter>
  <Routes>
     <Route path="/" element= {<Home />}/> 
    {/* <Route path="/Login" element= {<Home />}/>
    <Route path="/Register" element= {<Home />}/>
    <Route path="/appointments" element= {<Home />}/>
     */}



  </Routes>







   <Footer /> 
  </BrowserRouter>
  );
}

// export default App;


// import React, { useState, useEffect } from 'react';
// import api from './api';
// import AppointmentBooking from './components/AppointmentBooking';
// import Login from './components/Login';

// const App = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//       api.get('/user').then(response => {
//         setUser(response.data);
//       }).catch(() => {
//         localStorage.removeItem('token');
//       });
//     }
//   }, []);

//   const handleLogin = (user) => {
//     setUser(user);
//   };

//   if (!user) {
//     return <Login onLogin={handleLogin} />;
//   }

//   return (
//     <div>
//       <h1>Salon Booking</h1>
//       <AppointmentBooking />
//     </div>
//   );
// };

// export default App;