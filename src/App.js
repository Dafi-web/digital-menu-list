import React, { useState } from "react";
import Footer from "./components/Footer";
import "./App.css";
import KitchenSubcategory from "./components/KitchenSubcategory";
import DrinksSubcategory from "./components/DrinksSubcategory";
import WineListSubcategory from "./components/WineListSubcategory";
import InfoSubcategory from "./components/InfoSubcategory";

function App() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
    setActiveSubcategory(null); // Reset subcategory when category is toggled
  };

  const toggleSubcategory = (subcategory) => {
    setActiveSubcategory(
      activeSubcategory === subcategory ? null : subcategory
    );
  };

  const goBackToCategories = () => {
    setActiveCategory(null);
    setActiveSubcategory(null);
  };

  return (
    <div className="menu">
      <header className="header">
        <a href="/">
        <img
          src="https://github.com/dawit-abrha/cssas1/blob/main/logo%20food.jpg?raw=true"
          alt="Logo"

        />
        </a>
      </header>
      <div className="home">
        <img
          src="https://github.com/Dafi-web/cssas1/blob/main/WhatsApp%20Image%202025-03-30%20at%2000.20.43.jpeg?raw=true"
          alt="Logo"
          className="logo"
        />
        <h2>Welcome to our Restorante Africa!</h2>
        <p>Feel free to explore our menu and enjoy our delicious dishes.</p>
      </div>

      {/* Main Category Grid */}
      {!activeCategory && (
        <nav className="category-grid">
          <div
            className="category-item"
            onClick={() => toggleCategory("kitchen")}
          >
            <img
              src="https://raw.githubusercontent.com/dawit-abrha/cssas1/main/kitchen.jpeg?raw=true"
              alt="Kitchen"
              className="category-image"
            />
            <span className="kitchen">Cucina</span>
          </div>

          <div
            className="category-item"
            onClick={() => toggleCategory("drinks")}
          >
            <img
              src="https://raw.githubusercontent.com/dawit-abrha/cssas1/main/drinks.jpeg?raw=true"
              alt="Drinks"
              className="category-image"
            />
            <span className="drinks">Bevande</span>
          </div>

          <div
            className="category-item"
            onClick={() => toggleCategory("wine-list")}
          >
            <img
              src="https://raw.githubusercontent.com/dawit-abrha/cssas1/main/winelist.jpg?raw=true"
              alt="Wine List"
              className="category-image"
            />
            <span className="wine">Lista dei vini</span>
          </div>

          <div className="category-item" onClick={() => toggleCategory("info")}>
            <img
              src="https://raw.githubusercontent.com/dawit-abrha/cssas1/main/info_logo.png?raw=true"
              alt="Info"
              className="category-image"
            />
            <span className="info">Informazioni</span>
          </div>
        </nav>
      )}

      {/* Content of active category */}
      {activeCategory && (
        <div className="active-category">
          <button className="back-button" onClick={goBackToCategories}>
            Back to home
          </button>

          {/* Subcategory buttons based on active category */}
          <div className="subcategory-grid">
            {activeCategory === "kitchen" && (
              <>
                {[
                  "antipasti",
                  "piatti-singoli",
                  "altro",
                  "dolci",
                  "vegetarano",
                ].map((subcategory) => (
                  <React.Fragment key={subcategory}>
                    <div
                      className="subcategory-item"
                      onClick={() => toggleSubcategory(subcategory)}
                    >
                      <img
                        src="https://raw.githubusercontent.com/dawit-abrha/cssas1/main/kitchen.jpeg?raw=true"
                        alt={subcategory}
                      />
                      <span>{subcategory.replace("-", " ").toUpperCase()}</span>
                    </div>
                    {activeSubcategory === subcategory && (
                      <KitchenSubcategory name={subcategory} />
                    )}
                  </React.Fragment>
                ))}
              </>
            )}

            {activeCategory === "drinks" && (
              <>
                {["cocktails", "non-alcoholic"].map((subcategory) => (
                  <React.Fragment key={subcategory}>
                    <div
                      className="subcategory-item"
                      onClick={() => toggleSubcategory(subcategory)}
                    >
                      <img
                        src="https://raw.githubusercontent.com/dawit-abrha/cssas1/main/drinks.jpeg?raw=true"
                        alt={subcategory}
                      />
                      <span>{subcategory.replace("-", " ").toUpperCase()}</span>
                    </div>
                    {activeSubcategory === subcategory && (
                      <DrinksSubcategory name={subcategory} />
                    )}
                  </React.Fragment>
                ))}
              </>
            )}

{activeCategory === 'wine-list' && (
  <>
    {['red-wines', 'white-wines'].map((subcategory) => {
      // Normalize the name for matching
      const normalizedSubcategory = subcategory
        .replace('-', ' ') // Replace hyphens with spaces
        .replace(/^\w/, (c) => c.toUpperCase()); // Capitalize the first letter

      return (
        <React.Fragment key={subcategory}>
          <div className="subcategory-item" onClick={() => toggleSubcategory(subcategory)}>
            <img src="https://raw.githubusercontent.com/dawit-abrha/cssas1/main/winelist.jpg?raw=true" alt={subcategory} />
            <span>{normalizedSubcategory}</span>
          </div>
          {activeSubcategory === subcategory && <WineListSubcategory name={normalizedSubcategory} />}
        </React.Fragment>
      );
    })}
  </>
)}



            {activeCategory === "info" && (
              <>
                {["about-us"].map((subcategory) => (
                  <React.Fragment key={subcategory}>
                    <div
                      className="subcategory-item"
                      onClick={() => toggleSubcategory(subcategory)}
                    >
                      <img
                        src="https://raw.githubusercontent.com/dawit-abrha/cssas1/main/info_logo.png?raw=true"
                        alt={subcategory}
                      />
                      <span>{subcategory.replace("-", " ").toUpperCase()}</span>
                    </div>
                    {activeSubcategory === subcategory && (
                      <InfoSubcategory name={subcategory} />
                    )}
                  </React.Fragment>
                ))}
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
