import ProfilePage from './components/ProfilePage';
import UserContext from './UserContext';

function App() {
  // The user data that will be shared across components using Context
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    // Wrapping the entire component tree that needs access to userData
    <UserContext.Provider value={userData}>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ textAlign: 'center', color: 'navy' }}>User Profile</h1>
        <ProfilePage />
      </div>
    </UserContext.Provider>
  );
}

export default App;






