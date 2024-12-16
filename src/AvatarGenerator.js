// src/AvatarGenerator.js
import React, { useState } from 'react';

// Sample avatars categorized by type
const avatarCategories = {
  animals: [
    'https://thumbs.dreamstime.com/b/majestic-lion-wild-animals-324886909.jpg',
    'https://i.natgeofe.com/n/bec7bd50-0d57-4982-aeb5-82e5f8184f89/02-machine-saving-animals-nationalgeographic_1977490.jpg',
    'https://media.wired.com/photos/65caa6f6f553745750c04769/master/w_2560%2Cc_limit/elephant-congo-science-GettyImages-630005418.jpg',
  ],
  people: [
    'https://i.pravatar.cc/150?img=4',
    'https://i.pravatar.cc/150?img=5',
    'https://i.pravatar.cc/150?img=6',
  ],
  robots: [
    'https://robohash.org/1.png',
    'https://robohash.org/2.png',
    'https://robohash.org/3.png',
  ],
};

const AvatarGenerator = () => {
  const [category, setCategory] = useState('animals');
  const [avatarIndex, setAvatarIndex] = useState(0);

  const avatars = avatarCategories[category];

  const handleNext = () => {
    setAvatarIndex((prevIndex) => (prevIndex + 1) % avatars.length);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setAvatarIndex(0); // Reset to the first avatar in the new category
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Avatar Generator</h1>

      {/* Dropdown to select category */}
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="category">Select Category: </label>
        <select id="category" value={category} onChange={handleCategoryChange}>
          <option value="animals">Animals</option>
          <option value="people">People</option>
          <option value="robots">Robots</option>
        </select>
      </div>

      {/* Display avatar */}
      <div>
        <img
          src={avatars[avatarIndex]}
          alt="Avatar"
          style={{ width: '150px', height: '150px', borderRadius: '50%', border: '2px solid #000' }}
        />
      </div>

      {/* Next button */}
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleNext} style={{ padding: '10px 20px', fontSize: '16px' }}>
          Next Avatar
        </button>
      </div>
    </div>
  );
};

export default AvatarGenerator;
