import React, { useState } from 'react';
import axios from 'axios';

const PasswordResetForm = () => {
  const [formData, setFormData] = useState({
    newPassword: '',
    repeatPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.newPassword !== formData.repeatPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      await axios.post('/api/password-reset', formData);
      alert('Password reset successful');
    } catch (error) {
      alert('Password reset failed: ' + error.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="password" name="newPassword" placeholder="New Password" onChange={handleChange} required />
      <input type="password" name="repeatPassword" placeholder="Repeat Password" onChange={handleChange} required />
      <button type="submit">Reset Password</button>
    </form>
  );
};

export default PasswordResetForm;