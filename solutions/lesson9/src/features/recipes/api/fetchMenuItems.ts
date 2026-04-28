import type { Recipe } from '../types/types';
import { RecipeSchema } from '../schema/schema';

export async function fetchRecipes(): Promise<Recipe[]> {
  try {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/random?number=5&exclude-tags=quinoa&apiKey=${import.meta.env.VITE_API_KEY}`,
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch menu items: ${res.statusText}`);
    }

    const data = await res.json();

    const parsed = RecipeSchema.array().parse(data.recipes);

    return parsed.map((item): Recipe => {
      return {
        id: item.id,
        title: item.title,
        image: item.image,
        readyInMinutes: item.readyInMinutes,
        servings: item.servings,
        vegetarian: item.vegetarian,
        vegan: item.vegan,
        healthScore: item.healthScore,
        ingredients: item.extendedIngredients.map((ingredient) => {
          return {
            id: ingredient.id,
            name: ingredient.name,
            amount: ingredient.amount,
            unit: ingredient.unit,
          };
        }),
      };
    });
  } catch (error) {
    console.error('Error fetching menu items', error);
    return [];
  }
}
