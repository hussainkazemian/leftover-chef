import { Router } from 'express';
import { createRecipe, updateRecipe, getRecipes } from '../controllers/recipeControllers';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.post('/recipes', authMiddleware, createRecipe);
router.put('/recipes/:id', authMiddleware, updateRecipe);
router.get('/recipes', getRecipes);

export default router;