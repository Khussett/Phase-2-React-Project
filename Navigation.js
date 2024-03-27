import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const linkStyle = {
    textDecoration: 'none' 
  };

  return (
    <nav>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><Link to="/" style={linkStyle}><h4>Home</h4></Link></li>
        <li><Link to="/about" style={linkStyle}><h4>About</h4></Link></li>
        <li><Link to="/http://localhost:3000" style={linkStyle}><h4>Take Me to the App</h4></Link></li>



      </ul>
    </nav>
  );
}

export default Navigation;
