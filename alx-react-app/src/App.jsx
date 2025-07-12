import React from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile'; // ✅ Add this

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <UserProfile 
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />  {/* ✅ Add the UserProfile component */}
      <Footer />
    </div>
  );
}

export default App;




