import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        display: 'block',
        margin: '20px auto',
        padding: '10px',
        width: '80%',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '4px'
      }}
    />
  );
};

export default SearchBar;

