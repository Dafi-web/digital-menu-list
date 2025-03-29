import React from 'react';
import '../App.css';

const DrinksSubcategory = ({ name }) => {
  const drinks = {
    "Cocktails": [
      { name: 'Margarita', description: 'A refreshing cocktail with lime and tequila.', price: '$10', image: 'https://github.com/dawit-abrha/cssas1/blob/main/drink.jpg?raw=true' },
      { name: 'Martini', description: 'A classic gin or vodka cocktail.', price: '$12', image: 'https://github.com/dawit-abrha/cssas1/blob/main/drink.jpg?raw=true' },
    ],
    "Non-Alcoholic": [
      { name: 'Lemonade', description: 'Freshly squeezed lemonade with mint.', price: '$5', image: 'https://github.com/dawit-abrha/cssas1/blob/main/non%20alchols.jpeg?raw=true' },
      { name: 'Iced Tea', description: 'Cold and refreshing tea with lemon.', price: '$4', image: 'https://github.com/dawit-abrha/cssas1/blob/main/non%20alchols.jpeg?raw=true' },
    ]
  };

  return (
    <div className="menu-list">
      {drinks[name] && drinks[name].map((item, index) => (
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
      ))}
    </div>
  );
};

export default DrinksSubcategory;
