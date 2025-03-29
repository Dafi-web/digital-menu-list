import React from 'react';

const menuItems = {
  appetizers: [
    {
      title: "Spring Rolls",
      description: "Crispy rolls filled with vegetables and served with dipping sauce.",
      price: "$5.99",
      image: "https://www.example.com/spring-rolls.jpg"
    },
    {
      title: "Bruschetta",
      description: "Toasted bread topped with tomato, basil, and garlic.",
      price: "$7.99",
      image: "https://www.example.com/bruschetta.jpg"
    }
  ],
  'single-dishes': [
    {
      title: "Grilled Salmon",
      description: "Freshly grilled salmon served with a lemon butter sauce.",
      price: "$15.99",
      image: "https://www.example.com/grilled-salmon.jpg"
    },
    {
      title: "Chicken Parmesan",
      description: "Breaded chicken breast topped with marinara sauce and mozzarella.",
      price: "$12.99",
      image: "https://www.example.com/chicken-parmesan.jpg"
    }
  ],
  more: [
    {
      title: "Fried Rice",
      description: "Stir-fried rice with vegetables, eggs, and your choice of protein.",
      price: "$9.99",
      image: "https://www.example.com/fried-rice.jpg"
    }
  ],
  sweets: [
    {
      title: "Chocolate Cake",
      description: "Rich and moist chocolate cake with a creamy frosting.",
      price: "$6.99",
      image: "https://www.example.com/chocolate-cake.jpg"
    }
  ],
  'new-year': [
    {
      title: "New Year Platter",
      description: "A special platter with appetizers and small bites to ring in the new year.",
      price: "$40.00",
      image: "https://www.example.com/new-year-platter.jpg"
    }
  ]
};

function KitchenSubcategory({ name }) {
  return (
    <div className="menu-grid">
      {menuItems[name.toLowerCase()].map((item, index) => (
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
  );
}

export default KitchenSubcategory;
