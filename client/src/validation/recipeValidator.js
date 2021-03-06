import validator from 'validator';
import isEmpty from 'lodash.isempty';

const recipeValidator = (recipe) => {
  const errors = {};

  if (validator.isEmpty(recipe.name.trim() || '')) {
    errors.name = 'Recipe name cannot be empty';
  }
  if (validator.isEmpty(recipe.description.trim() || '')) {
    errors.description = 'Recipe should have a decription';
  }
  if (validator.isEmpty(recipe.ingredients.trim() || '')) {
    errors.ingredients = 'Ingredients cannot be empty';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
export default recipeValidator;
