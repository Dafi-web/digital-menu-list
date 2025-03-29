import React, { useState } from 'react';

function Info() {
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  const toggleSubcategory = (subcategory) => {
    setActiveSubcategory(activeSubcategory === subcategory ? null : subcategory); // Toggle subcategory visibility
  };

  return (
    <div className="category-content">
      <h2>Info</h2>

      {/* Subcategory buttons */}
      <div className="subcategory-grid">
        <button className="green-button" onClick={() => toggleSubcategory('about')}>About Us</button>
        <button className="green-button" onClick={() => toggleSubcategory('contact')}>Contact</button>
        <button className="green-button" onClick={() => toggleSubcategory('terms')}>Terms & Conditions</button>
      </div>

      {/* Display corresponding menu list based on active subcategory */}
      {activeSubcategory === 'about' && (
        <div className="info-text">
          <p>We are a family-owned restaurant serving international cuisine with fresh ingredients and exceptional service.</p>
        </div>
      )}

      {activeSubcategory === 'contact' && (
        <div className="info-text">
          <p>Contact us at: info@restaurant.com</p>
        </div>
      )}

      {activeSubcategory === 'terms' && (
        <div className="info-text">
          <p>Our terms and conditions are available upon request. Please ask our staff for more information.</p>
        </div>
      )}
    </div>
  );
}

export default Info;
