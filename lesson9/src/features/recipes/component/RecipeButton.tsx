type RecipeButtonProps = {
  onClick: () => void;
  loading: boolean;
};

export function RecipeButton({ onClick, loading }: RecipeButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      className="px-4 py-2 rounded-lg bg-black text-white disabled:opacity-50"
    >
      {loading ? "Loading..." : "Get new recipe"}
    </button>
  );
}