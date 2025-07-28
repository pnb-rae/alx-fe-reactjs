import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  return (
    <div>
      <Header />
      <WelcomeMessage name="Ryan Waweru" />
      <MainContent />
      <UserProfile
        name="Ryan Waweru"
        age={25}
        bio="A passionate developer learning React and building cool projects."
      />
      <Footer />
    </div>
  );
}

export default App;





