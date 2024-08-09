
import { BrowserRouter, Routes ,Route, Navigate} from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import Footer from './components/footer/Footer.jsx';
import Login from './pages/Login';
import Register from './pages/Register.jsx';
import axios from 'axios';
// import TopNav from './components/TopNav';
import Header from './components/Header.js';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { LOGIN } from './redux/actions';
import Appointments from './pages/Appointmnents.jsx'; 
import ProtectedRoutes from './pages/ProtectedRoutes';
import GuestRoutes from './pages/GuestRoutes';
import NotFound from './pages/NotFound';
// import Transcript from './pages/Transcript';

function App() {
  axios.defaults.withCredentials = true;
  axios.defaults.withXSRFToken = true;
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
      axios('/api/user')
          .then((res) =>
              dispatch({
                  type: LOGIN,
                  payload: res.data,
              })
          )
          .catch((err) => console.log(err))
          .finally(() => setLoaded(true));
  }, [dispatch]);


  return (
    loaded && (
        <BrowserRouter>
            {/* <TopNav /> */}
            <Header />

            <div className="container">
                <Routes>
                    {/* rotte accessibili da tutti */}
                    <Route path="/" element={<Home />} />
                    <Route path="/appointment" element={<Appointments />} />
                  


                    {/* rotte accessibili solo se sei loggato */}
                    <Route element={<ProtectedRoutes />}>
                        <Route
                            // path="/faculties/:id"
                            // element={<FacultyPage />}
                        />
                        {/* <Route
                            path="/transcript"
                            element={<Transcript />}
                        /> */}
                    </Route>

                    {/* rotte accessibili solo se NON sei loggato */}
                    <Route element={<GuestRoutes />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Route>

                    <Route path="/404" element={<NotFound />} />
                    <Route path="*" element={<Navigate to="/404" />} />
                </Routes>
            </div>

             <Footer /> 
        </BrowserRouter>
    )
);
}

export default App;


//   return (
//   <BrowserRouter>
//   <Routes>
//      <Route path="/" element= {<Home />}/> 
//     {/* <Route path="/Login" element= {<Home />}/>
//     <Route path="/Register" element= {<Home />}/>
//     <Route path="/appointments" element= {<Home />}/>
//      */}



//   </Routes>







//    <Footer /> 
//   </BrowserRouter>
//   );
// }

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

//  export default App;