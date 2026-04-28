import { Button } from '@/components/ui/button';
import { ShuffleIcon } from 'lucide-react';

export function RecipeButton({ onClick }: RecipeButtonProps) {
  return (
    <Button onClick={onClick} className="w-full">
      <span className="sr-only">Get Random Recipe</span>
      <ShuffleIcon />
    </Button>
  );
}

export default RecipeButton;

type RecipeButtonProps = {
  onClick: () => void;
};
