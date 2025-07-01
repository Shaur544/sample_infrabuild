import React from 'react';
import { Link } from 'react-router-dom';

const navStyle = {
  padding: '15px 20px',
  background: 'linear-gradient(90deg, #001f3d, #94B4C1)', // Dark blue to white gradient
  color: 'white',
  display: 'flex',
  justifyContent: 'space-evenly', // Evenly spaced links
  alignItems: 'center',
  borderBottom: '3px solid #222', // Stronger border at the bottom
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Deeper shadow for a more prominent effect
  position: 'sticky', // Make navbar stick at the top on scroll
  top: 0,
  zIndex: 1000,
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  transition: 'background-color 0.3s ease, color 0.3s ease, transform 0.3s ease, letter-spacing 0.3s ease', // Smooth hover transition
  fontSize: '18px', // Increase font size for better readability
  textTransform: 'uppercase', // Make links look more modern
};

const linkHoverStyle = {
  backgroundColor: '#555', // Background color change on hover
  transform: 'scale(1.1)', // Slight scale effect for interactivity
  color: '#f39c12', // Change text color on hover (gold)
  letterSpacing: '2px', // Add letter-spacing effect on hover for a "spread out" look
};

const activeStyle = {
  backgroundColor: '#444', // Active link background
  color: '#f39c12', // Active link text color (gold)
};

const NavBar = () => {
  return (
    <nav style={navStyle}>
      <Link 
        to="/" 
        style={linkStyle} 
        activeStyle={activeStyle}
        onMouseOver={(e) => e.target.style.backgroundColor = '#555'} 
        onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
      >
        Home
      </Link>
      <Link 
        to="/residential" 
        style={linkStyle} 
        activeStyle={activeStyle}
        onMouseOver={(e) => e.target.style.backgroundColor = '#555'} 
        onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
      >
        Residential
      </Link>
      <Link 
        to="/commercial" 
        style={linkStyle} 
        activeStyle={activeStyle}
        onMouseOver={(e) => e.target.style.backgroundColor = '#555'} 
        onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
      >
        Commercial
      </Link>
      <Link 
        to="/contact" 
        style={linkStyle} 
        activeStyle={activeStyle}
        onMouseOver={(e) => e.target.style.backgroundColor = '#555'} 
        onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
      >
        Contact
      </Link>
    </nav>
  );
};

export default NavBar;
