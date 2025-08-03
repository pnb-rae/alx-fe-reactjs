import './App.css';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <div
      className="App"
      style={{
        padding: '20px',
        maxWidth: '600px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>
        Recipe Sharing App
      </h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;


