import { useState, useEffect } from "react";

// Define type for selected ingredients
interface Ingredient {
  id: number;
  name: string;
  category: string;
  unit: string;
  description?: string;
}

const IngredientSelection = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [newIngredient, setNewIngredient] = useState<Ingredient>({
    id: 0,
    name: "",
    category: "",
    unit: "g", // Default unit
    description: "",
  });

  const [selectedIngredients, setSelectedIngredients] = useState<{ id: number; quantity: number }[]>([]);

  // Fetch ingredients from the backend when the component mounts
  useEffect(() => {
    fetch("http://localhost:5000/api/ingredients")
      .then((res) => res.json())
      .then((data) => setIngredients(data))
      .catch((err) => console.error(err));
  }, []);

  // Handle ingredient selection
  const handleSelect = (id: number, quantity: number) => {
    setSelectedIngredients((prev) => [...prev, { id, quantity }]);
  };

  // Handle adding a new ingredient
  const handleAddNewIngredient = () => {
    fetch("http://localhost:5000/api/ingredients", {
      method: "POST",
      body: JSON.stringify(newIngredient),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Ingredient added successfully") {
          // Fetch the updated list of ingredients
          fetch("http://localhost:5000/api/ingredients")
            .then((res) => res.json())
            .then((data) => setIngredients(data));
        } else {
          alert(data.error);
        }
      })
      .catch((err) => console.error(err));
  };

  const submitSelection = () => {
    fetch("http://localhost:5000/api/user-inventory", {
      method: "POST",
      body: JSON.stringify({ userId: 1, ingredients: selectedIngredients }),
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <div>
      <h2>Select Ingredients</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.id}>
            {ingredient.name} 
            <button onClick={() => handleSelect(ingredient.id, 1)}>Add</button>
          </li>
        ))}
      </ul>

      <h3>Add a New Ingredient</h3>
      <input
        type="text"
        value={newIngredient.name}
        onChange={(e) => setNewIngredient({ ...newIngredient, name: e.target.value })}
        placeholder="Ingredient Name"
      />
      <input
        type="text"
        value={newIngredient.category}
        onChange={(e) => setNewIngredient({ ...newIngredient, category: e.target.value })}
        placeholder="Category"
      />
      <input
        type="text"
        value={newIngredient.unit}
        onChange={(e) => setNewIngredient({ ...newIngredient, unit: e.target.value })}
        placeholder="Unit"
      />
      <input
        type="text"
        value={newIngredient.description}
        onChange={(e) => setNewIngredient({ ...newIngredient, description: e.target.value })}
        placeholder="Description (Optional)"
      />
      <button onClick={handleAddNewIngredient}>Add Ingredient</button>

      <h3>Your Selected Ingredients</h3>
      <button onClick={submitSelection}>Save Ingredients</button>
    </div>
  );
};

export default IngredientSelection;
