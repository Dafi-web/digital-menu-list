import React from 'react';
import '../App.css'; // Assuming your styles are defined here

const KitchenSubcategory = ({ name }) => {
  const menuItems = [
    { name: 'Appetizer 1', pricePerPerson: '$12.99', description: 'Delicious starter with fresh ingredients.', image: 'https://github.com/dawit-abrha/cssas1/blob/main/food.jpg?raw=true' },
    { name: 'Appetizer 2', pricePerPerson: '$8.99', description: 'A tasty blend of veggies and spices.', image: 'https://github.com/dawit-abrha/cssas1/blob/main/food.jpg?raw=true' },
    // Add more items here...
  ];

  return (
    <div className="menu-list">
      <h2>{name}</h2>
      {menuItems.map((item, index) => (
        <div key={index} className="menu-item">
          <div className="text-container">
            <h3 className="item-name">{item.name}</h3>
            <p className="item-description">{item.description}</p>
          </div>
          <div className="image-container">
            <img src={item.image} alt={item.name} />
            <div className="price">{item.pricePerPerson}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KitchenSubcategory;
