import React, { useState } from 'react';

// Sample data for kitchen menu
const kitchenMenu = [
  {
    title: "Chicken Wings",
    description: "Crispy and juicy chicken wings with a spicy kick.",
    price: "$12.99",
    image: "https://www.example.com/chicken-wings.jpg"
  },
  {
    title: "Beef Steak",
    description: "Juicy steak cooked to perfection with a side of mashed potatoes.",
    price: "$25.99",
    image: "https://www.example.com/beef-steak.jpg"
  },
  {
    title: "Vegetable Stir-fry",
    description: "A mix of fresh vegetables stir-fried with a savory sauce.",
    price: "$10.99",
    image: "https://www.example.com/veggie-stirfry.jpg"
  },
  {
    title: "Pasta Carbonara",
    description: "Classic pasta in a creamy sauce with crispy bacon.",
    price: "$14.99",
    image: "https://www.example.com/pasta-carbonara.jpg"
  }
];

function Kitchen() {
  return (
    <div className="category-content">
      <h2>Kitchen Menu</h2>
      <div className="menu-grid">
        {kitchenMenu.map((item, index) => (
          <div className="menu-item" key={index}>
            <img src={item.image} alt={item.title} className="menu-item-image" />
            <div className="menu-item-details">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button className="price-button">{item.price}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Kitchen;
