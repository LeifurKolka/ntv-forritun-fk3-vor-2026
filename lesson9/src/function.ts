const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

export type Recipe = {
  id: number;
  title: string;
  image: string;
  summary?: string;
  readyInMinutes?: number;
  servings?: number;
};

export async function getRandomRecipe(): Promise<Recipe> {
  if (!API_KEY) {
    throw new Error("Missing VITE_SPOONACULAR_API_KEY in .env");
  }

  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=1&apiKey=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch recipe");
  }

  const data = await response.json();

  if (!data.recipes || data.recipes.length === 0) {
    throw new Error("No recipe found");
  }

  return data.recipes[0];
}