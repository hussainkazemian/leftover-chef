import React, { useState } from 'react';
import axios from 'axios';

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    images: []
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, images: Array.from(e.target.files) });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('description', formData.description);
    formData.images.forEach((image) => {
      formDataToSend.append('images', image);
    });

    try {
      await axios.post('/api/recipes', formDataToSend, { headers: { Authorization: `Bearer ${token}` } });
      alert('Recipe added successfully'); // eslint-disable-line no-alert
    } catch (error) {    
      alert('Failed to add recipe: ' + error.response.data.error); // eslint-disable-line no-alert
    }