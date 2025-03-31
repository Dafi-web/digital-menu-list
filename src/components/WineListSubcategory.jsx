import React from 'react';
import '../App.css';

const WineListSubcategory = ({ name }) => {
  const wines = {
    "Red Wines": [
      { name: 'Cabernet Sauvignon', description: 'A bold red wine with rich flavors.', price: '$20', image: 'https://raw.githubusercontent.com/dawit-abrha/cssas1/550feefca47e3553258f9ff3658a49018b63263a/images%20(2).jpeg' },
      { name: 'Pinot Noir', description: 'A light-bodied red wine with berry flavors.', price: '$18', image: 'https://raw.githubusercontent.com/dawit-abrha/cssas1/550feefca47e3553258f9ff3658a49018b63263a/images%20(2).jpeg' },
    ],
    "White Wines": [
      { name: 'Chardonnay', description: 'A full-bodied white wine with oak flavors.', price: '$15', image: 'https://raw.githubusercontent.com/dawit-abrha/cssas1/550feefca47e3553258f9ff3658a49018b63263a/images%20(2).jpeg' },
      { name: 'Sauvignon Blanc', description: 'A crisp white wine with citrus notes.', price: '$14', image: 'https://raw.githubusercontent.com/dawit-abrha/cssas1/550feefca47e3553258f9ff3658a49018b63263a/images%20(2).jpeg' },
    ]
  };

  // Normalize the category name (replace hyphens with spaces and capitalize each word)
  const normalizedCategory = name
    .replace('-', ' ') // Replace hyphens with spaces
    .replace(/\b\w/g, char => char.toUpperCase()); // Capitalize the first letter of each word

  console.log("Selected Wine Category: ", normalizedCategory);

  // Filter the wines based on the normalized category name
  const filteredWines = wines[normalizedCategory] || [];

  return (
    <div className="menu-list">
      {filteredWines.length === 0 ? (
        <p>No wines available for this category.</p> // Message when there are no wines
      ) : (
        filteredWines.map((item, index) => (
          <div className="menu-item" key={index}>
            <div className="text-container">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
            <div className="image-container">
              <img src={item.image} alt={item.name} />
              <div className="price">{item.price}</div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default WineListSubcategory;
