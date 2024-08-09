import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LOGIN } from '../actions';
import '../pages/css/login.css';

const Login = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const updateInputValue = (ev) => {
        setFormData((oldFormData) => ({
            ...oldFormData,
            [ev.target.name]: ev.target.value,
        }));
    };

    const submitLogin = (ev) => {
        ev.preventDefault();
        // gli indirizzi relativi, con il proxy attivo fanno la richiesta a http://localhost:8000/login mascherandolo come indirizzo nello stesso host di react (che nel nostro caso è http://localhost:3000/login)
        axios
            .get('/sanctum/csrf-cookie')
            .then(() => axios.post('/login', formData))
            .then(() => axios.get('/api/user'))
            .then((res) => {
                // salvare i dati dello user nel Redux state
                dispatch({
                    type: LOGIN,
                    payload: res.data,
                });
            });
    };

    return (
        <div className="mainContainer"> {/* Wrap the form in mainContainer */}

        <form onSubmit={(ev) => submitLogin(ev)} noValidate>
            
            <div className="mb-3 mt-4 ">
                <label htmlFor="email" className="form-label">
                    Email address
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    onChange={(ev) => updateInputValue(ev)}
                    value={formData.email}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">
                    Password
                </label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    onChange={(ev) => updateInputValue(ev)}
                    value={formData.password}
                />
            </div>
            {/* <div className="mb-3 form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                </label>
            </div> */}
            <div className="d-grid">

            <button type="submit" className="btn btn-primary">
                Login
            </button>
            </div>
        </form>

        </div>
    );
};

export default Login;



// import React, { useState } from 'react';
// import { Form, Button, Container } from 'react-bootstrap';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { LOGIN } from '../redux/actions';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.get('/sanctum/csrf-cookie');
//       const response = await axios.post('/login', { email, password });
//       const user = response.data.user;

//       if (user) {
//         dispatch({ type: LOGIN, payload: user });
//         localStorage.setItem('user', JSON.stringify(user));
//         navigate('/');
//       } else {
//         setError('Login failed: no user data received');
//       }
//     } catch (error) {
//       setError('Login failed');
//       console.error('Error response:', error.response);
//     }
//   };

//   return (
//     <Container>
//       <h2>Login</h2>
//       <Form onSubmit={handleLogin}>
//         <Form.Group controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         <Button variant="primary" type="submit">
//           Login
//         </Button>
//       </Form>
//     </Container>
//   );
// };