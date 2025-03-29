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

  return (
    <div className="menu-list">
      {wines[name] && wines[name].map((item, index) => (
        <div className="menu-item" key={index}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <button>{item.price}</button>
        </div>
      ))}
    </div>
  );
};

export default WineListSubcategory;
