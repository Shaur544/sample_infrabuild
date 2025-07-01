import React from 'react';
import backgroundImage from '../assets/background.jpg'; // Make sure the path is correct

const pageStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh',
  padding: '50px 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const containerStyle = {
  backgroundColor: 'rgba(148, 180, 193, 0.9)', // semi-transparent overlay
  padding: '60px 30px',
  maxWidth: '700px',
  width: '90%',
  borderRadius: '15px',
  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
  color: '#fff',
};

const quoteStyle = {
  textAlign: 'center',
  fontSize: '1.5em',
  fontStyle: 'italic',
  marginBottom: '30px',
  color: '#ffffff',
};

const headingStyle = {
  textAlign: 'center',
  fontSize: '2.3em',
  fontWeight: 'bold',
  marginBottom: '10px',
};

const textStyle = {
  fontSize: '1.1em',
  marginBottom: '15px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '18px',
};

const inputStyle = {
  padding: '15px',
  fontSize: '1em',
  borderRadius: '10px',
  border: 'none',
  outline: 'none',
  color: '#333',
};

const textareaStyle = {
  padding: '15px',
  fontSize: '1em',
  borderRadius: '10px',
  border: 'none',
  outline: 'none',
  resize: 'vertical',
  minHeight: '120px',
  color: '#333',
};

const buttonStyle = {
  padding: '14px 25px',
  backgroundColor: '#073b4c',
  color: 'white',
  border: 'none',
  borderRadius: '10px',
  fontSize: '1.1em',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease, transform 0.2s ease',
};

const Contact = () => {
  const handleMouseOver = (e) => {
    e.target.style.backgroundColor = '#041f2b';
    e.target.style.transform = 'scale(1.05)';
  };

  const handleMouseOut = (e) => {
    e.target.style.backgroundColor = '#073b4c';
    e.target.style.transform = 'scale(1)';
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <div style={quoteStyle}>
          “Building dreams, one brick at a time.”
        </div>
        <h2 style={headingStyle}>Contact Us</h2>
        <p style={textStyle}>
          📞 Phone: <a href="tel:+919876543210" style={{ color: '#ffffff', textDecoration: 'underline' }}>+91-9876543210</a>
        </p>
        <p style={textStyle}>
          📧 Email: <a href="mailto:contact@rastogisinghinfra.com" style={{ color: '#ffffff', textDecoration: 'underline' }}>contact@rastogisinghinfra.com</a>
        </p>

        <form style={formStyle}>
          <input type="text" placeholder="Your Name" style={inputStyle} required />
          <input type="email" placeholder="Your Email" style={inputStyle} required />
          <textarea placeholder="Your Message" style={textareaStyle} required />
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
