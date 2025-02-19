import { Router } from 'express';
import { RecipeController } from '../controllers/recipeControllers';
import { Database } from 'sqlite3';
import { RecipeModel } from '../models/recipe-model';

const db = new Database('./database.sqlite');
const recipeModel = new RecipeModel(db);
const recipeController = new RecipeController(recipeModel);

const router = Router();

router.post('/recipes', recipeController.createRecipe);

// Add other routes like get, update, delete as needed

export default router;