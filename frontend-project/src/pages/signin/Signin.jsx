import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';
import styles from './SignIn.module.css';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

const SignIn = () => {
  const formRef = useRef(null);
  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data) => {
      try {
        formRef.current.setErrors({});
        
        const errors = {};

        if (!data.email) {
          errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
          errors.email = 'Please use a valid email';
        }

        if (!data.password) {
          errors.password = 'Password is required';
        }

        if (Object.keys(errors).length > 0) {
          formRef.current.setErrors(errors);
          return;
        }

        await signIn({
          email: data.email,
          password: data.password,
        });
        history.push('/dashboard');
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Authentication error',
          description: 'Error during login, please check your credentials',
        });
      }
    },
    [signIn, history, addToast]
  );

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.animationContainer}>
          <img src={logoImg} alt="Go Barber" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Login</h1>
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input name="password" icon={FiLock} type="password" placeholder="Password" />
            <Button type="submit">Enter</Button>
            <Link to="/forgot-password">Forgot password</Link>
          </Form>
          <Link to="signup">
            <FiLogIn />
            Create a new account
          </Link>
        </div>
      </div>
      <div className={styles.background}></div>
    </div>
  );
};

export default SignIn