import type { Recipe } from "../../../function";

type RecipeCardProps = {
  recipe: Recipe | null;
};

export function RecipeCard({ recipe }: RecipeCardProps) {
  if (!recipe) {
    return (
      <div className="rounded-xl border p-6 bg-card text-card-foreground">
        <p>No recipe loaded yet.</p>
      </div>
    );
  }

  return (
    <article className="rounded-xl border p-6 bg-card text-card-foreground shadow-sm max-w-xl w-full">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />

      <h2 className="text-2xl font-bold mb-2">{recipe.title}</h2>

      <div className="flex gap-4 text-sm mb-4">
        <span>Ready in: {recipe.readyInMinutes ?? "?"} min</span>
        <span>Servings: {recipe.servings ?? "?"}</span>
      </div>

      {recipe.summary && (
        <div
          className="text-sm leading-6"
          dangerouslySetInnerHTML={{ __html: recipe.summary }}
        />
      )}
    </article>
  );
}