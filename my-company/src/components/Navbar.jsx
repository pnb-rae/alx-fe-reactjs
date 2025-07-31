import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#333', padding: '10px' }}>
      <Link to="/" style={{ color: 'white', margin: '0 10px' }}>Home</Link>
      <Link to="/about" style={{ color: 'white', margin: '0 10px' }}>About</Link>
      <Link to="/services" style={{ color: 'white', margin: '0 10px' }}>Services</Link>
      <Link to="/contact" style={{ color: 'white', margin: '0 10px' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;


