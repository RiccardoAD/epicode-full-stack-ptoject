import React, { useCallback, useRef } from 'react';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';
import './signup.css'
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/apiClient';
import { useToast } from '../../hooks/toast';

const SignUp = () => {
  const formRef = useRef(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data) => {
      try {
        formRef.current.setErrors({});

        const errors = {};

        if (!data.name) {
          errors.name = 'Name is required';
        }

        if (!data.email) {
          errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
          errors.email = 'Please use a valid email';
        }

        if (!data.password) {
          errors.password = 'Password is required';
        } else if (data.password.length < 6) {
          errors.password = 'The password must have minimum of 6 digits';
        }

        if (Object.keys(errors).length > 0) {
          formRef.current.setErrors(errors);
          return;
        }

        await api.post('/users', data);

        history.push('/');

        addToast({
          type: 'success',
          title: 'Congratulations 🎉 !',
          description: 'User successfully registered. Now you can use the GoBarber.',
        });
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Error on registration!',
          description: 'An error occurred during user registration.',
        });
      }
    },
    [addToast, history]
  );

  return (
    <div className="container">
      <div className="background" />
      <div className="content">
        <div className="animationContainer">
          <img src={logoImg} alt="Go Barber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Register yourself</h1>

            <Input name="name" icon={FiUser} placeholder="Name" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Password"
            />
            <Button type="submit">Register</Button>
          </Form>
          <Link to="/">
            <FiArrowLeft />
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;