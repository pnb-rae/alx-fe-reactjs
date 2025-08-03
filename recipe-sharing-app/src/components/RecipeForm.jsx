import { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() || !description.trim()) return;

    addRecipe({ id: Date.now(), title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <br />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <br />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
