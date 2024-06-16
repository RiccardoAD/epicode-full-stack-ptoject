import React, { useCallback, useRef } from 'react';
import { FiMail, FiLock, FiUser, FiCamera, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';
import './profile.css';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/apiClient';
import { useToast } from '../../hooks/toast';
import { useAuth } from '../../hooks/auth';

const Profile = () => {
  const formRef = useRef(null);
  const { addToast } = useToast();
  const { user, updateUser } = useAuth();
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
        if (data.old_password && !data.password) {
          errors.password = 'Required Field';
        }
        if (data.password !== data.password_confirmation) {
          errors.password_confirmation = 'The passwords do not match';
        }

        if (Object.keys(errors).length > 0) {
          formRef.current.setErrors(errors);
          return;
        }

        const { name, email, old_password, password, password_confirmation } = data;

        const formData = {
          name,
          email,
          ...(old_password
            ? {
                old_password,
                password,
                password_confirmation,
              }
            : {}),
        };

        const response = await api.put('/profile', formData);

        updateUser(response.data);

        history.push('/dashboard');

        addToast({
          type: 'success',
          title: 'Profile Updated 🎉 !',
          description: 'Your informations were successfully updated.',
        });
      } catch (err) {
        const errors = getValidationErrors(err);

        formRef.current.setErrors(errors);

        addToast({
          type: 'error',
          title: 'Error on information updating!',
          description: 'An error occurred during profile update.',
        });
      }
    },
    [addToast, history, updateUser]
  );

  const handleAvatarChange = useCallback(
    (e) => {
      if (e.target.files) {
        const data = new FormData();

        data.append('avatar', e.target.files[0]);
        api.patch('/users/avatar', data).then((response) => {
          updateUser(response.data);
          addToast({
            type: 'success',
            title: 'Avatar was updated',
          });
        });
      }
    },
    [addToast, updateUser]
  );

  return (
    <div className="container">
      <header>
        <div>
          <Link to="/dashboard">
            <FiArrowLeft />
          </Link>
        </div>
      </header>

      <div className="content">
        <Form
          ref={formRef}
          onSubmit={handleSubmit}
          initialData={{
            name: user.name,
            email: user.email,
          }}
        >
          <div className="avatar-input">
            <img src={user.avatar_url} alt={user.name} />
            <label htmlFor="avatar">
              <FiCamera />
              <input type="file" id="avatar" onChange={handleAvatarChange} />
            </label>
          </div>

          <h1>My Profile</h1>

          <Input name="name" icon={FiUser} placeholder="Name" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            containerStyle={{ marginTop: 24 }}
            name="old_password"
            icon={FiLock}
            type="password"
            placeholder="Old password"
          />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="New password"
          />
          <Input
            name="password_confirmation"
            icon={FiLock}
            type="password"
            placeholder="Confirm password"
          />
          <Button type="submit">Confirm changes</Button>
        </Form>
      </div>
    </div>
  );
};

export default Profile;