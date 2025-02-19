import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    usernameOrEmail: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', formData);
      localStorage.setItem('token', response.data.token);
      alert('Login successful');
    } catch (error) {
      alert('Login failed: ' + error.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="usernameOrEmail" placeholder="Username or Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;