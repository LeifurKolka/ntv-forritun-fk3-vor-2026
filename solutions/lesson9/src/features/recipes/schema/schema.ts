import z from 'zod';

export const RecipeSchema = z.object({
  id: z.number(),
  title: z.string(),
  image: z.string(),
  readyInMinutes: z.number(),
  servings: z.number(),
  vegetarian: z.boolean(),
  vegan: z.boolean(),
  healthScore: z.number(),
  extendedIngredients: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      amount: z.number(),
      unit: z.string(),
    }),
  ),
});
