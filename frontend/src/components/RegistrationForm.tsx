import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    familyName: '',
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    profession: '',
    age: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/register', formData);
      alert('Registration successful');
    } catch (error) {
      alert('Registration failed: ' + error.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="text" name="familyName" placeholder="Family Name" onChange={handleChange} required />
      <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <input type="text" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} />
      <input type="text" name="profession" placeholder="Profession" onChange={handleChange} />
      <input type="number" name="age" placeholder="Age" onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;