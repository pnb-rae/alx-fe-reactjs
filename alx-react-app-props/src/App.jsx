import UserProfile from './components/UserProfile';
import UserContext from './UserContext';

function App() {
  // The user data that will be shared across components using Context
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    // Provide userData to all components that consume UserContext
    <UserContext.Provider value={userData}>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ textAlign: 'center', color: 'navy' }}>User Profile App</h1>
        <UserProfile />
      </div>
    </UserContext.Provider>
  );
}

export default App;







