import { useParams } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';

const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={id} />;
};

export default RecipeDetailsWrapper;
