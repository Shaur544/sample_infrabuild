// src/pages/Commercial.jsx
import React, { useState, useMemo } from 'react';
import officeParkImg from '../assets/office-park.jpg';
import cityMallImg from '../assets/city-mall.jpg';
import warehouseImg from '../assets/warehouse.jpg';
import coworkingImg from '../assets/coworking.jpg';
import showroomImg from '../assets/showroom.jpg';
import towerImg from '../assets/tower.jpg';

const ALL_TYPES = ['All', 'Office', 'Retail', 'Warehouse', 'Co-Working', 'Showroom', 'Tower'];

const commercialSpaces = [
  { id: 1, name: 'Tech Business Park',      price: 50000000, area: 5000,  type: 'Office',     img: officeParkImg },
  { id: 2, name: 'City Mall',               price: 100000000,area: 15000, type: 'Retail',     img: cityMallImg },
  { id: 3, name: 'Central Warehouse',       price: 30000000, area: 12000, type: 'Warehouse',  img: warehouseImg },
  { id: 4, name: 'Urban Co-Working Hub',    price: 20000000, area: 4000,  type: 'Co-Working', img: coworkingImg },
  { id: 5, name: 'Luxury Auto Showroom',    price: 45000000, area: 8000,  type: 'Showroom',   img: showroomImg },
  { id: 6, name: 'Skyline Office Tower',    price: 80000000, area: 10000, type: 'Tower',      img: towerImg },
];

const Commercial = () => {
  // state
  const [search, setSearch] = useState('');
  const [type, setType] = useState('All');
  const [minArea, setMinArea] = useState(0);
  const [priceCap, setPriceCap] = useState(100000000);
  const [sortBy, setSortBy] = useState('priceAsc');

  // filter + sort
  const list = useMemo(() => {
    let filtered = commercialSpaces.filter(p => {
      const mSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const mType   = type === 'All' || p.type === type;
      const mArea   = p.area >= minArea;
      const mPrice  = p.price <= priceCap;
      return mSearch && mType && mArea && mPrice;
    });
    return filtered.sort((a,b) => {
      if (sortBy === 'priceAsc')  return a.price - b.price;
      if (sortBy === 'priceDesc') return b.price - a.price;
      if (sortBy === 'areaAsc')   return a.area - b.area;
      if (sortBy === 'areaDesc')  return b.area - a.area;
      return 0;
    });
  }, [search, type, minArea, priceCap, sortBy]);

  return (
    <div style={{
      padding: '40px 20px',
      background: 'linear-gradient(135deg, #fafafa 0%, #e8e8e8 100%)'
    }}>
      {/* Filters */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gap: '20px',
        marginBottom: '30px'
      }}>
        <input
          type="text"
          placeholder="Search spaces..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ padding: '10px', fontSize: '16px', borderRadius: '6px', border: '1px solid #ccc' }}
        />
        <select
          value={type}
          onChange={e => setType(e.target.value)}
          style={{ padding: '10px', fontSize: '16px', borderRadius: '6px', border: '1px solid #ccc' }}
        >
          {ALL_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        <div>
          <label style={{ fontSize: '14px' }}>Min Area (sq.ft)</label>
          <input
            type="number"
            min="0"
            value={minArea}
            onChange={e => setMinArea(Number(e.target.value))}
            style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '6px', border: '1px solid #ccc' }}
          />
        </div>
        <div>
          <label style={{ fontSize: '14px' }}>Max Price (₹)</label>
          <input
            type="range"
            min="0"
            max="100000000"
            step="1000000"
            value={priceCap}
            onChange={e => setPriceCap(Number(e.target.value))}
            style={{ width: '100%' }}
          />
          <div style={{ textAlign: 'right', fontSize: '14px' }}>
            ₹{(priceCap/10000000).toFixed(1)}Cr
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
          <option value="areaAsc">Area ↑</option>
          <option value="areaDesc">Area ↓</option>
        </select>
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px,1fr))',
        gap: '30px'
      }}>
        {list.map(p => (
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
              <p style={{ margin: '0 0 5px' }}>₹{(p.price/10000000).toFixed(1)}Cr</p>
              <p style={{ margin: '0 0 5px', color: '#555' }}>{p.area} sq.ft | {p.type}</p>
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

export default Commercial;
