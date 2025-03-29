import React, { useState } from 'react';
import Footer from './components/Footer';
import './App.css';
import KitchenSubcategory from './components/KitchenSubcategory';
import DrinksSubcategory from './components/DrinksSubcategory';
import WineListSubcategory from './components/WineListSubcategory';
import InfoSubcategory from './components/InfoSubcategory';

function App() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
    setActiveSubcategory(null); // Reset subcategory when category is toggled
  };

  const toggleSubcategory = (subcategory) => {
    setActiveSubcategory(activeSubcategory === subcategory ? null : subcategory);
  };

  const goBackToCategories = () => {
    setActiveCategory(null); // Go back to the main categories
    setActiveSubcategory(null); // Reset subcategory
  };

  return (
    <div className="menu">
      <header className='header'>
        <img src="https://github.com/dawit-abrha/cssas1/blob/main/logo%20food.jpg?raw=true" alt="Logo" className="logo" />
      </header>
      <div className='home'>
      <img src="https://github.com/dawit-abrha/cssas1/blob/main/header.jpg?raw=true" alt="Logo" className="logo" />
        <h2>Welcome to our Restorante Africa !</h2>
        <p>Feel free to explore our menu and enjoy our delicious dishes.</p>

      </div>

      {/* Main Category Grid */}
      {!activeCategory && (
        <nav className="category-grid">
          <div className="category-item" onClick={() => toggleCategory('kitchen')}>
            <img src="https://raw.githubusercontent.com/dawit-abrha/cssas1/main/kitchen.jpeg?raw=true" alt="Kitchen" className="category-image" />
            <span>Kitchen</span>
            <i className={`fa ${activeCategory === 'kitchen' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
          </div>

          <div className="category-item" onClick={() => toggleCategory('drinks')}>
            <img src="https://raw.githubusercontent.com/dawit-abrha/cssas1/main/drinks.jpeg?raw=true" alt="Drinks" className="category-image" />
            <span>Drinks</span>
            <i className={`fa ${activeCategory === 'drinks' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
          </div>

          <div className="category-item" onClick={() => toggleCategory('wine-list')}>
            <img src="https://raw.githubusercontent.com/dawit-abrha/cssas1/main/winelist.jpg?raw=true" alt="Wine List" className="category-image" />
            <span>Wine List</span>
            <i className={`fa ${activeCategory === 'wine-list' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
          </div>

          <div className="category-item" onClick={() => toggleCategory('info')}>
            <img src="https://raw.githubusercontent.com/dawit-abrha/cssas1/main/info_logo.png?raw=true" alt="Info" className="category-image" />
            <span>Info</span>
            <i className={`fa ${activeCategory === 'info' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
          </div>
        </nav>
      )}

      {/* Content of active category */}
      {activeCategory && (
        <div className="active-category">
          <button className="back-button" onClick={goBackToCategories}>Back to home</button>

          {/* Subcategory buttons based on active category */}
          <div className="subcategory-grid">
            {activeCategory === 'kitchen' && (
              <>
                <div className="subcategory-item" onClick={() => toggleSubcategory('appetizers')}>
                  <img src="https://raw.githubusercontent.com/dawit-abrha/cssas1/main/kitchen.jpeg?raw=true" alt="Appetizers" />
                  <span>Appetizers</span>
                  <i className={`fa ${activeSubcategory === 'appetizers' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                </div>
                {activeSubcategory === 'appetizers' && <KitchenSubcategory name="Appetizers" />}
                
                <div className="subcategory-item" onClick={() => toggleSubcategory('single-dishes')}>
                  <img src="https://raw.githubusercontent.com/dawit-abrha/cssas1/main/kitchen.jpeg?raw=true" alt="Single Dishes" />
                  <span>Single Dishes</span>
                  <i className={`fa ${activeSubcategory === 'single-dishes' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                </div>
                {activeSubcategory === 'single-dishes' && <KitchenSubcategory name="Single Dishes" />}
                
                <div className="subcategory-item" onClick={() => toggleSubcategory('more')}>
                  <img src="https://raw.githubusercontent.com/dawit-abrha/cssas1/main/kitchen.jpeg?raw=true" alt="More" />
                  <span>More</span>
                  <i className={`fa ${activeSubcategory === 'more' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                </div>
                {activeSubcategory === 'more' && <KitchenSubcategory name="More" />}
                
                <div className="subcategory-item" onClick={() => toggleSubcategory('sweets')}>
                  <img src="https://raw.githubusercontent.com/dawit-abrha/cssas1/main/kitchen.jpeg?raw=true" alt="Sweets" />
                  <span>Sweets</span>
                  <i className={`fa ${activeSubcategory === 'sweets' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                </div>
                {activeSubcategory === 'sweets' && <KitchenSubcategory name="Sweets" />}
                
                <div className="subcategory-item" onClick={() => toggleSubcategory('new-year')}>
                  <img src="https://raw.githubusercontent.com/dawit-abrha/cssas1/main/kitchen.jpeg?raw=true" alt="New Year" />
                  <span>New Year</span>
                  <i className={`fa ${activeSubcategory === 'new-year' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                </div>
                {activeSubcategory === 'new-year' && <KitchenSubcategory name="New Year" />}
              </>
            )}

            {activeCategory === 'drinks' && (
              <>
                <div className="subcategory-item" onClick={() => toggleSubcategory('cocktails')}>
                  <img src="https://raw.githubusercontent.com/dawit-abrha/cssas1/main/drinks.jpeg?raw=true" alt="Cocktails" />
                  <span>Cocktails</span>
                  <i className={`fa ${activeSubcategory === 'cocktails' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                </div>
                {activeSubcategory === 'cocktails' && <DrinksSubcategory name="Cocktails" />}

                <div className="subcategory-item" onClick={() => toggleSubcategory('non-alcoholic')}>
                  <img src="https://raw.githubusercontent.com/dawit-abrha/cssas1/main/drinks.jpeg?raw=true" alt="Non-Alcoholic" />
                  <span>Non-Alcoholic</span>
                  <i className={`fa ${activeSubcategory === 'non-alcoholic' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                </div>
                {activeSubcategory === 'non-alcoholic' && <DrinksSubcategory name="Non-Alcoholic" />}
              </>
            )}

            {activeCategory === 'wine-list' && (
              <>
                <div className="subcategory-item" onClick={() => toggleSubcategory('red-wines')}>
                  <img src="https://raw.githubusercontent.com/dawit-abrha/cssas1/main/winelist.jpg?raw=true" alt="Red Wines" />
                  <span>Red Wines</span>
                  <i className={`fa ${activeSubcategory === 'red-wines' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                </div>
                {activeSubcategory === 'red-wines' && <WineListSubcategory name="Red Wines" />}
                
                <div className="subcategory-item" onClick={() => toggleSubcategory('white-wines')}>
                  <img src="https://raw.githubusercontent.com/dawit-abrha/cssas1/main/winelist.jpg?raw=true" alt="White Wines" />
                  <span>White Wines</span>
                  <i className={`fa ${activeSubcategory === 'white-wines' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                </div>
                {activeSubcategory === 'white-wines' && <WineListSubcategory name="White Wines" />}
              </>
            )}

            {activeCategory === 'info' && (
              <>
                <div className="subcategory-item" onClick={() => toggleSubcategory('about-us')}>
                  <img src="https://raw.githubusercontent.com/dawit-abrha/cssas1/main/info_logo.png?raw=true" alt="About Us" />
                  <span>About Us</span>
                  <i className={`fa ${activeSubcategory === 'about-us' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                </div>
                {activeSubcategory === 'about-us' && <InfoSubcategory name="About Us" />}

                {/* <div className="subcategory-item" onClick={() => toggleSubcategory('contact')}>
                  <img src="https://raw.githubusercontent.com/dawit-abrha/cssas1/main/info_logo.png?raw=true" alt="Contact" />
                  <span>Contact</span>
                  <i className={`fa ${activeSubcategory === 'contact' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                </div>
                {activeSubcategory === 'contact' && <InfoSubcategory name="Contact" />} */}
              </>
            )}
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
}

export default App;
