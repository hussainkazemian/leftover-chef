import { Recipe } from '../models/recipeModel';

const create = async (userId, recipeData) => {
  const recipe = await Recipe.create({ userId, ...recipeData });
  return recipe;
};

const update = async (userId, recipeId, recipeData) => {
  const recipe = await Recipe.findByPk(recipeId);

  if (!recipe || recipe.userId !== userId) {
    throw new Error('Recipe not found or not authorized');
  }

  await recipe.update(recipeData);
  return recipe;
};

const getAll = async () => {
  const recipes = await Recipe.findAll();
  return recipes;
};

export default { create, update, getAll };