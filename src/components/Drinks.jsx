import React, { useState } from 'react';

function Drinks() {
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  const toggleSubcategory = (subcategory) => {
    setActiveSubcategory(activeSubcategory === subcategory ? null : subcategory); // Toggle subcategory visibility
  };

  return (
    <div className="category-content">
      <h2>Drinks Menu</h2>

      {/* Subcategory buttons */}
      <div className="subcategory-grid">
        <button className="green-button" onClick={() => toggleSubcategory('cocktails')}>Cocktails</button>
        <button className="green-button" onClick={() => toggleSubcategory('juices')}>Juices</button>
        <button className="green-button" onClick={() => toggleSubcategory('smoothies')}>Smoothies</button>
        <button className="green-button" onClick={() => toggleSubcategory('mocktails')}>Mocktails</button>
      </div>

      {/* Display corresponding menu list based on active subcategory */}
      {activeSubcategory === 'cocktails' && (
        <ul className="menu-list">
          <li>Mojito - $8</li>
          <li>Piña Colada - $10</li>
        </ul>
      )}

      {activeSubcategory === 'juices' && (
        <ul className="menu-list">
          <li>Orange Juice - $5</li>
          <li>Apple Juice - $4</li>
        </ul>
      )}

      {activeSubcategory === 'smoothies' && (
        <ul className="menu-list">
          <li>Strawberry Smoothie - $6</li>
          <li>Mango Smoothie - $7</li>
        </ul>
      )}

      {activeSubcategory === 'mocktails' && (
        <ul className="menu-list">
          <li>Cucumber Lemonade - $6</li>
          <li>Virgin Mojito - $7</li>
        </ul>
      )}
    </div>
  );
}

export default Drinks;
