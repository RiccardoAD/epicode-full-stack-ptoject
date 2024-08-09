import React, { useState } from 'react';
import api from '../api';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    api.post('/login', { email, password }).then(response => {
      localStorage.setItem('token', response.data.token);
      onLogin(response.data.user);
    }).catch(error => {
      console.error('Login error:', error);
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <input 
        type="email" 
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input 
        type="password" 
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;