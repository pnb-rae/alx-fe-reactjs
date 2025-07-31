import UserProfile from './components/UserProfile';
import UserContext from './UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;








