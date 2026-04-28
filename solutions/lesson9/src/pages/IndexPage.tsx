import { RecipeCard } from '@/features/recipes/component/RecipeCard';

export function IndexPage() {
  return (
    <main className="min-h-screen bg-background">
      <h1 className="text-4xl font-bold p-6">Spoonacular Recipes</h1>
      <RecipeCard />
    </main>
  );
}
