import { Request, Response, NextFunction } from 'express';
import { RecipeModel, Recipe } from '../models/recipe-model';

export class RecipeController {
  private recipeModel: RecipeModel;

  constructor(recipeModel: RecipeModel) {
    this.recipeModel = recipeModel;
  }

  public createRecipe = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const recipe: Recipe = req.body;
      const newRecipe = await this.recipeModel.create(recipe);
      res.status(201).json(newRecipe);
    } catch (error) {
      next(error);
    }
  };

  // Add other methods like get, update, delete as needed
}

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