import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useState } from 'react';
import type { Recipe } from '../types/types';
import { fetchRecipes } from '../api/fetchMenuItems';
import { RecipeButton } from './RecipeButton';
import { VeganIcon } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function RecipeCard() {
  const [recipe, setRecipe] = useState<Recipe[]>([]);

  const handleFetchRecipe = async () => {
    const data = await fetchRecipes();
    setRecipe(data);
  };

  if (recipe?.length === 0) {
    return <RecipeButton onClick={handleFetchRecipe} />;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center w-full">
        <RecipeButton onClick={handleFetchRecipe} />
      </div>

      {recipe.map((recipe) => (
        <Card
          key={recipe.id}
          className="flex flex-row gap-0 overflow-hidden p-0"
        >
          <CardHeader className="flex flex-1 basis-0 min-w-0 flex-col gap-4 border-0 border-r py-6">
            <img
              src={recipe?.image}
              alt={recipe?.title}
              className="aspect-video w-full rounded-md object-cover"
            />
            <CardTitle className="text-2xl font-bold">
              {recipe?.title}
            </CardTitle>
            <CardDescription className="text-lg">
              {recipe?.readyInMinutes} minutes
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-1 basis-0 min-w-0 flex-col gap-2 py-6 text-left">
            <h2>Health score: {recipe.healthScore}</h2>
            <p className="text-sm">Servings: {recipe?.servings}</p>
            {recipe.vegan && <VeganIcon />}
            <ul>
              {recipe.ingredients.map((ingredient) => (
                <>
                  <li
                    className="flex flex-row justify-between px-2 text-left"
                    key={ingredient.id}
                  >
                    {ingredient.name}{' '}
                    <span className="text-sm">
                      {ingredient.amount} {ingredient.unit}
                    </span>
                  </li>
                  <Separator />
                </>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
