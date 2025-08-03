import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) => state.recipes.find((recipe) => recipe.id === id))
  );

  if (favorites.length === 0) {
    return <p>No favorites yet. Add some recipes to favorites!</p>;
  }

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map((recipe) => (
        recipe ? (
          <div key={recipe.id} style={{ marginBottom: '10px' }}>
            <h3>
              <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: '#007bff' }}>
                {recipe.title}
              </Link>
            </h3>
            <p>{recipe.description}</p>
          </div>
        ) : null
      ))}
    </div>
  );
};

export default FavoritesList;
