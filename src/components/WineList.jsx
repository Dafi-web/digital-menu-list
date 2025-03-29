import React, { useState } from 'react';

function WineList() {
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  const toggleSubcategory = (subcategory) => {
    setActiveSubcategory(activeSubcategory === subcategory ? null : subcategory); // Toggle subcategory visibility
  };

  return (
    <div className="category-content">
      <h2>Wine List</h2>

      {/* Subcategory buttons */}
      <div className="subcategory-grid">
        <button className="green-button" onClick={() => toggleSubcategory('red-wines')}>Red Wines</button>
        <button className="green-button" onClick={() => toggleSubcategory('white-wines')}>White Wines</button>
        <button className="green-button" onClick={() => toggleSubcategory('sparkling-wines')}>Sparkling Wines</button>
      </div>

      {/* Display corresponding menu list based on active subcategory */}
      {activeSubcategory === 'red-wines' && (
        <ul className="menu-list">
          <li>Cabernet Sauvignon - $25</li>
          <li>Pinot Noir - $30</li>
        </ul>
      )}

      {activeSubcategory === 'white-wines' && (
        <ul className="menu-list">
          <li>Chardonnay - $20</li>
          <li>Sauvignon Blanc - $22</li>
        </ul>
      )}

      {activeSubcategory === 'sparkling-wines' && (
        <ul className="menu-list">
          <li>Prosecco - $35</li>
          <li>Champagne - $50</li>
        </ul>
      )}
    </div>
  );
}

export default WineList;
