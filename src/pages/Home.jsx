import React from 'react';
import cityHighrise from '../assets/city-highrise.jpg'; // Importing the local image
import precisionEngineeringImg from '../assets/precision-engineering.jpg'; // Importing the downloaded image for Precision Engineering
import sustainablePracticesImg from '../assets/sustainable-practices.jpg'; // Importing the downloaded image for Sustainable Practices
import residentialProjectImg from '../assets/residential-project.jpg'; // Importing the downloaded image for Residential Project
import commercialProjectImg from '../assets/commercial-project.jpg'; // Importing the downloaded image for Commercial Project

const Home = () => {
  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', color: '#333' }}>
      {/* Hero Section */}
      <div style={{
        padding: '40px 20px',
        textAlign: 'center',
        backgroundColor: '#2C3E50',
        color: 'white',
      }}>
        <h1 style={{ fontSize: '42px', fontWeight: 'bold' }}>Brick by Brick</h1>
        <p style={{ fontSize: '20px', maxWidth: '700px', margin: '20px auto' }}>
          We build not just properties, but your future. Explore world-class residential and commercial spaces.
        </p>
        <img
          src={cityHighrise} // Using the local image here
          alt="City High-rise Buildings"
          style={{ width: '90%', maxWidth: '1000px', borderRadius: '12px', marginTop: '20px' }}
        />
      </div>

      {/* About Us Section */}
      <div style={{ padding: '50px 20px', backgroundColor: '#f0f0f0' }}>
        <h2 style={{ textAlign: 'center', color: '#2C3E50' }}>Who We Are</h2>
        <p style={{ maxWidth: '800px', margin: '20px auto', fontSize: '17px' }}>
          Brick by Brick is a premier construction and real estate development company committed to excellence in quality, design, and execution.
          With decades of experience, we deliver exceptional residential and commercial properties tailored to modern lifestyles.
        </p>
      </div>

      {/* Why Choose Us */}
      <div style={{ padding: '50px 20px', backgroundColor: '#ffffff' }}>
        <h2 style={{ textAlign: 'center', color: '#2C3E50' }}>Why Choose Brick by Brick</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px', marginTop: '30px' }}>
          {[
            {
              title: "Precision Engineering",
              desc: "Every structure we build is crafted with attention to detail and advanced engineering.",
              img: precisionEngineeringImg // Using the downloaded image for Precision Engineering
            },
            {
              title: "Elegant Design",
              desc: "We blend functionality with elegance to give your space a modern, timeless appeal.",
              img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"
            },
            {
              title: "Sustainable Practices",
              desc: "We incorporate green building materials and energy-efficient systems into every project.",
              img: sustainablePracticesImg // Using the downloaded image for Sustainable Practices
            }
          ].map((item, idx) => (
            <div key={idx} style={{ width: '300px', textAlign: 'center' }}>
              <img
                src={item.img}
                alt={item.title}
                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px' }}
              />
              <h3 style={{ color: '#2C3E50', marginTop: '10px' }}>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Projects Section */}
      <div style={{ padding: '50px 20px', backgroundColor: '#f8f8f8' }}>
        <h2 style={{ textAlign: 'center', color: '#2C3E50' }}>Featured Projects</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', marginTop: '30px' }}>
          <div style={{ maxWidth: '400px' }}>
            <img
              src="https://images.unsplash.com/photo-1584270354949-d4a0a3d2b336?auto=format&fit=crop&w=800&q=80"
              alt="Residential Project"
              style={{ width: '100%', borderRadius: '10px' }}
            />
            <h3 style={{ marginTop: '10px', color: '#2C3E50' }}>Skyline Residency</h3>
            <p>Luxury 2/3 BHK apartments in the heart of the city.</p>
          </div>
          <div style={{ maxWidth: '400px' }}>
            <img
              src="https://images.unsplash.com/photo-1551598989-8d2b1e7a4349?auto=format&fit=crop&w=800&q=80"
              alt="Commercial Project"
              style={{ width: '100%', borderRadius: '10px' }}
            />
            <h3 style={{ marginTop: '10px', color: '#2C3E50' }}>Elevate Business Park</h3>
            <p>Modern office spaces tailored for growing businesses.</p>
          </div>
        </div>
        {/* New Images for Residential and Commercial at the end */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '30px' }}>
          <div style={{ maxWidth: '400px' }}>
            <img
              src={residentialProjectImg} // Using the downloaded image for Residential Project
              alt="Residential Project"
              style={{ width: '100%', borderRadius: '10px' }}
            />
            <h3 style={{ marginTop: '10px', color: '#2C3E50' }}>Residential Project</h3>
            <p>Stunning homes built with precision and style.</p>
          </div>
          <div style={{ maxWidth: '400px' }}>
            <img
              src={commercialProjectImg} // Using the downloaded image for Commercial Project
              alt="Commercial Project"
              style={{ width: '100%', borderRadius: '10px' }}
            />
            <h3 style={{ marginTop: '10px', color: '#2C3E50' }}>Commercial Project</h3>
            <p>Innovative office spaces designed to foster growth and productivity.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
