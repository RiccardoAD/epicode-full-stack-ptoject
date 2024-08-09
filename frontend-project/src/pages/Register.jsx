import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LOGIN } from '../actions';

const Register = () => {
    const dispatch = useDispatch();

  
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
       
    });

    const [errors, setErrors] = useState(null);

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
            .then(() => {
                const body = new FormData();
                body.append('name', formData.name);
                body.append('email', formData.email);
                body.append('password', formData.password);
                body.append(
                    'password_confirmation',
                    formData.password_confirmation
                );
               
                return axios.post('/register', body);
            })
            .then(() => axios.get('/api/user'))
            .then((res) => {
                // salvare i dati dello user nel Redux state
                dispatch({
                    type: LOGIN,
                    payload: res.data,
                });
            });
        // .catch((err) => {
        //     console.log(err.response.data.errors);
        //     setErrors(err.response.data.errors);
        // });
    };

    return (
        // <form method="POST" action="....." novalidate enctype='multipart/form-data'> // se fatto in Blade
        <form onSubmit={(ev) => submitLogin(ev)} noValidate>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    onChange={(ev) => updateInputValue(ev)}
                    value={formData.name}
                />
            </div>
            <div className="mb-3">
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
            <div className="mb-3">
                <label htmlFor="password_confirmation" className="form-label">
                    Conferma password
                </label>
                <input
                    type="password"
                    className="form-control"
                    id="password_confirmation"
                    name="password_confirmation"
                    onChange={(ev) => updateInputValue(ev)}
                    value={formData.password_confirmation}
                />
            </div>
            
            <button type="submit" className="btn btn-primary">
                Register
            </button>
        </form>
    );
};

export default Register;



// import axios from 'axios';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { LOGIN } from '../redux/actions/index';
// import { Form, Button, Container } from 'react-bootstrap';

// const Register = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     password_confirmation: '',
//   });
//   const [error, setError] = useState('');

//   const updateInputValue = (ev) => {
//     setFormData((oldFormData) => ({
//       ...oldFormData,
//       [ev.target.name]: ev.target.value,
//     }));
//   };

//   const submitRegister = async (ev) => {
//     ev.preventDefault();
//     setError(''); // Reset error state

//     try {
//       await axios.get('/sanctum/csrf-cookie');
//       const response = await axios.post('/register', formData);
//       console.log('Registration response:', response); // Aggiungi questo log
//       const user = response.data.user;

//       if (user) {
//         dispatch({ type: LOGIN, payload: user });
//         localStorage.setItem('user', JSON.stringify(user));
//         navigate('/');
//       } else {
//         setError('Registration failed: no user data received');
//       }
//     } catch (error) {
//       setError('Registration failed');
//       console.error('Error response:', error); // Aggiungi questo log
//     }
//   };

//   return (
//     <Container>
//       <h2>Register</h2>
//       <Form onSubmit={submitRegister} noValidate>
//         <Form.Group controlId="formBasicName">
//           <Form.Label>Name</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter your name"
//             name="name"
//             onChange={updateInputValue}
//             value={formData.name}
//           />
//         </Form.Group>
//         <Form.Group controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter email"
//             name="email"
//             onChange={updateInputValue}
//             value={formData.email}
//           />
//         </Form.Group>
//         <Form.Group controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             name="password"
//             onChange={updateInputValue}
//             value={formData.password}
//           />
//         </Form.Group>
//         <Form.Group controlId="formBasicConfirmPassword">
//           <Form.Label>Confirm Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Confirm Password"
//             name="password_confirmation"
//             onChange={updateInputValue}
//             value={formData.password_confirmation}
//           />
//         </Form.Group>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         <Button variant="primary" type="submit">
//           Register
//         </Button>
//       </Form>
//     </Container>
//   );
// };