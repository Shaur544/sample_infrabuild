// src/pages/Residential.jsx
import React, { useState, useMemo } from 'react';
import villaImage from '../assets/villa-image.jpg';
import apartmentImage from '../assets/apartment-image.jpg';
import modernHomeImage from '../assets/modern-home.jpg';
import penthouseImage from '../assets/penthouse.jpg';
import cottageImage from '../assets/cottage.jpg';
import duplexImage from '../assets/duplex.jpg';

const ALL_LOCATIONS = ['All', 'Lakeview', 'Downtown', 'Uptown'];
const ALL_TYPES = ['All', 'Villa', 'Apartment', 'Penthouse', 'Cottage', 'Duplex'];

const properties = [
  { id: 1, name: 'Lake View Villa', price: 12000000, location: 'Lakeview', type: 'Villa', bedrooms: 4, img: villaImage },
  { id: 2, name: 'Urban Heights Apt', price: 7500000,  location: 'Downtown', type: 'Apartment', bedrooms: 2, img: apartmentImage },
  { id: 3, name: 'Modern Family Home', price: 9500000, location: 'Uptown',   type: 'Cottage', bedrooms: 3, img: modernHomeImage },
  { id: 4, name: 'Skyline Penthouse', price: 25000000, location: 'Downtown', type: 'Penthouse', bedrooms: 5, img: penthouseImage },
  { id: 5, name: 'Countryside Cottage', price: 6800000, location: 'Lakeview', type: 'Cottage', bedrooms: 3, img: cottageImage },
  { id: 6, name: 'Suburban Duplex', price: 8200000, location: 'Uptown', type: 'Duplex', bedrooms: 4, img: duplexImage },
];

const Residential = () => {
  // filter/sort state
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('All');
  const [type, setType] = useState('All');
  const [bedrooms, setBedrooms] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 30000000]);
  const [sortBy, setSortBy] = useState('priceAsc');

  // filtered + sorted list
  const filtered = useMemo(() => {
    let list = properties.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchesLocation = location === 'All' || p.location === location;
      const matchesType = type === 'All' || p.type === type;
      const matchesBedrooms = p.bedrooms >= bedrooms;
      const matchesPrice  = p.price >= priceRange[0] && p.price <= priceRange[1];
      return matchesSearch && matchesLocation && matchesType && matchesBedrooms && matchesPrice;
    });
    // sorting
    return list.sort((a,b) => {
      if (sortBy === 'priceAsc')   return a.price - b.price;
      if (sortBy === 'priceDesc')  return b.price - a.price;
      if (sortBy === 'bedAsc')     return a.bedrooms - b.bedrooms;
      if (sortBy === 'bedDesc')    return b.bedrooms - a.bedrooms;
      return 0;
    });
  }, [search, location, type, bedrooms, priceRange, sortBy]);

  return (
    <div style={{
      padding: '40px 20px',
      background: 'linear-gradient(135deg, #f9f9f9 0%, #e6e6e6 100%)'
    }}>
      {/* Filters */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
        gap: '20px',
        marginBottom: '40px'
      }}>
        <input
          type="text"
          placeholder="Search properties..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ padding: '10px', fontSize: '16px', borderRadius: '6px', border: '1px solid #ccc' }}
        />
        <select
          value={location}
          onChange={e => setLocation(e.target.value)}
          style={{ padding: '10px', fontSize: '16px', borderRadius: '6px', border: '1px solid #ccc' }}
        >
          {ALL_LOCATIONS.map(loc => <option key={loc} value={loc}>{loc}</option>)}
        </select>
        <select
          value={type}
          onChange={e => setType(e.target.value)}
          style={{ padding: '10px', fontSize: '16px', borderRadius: '6px', border: '1px solid #ccc' }}
        >
          {ALL_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        <div>
          <label style={{ fontSize: '14px' }}>Min Bedrooms</label>
          <input
            type="number"
            min="1" max="10"
            value={bedrooms}
            onChange={e => setBedrooms(Number(e.target.value))}
            style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '6px', border: '1px solid #ccc' }}
          />
        </div>
        <div>
          <label style={{ fontSize: '14px' }}>Max Price (₹)</label>
          <input
            type="range"
            min="0"
            max="30000000"
            step="500000"
            value={priceRange[1]}
            onChange={e => setPriceRange([0, Number(e.target.value)])}
            style={{ width: '100%' }}
          />
          <div style={{ textAlign: 'right', fontSize: '14px' }}>
            ₹{(priceRange[1]/100000).toFixed(0)}L
          </div>
        </div>
      </div>

      {/* Sort */}
      <div style={{ textAlign: 'right', marginBottom: '20px' }}>
        <label style={{ marginRight: '10px' }}>Sort By:</label>
        <select
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
          style={{ padding: '8px', fontSize: '16px', borderRadius: '6px', border: '1px solid #ccc' }}
        >
          <option value="priceAsc">Price ↑</option>
          <option value="priceDesc">Price ↓</option>
          <option value="bedAsc">Beds ↑</option>
          <option value="bedDesc">Beds ↓</option>
        </select>
      </div>

      {/* Property Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px,1fr))',
        gap: '30px'
      }}>
        {filtered.map(p => (
          <div key={p.id} style={{
            background: '#fff',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <img
              src={p.img}
              alt={p.name}
              style={{ width: '100%', height: '180px', objectFit: 'cover' }}
            />
            <div style={{ padding: '20px', flexGrow: 1 }}>
              <h3 style={{ margin: '0 0 10px', color: '#2C3E50' }}>{p.name}</h3>
              <p style={{ margin: '0 0 5px' }}>₹{(p.price/100000).toFixed(1)}L</p>
              <p style={{ margin: '0 0 5px', color: '#555' }}>{p.location} | {p.type}</p>
              <p style={{ margin: '0 0 15px', color: '#555' }}>{p.bedrooms} Bedrooms</p>
            </div>
            <button style={{
              backgroundColor: '#2C3E50',
              color: '#fff',
              padding: '12px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px'
            }}>
              Enquire Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Residential;
