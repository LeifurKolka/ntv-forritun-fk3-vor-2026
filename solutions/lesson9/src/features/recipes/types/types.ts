export type Recipe = {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  servings: number;
  vegetarian: boolean;
  vegan: boolean;
  healthScore: number;
  ingredients: Ingredient[];
};

export type Ingredient = {
  id: number;
  name: string;
  amount: number;
  unit: string;
};
