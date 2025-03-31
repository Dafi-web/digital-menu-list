import React from 'react';
import '../App.css'; // Assuming your styles are defined here

const KitchenSubcategory = ({ name }) => {
  const menuItems = {
    antipasti: [
      { name: 'Sambusa vegetariano', pricePerPerson: '2', description: 'Fagottino ripieno di verdure.', image: 'https://github.com/dawit-abrha/cssas1/blob/main/food.jpg?raw=true' },
      { name: 'Sambusa di carne', pricePerPerson: '2', description: 'Fagottino ripieno di carne trita e prezzemolo, leggermente piccante', image: 'https://github.com/dawit-abrha/cssas1/blob/main/food.jpg?raw=true' },
      { name: 'Categna', pricePerPerson: '2', description: 'Fagottino ripieno di pesce in salsa piccante.', image: 'https://github.com/dawit-abrha/cssas1/blob/main/food.jpg?raw=true' },
    ],
    'piatti-singoli': [
      { name: 'Gored Gored', pricePerPerson: '17 a persona', description: 'Bocconcini di manzo appena saltati aromatizzati,scottati con il nostro burro e berberè', image: 'https://github.com/dawit-abrha/cssas1/blob/main/food.jpg?raw=true' },
      { name: 'Kitfo (Tartare di manzo)', pricePerPerson: '17 a persona', description: 'Carne trita speziata e cotta con il nostro burro (anche ,nella variante originale cruda/semicruda)', image: 'https://github.com/dawit-abrha/cssas1/blob/main/food.jpg?raw=true' },
      { name: 'Tibs (Spriss)', pricePerPerson: '17 a persona', description: 'Carne di manzo a dadini saltata con cipolla, con salsa piccante, mediamente piccante, non piccante ', image: 'https://github.com/dawit-abrha/cssas1/blob/main/food.jpg?raw=true' },
    ],
    altro: [
      { name: 'Zighini di carne', pricePerPerson: '16 a persona',
         description: 'Spezzatino di manzo, pollo o agnello. Volendo avete lapossibilità di gustare 3 tipi di carne in un unico piattoe di escluderne una a secondo del vostro gradimento.Si aggiunge un unico contorno in vari tipi di salsa speziata con', 
         image: 'https://github.com/dawit-abrha/cssas1/blob/main/food.jpg?raw=true' },
      { name: 'Alicia:', pricePerPerson: '16 a persona',
         description: 'stufato di patata, crauti, fagiolini e carote aromatizzate.', image: 'https://github.com/dawit-abrha/cssas1/blob/main/food.jpg?raw=true' },
         { name: 'Shiro:', pricePerPerson: '16 a persona',
         description: 'crema di ceci.', image: 'https://github.com/dawit-abrha/cssas1/blob/main/food.jpg?raw=true' },
         { name: 'Tumtumo:', pricePerPerson: '16 a persona', 
          description: 'lenticchie in umido con spezie', image: 'https://github.com/dawit-abrha/cssas1/blob/main/food.jpg?raw=true' },
          
    
    ],
    dolci: [
      { name: 'Dolci di cocco', pricePerPerson: '4', description: '', image: 'https://github.com/dawit-abrha/cssas1/blob/main/food.jpg?raw=true' },
      { name: 'Dolci di semolino', pricePerPerson: '4', description: '', image: 'https://github.com/dawit-abrha/cssas1/blob/main/food.jpg?raw=true' },
      { name: 'Sorbetto Limone, Mango', pricePerPerson: '4', description: '', image: 'https://github.com/dawit-abrha/cssas1/blob/main/food.jpg?raw=true' },
      { name: '', pricePerPerson: '...', description: 'disponibili altri gusti in base alla stagione', image: '' },
    ],
    vegetarano: [
      { name: 'Zighini Vegetariano/vegano', pricePerPerson: '15 a persona', 
        description: 'Con cinque tipi di legumi e verdure (possono essere presi tutti o anche solo alcuni in base al gusto personale):',
         },
         { name: 'Shiro:', 
          pricePerPerson: '15 a persona', 
          description: 'crema di ceci con aggiunta di pomodoro fresco,stufato di patate, crauti, fagiolini e carote aromatizzate', 
          image: 'https://github.com/dawit-abrha/cssas1/blob/main/food.jpg?raw=true' },
          { name: 'Tumtumo:', 
            pricePerPerson: '15 a persona', 
            description: 'lenticchie in umido con spezie', 
            image: 'https://github.com/dawit-abrha/cssas1/blob/main/food.jpg?raw=true' },
            { name: 'Hamli:', 
              pricePerPerson: '15 a persona', 
              description: 'cime di rapa con spezie', 
              image: 'https://github.com/dawit-abrha/cssas1/blob/main/food.jpg?raw=true' },
              { name: 'Sillsi:', 
                pricePerPerson: '15 a persona', 
                description: 'condito con sugo leggermente e piccante salsa', 
                image: 'https://github.com/dawit-abrha/cssas1/blob/main/food.jpg?raw=true' },
                { name: 'Alicia:', 
                  pricePerPerson: '15 a persona', 
                  description: 'stufato di patata, crauti, fagiolini e carote ', 
                  image: 'https://github.com/dawit-abrha/cssas1/blob/main/food.jpg?raw=true' },
          
    ],
  };

  // Normalize the name to lowercase to match keys in menuItems
  const filteredItems = menuItems[name.toLowerCase()] || [];

  return (
    <div className="menu-list">
      <h2>{name}</h2>
      {filteredItems.length === 0 ? (
        <p>No items available for this category</p>
      ) : (
        filteredItems.map((item, index) => (
          <div key={index} className="menu-item">
            <div className="text-container">
              <h3 className="item-name">{item.name}</h3>
              <p className="item-description">{item.description}</p>
            </div>
            <div className="image-container">
              <img src={item.image} alt={item.name} />
              <div className="price">€{item.pricePerPerson}</div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default KitchenSubcategory;
