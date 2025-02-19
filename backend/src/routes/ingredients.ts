import express, { Request, Response, NextFunction } from 'express'; // Import the correct types
import { dbPromise } from '../database/db'; // Your database promise
const router = express.Router();

// GET all ingredients
router.get("/api/ingredients", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const db = await dbPromise;
    const ingredients = await db.all("SELECT * FROM ingredients");
    res.json(ingredients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch ingredients" });
  }
});

// POST a new ingredient (if not already in the database)
router.post("/api/ingredients", async (req: Request, res: Response, next: NextFunction) => {
  const { name, category, unit, description } = req.body;
  try {
    const db = await dbPromise;
    const existingIngredient = await db.get("SELECT * FROM ingredients WHERE name = ?", [name]);
    if (existingIngredient) {
      return res.status(400).json({ error: "Ingredient already exists" });
    }
    await db.run(
      "INSERT INTO ingredients (name, category, unit, description) VALUES (?, ?, ?, ?)",
      [name, category, unit, description]
    );
    res.status(201).json({ message: "Ingredient added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add ingredient" });
  }
});

// Add selected ingredients to user inventory
router.post("/api/user-inventory", async (req: Request, res: Response, next: NextFunction) => {
  const { userId, ingredients } = req.body;
  try {
    const db = await dbPromise;
    for (const ingredient of ingredients) {
      await db.run(
        "INSERT INTO user_inventory (user_id, ingredient_id, quantity) VALUES (?, ?, ?)",
        [userId, ingredient.id, ingredient.quantity]
      );
    }
    res.json({ message: "Ingredients added to your inventory" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add to inventory" });
  }
});

export default router;
