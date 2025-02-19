import React, { useState } from 'react';
import axios from 'axios';

const RecipeForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [category, setCategory] = useState('');
  const [allergies, setAllergies] = useState('');
  const [images, setImages] = useState<File[]>([]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const recipe = {
      title,
      description,
      ingredients,
      steps,
      category,
      allergies,
      images: images.map(image => URL.createObjectURL(image)),
      created_by: 'current_user', // Replace with actual user
    };
    try {
      await axios.post('/api/recipes', recipe);
      alert('Recipe added successfully!');
    } catch (error) {
      alert('Failed to add recipe');
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImages([...images, ...Array.from(event.target.files)]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} placeholder="Ingredients" required />
      <textarea value={steps} onChange={(e) => setSteps(e.target.value)} placeholder="Steps" required />
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" required />
      <input type="text" value={allergies} onChange={(e) => setAllergies(e.target.value)} placeholder="Allergies" />
      <input type="file" multiple onChange={handleImageChange} />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;