import { Request, Response } from 'express';
import recipeService from '../services/recipeServie';

export const createRecipe = async (req: Request, res: Response) => {
  try {
    const recipe = await recipeService.create(req.user.id, req.body);
    res.status(201).json(recipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateRecipe = async (req: Request, res: Response) => {
  try {
    const recipe = await recipeService.update(req.user.id, req.params.id, req.body);
    res.status(200).json(recipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getRecipes = async (req: Request, res: Response) => {
  try {
    const recipes = await recipeService.getAll();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};