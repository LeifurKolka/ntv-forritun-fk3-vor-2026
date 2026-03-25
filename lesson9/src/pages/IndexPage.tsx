import { useEffect, useState } from "react";
import { getRandomRecipe, type Recipe } from "../function";
import { RecipeCard } from "../features/recipes/component/RecipeCard";
import { RecipeButton } from "../features/recipes/component/RecipeButton";

export function IndexPage() {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadRecipe = async () => {
    try {
      setLoading(true);
      setError("");
      const newRecipe = await getRandomRecipe();
      setRecipe(newRecipe);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRecipe();
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground p-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold">Verkefni 9</h1>

        <RecipeButton onClick={loadRecipe} loading={loading} />

        {error && (
          <p className="text-red-500">{error}</p>
        )}

        <RecipeCard recipe={recipe} />
      </div>
    </main>
  );
}