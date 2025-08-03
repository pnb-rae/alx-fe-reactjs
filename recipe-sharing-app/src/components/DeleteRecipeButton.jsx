import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    alert('Recipe deleted!');
    navigate('/');
  };

  return (
    <button
      onClick={handleDelete}
      style={{ marginTop: '10px', background: 'red', color: 'white' }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
