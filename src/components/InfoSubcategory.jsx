import React from 'react';
import '../App.css';

const InfoSubcategory = ({ name }) => {
  const infoItems = [
    { 
      title: 'Contact', 
      description: (
        <>
          <p className="info-description"><strong>Email:</strong> info@restoranteafrica.com</p>
          <p className="info-description"><strong>Phone:</strong> +39 012 345 6789</p>
          <p className="info-description"><strong>Address:</strong> Corso Concordia, 9, 20129 Milano MI, Italy</p>
        </>
      ), 
      image: 'https://github.com/dawit-abrha/cssas1/blob/main/contact.jpg?raw=true'
    },
    { 
      title: 'Location', 
      description: <p className="info-description">Trova la nostra posizione qui.</p>, 
      image: 'https://github.com/dawit-abrha/cssas1/blob/main/location.png?raw=true',
      link: 'https://www.google.com/maps/place/Corso+Concordia,+9,+20129+Milano+MI,+Italy/' 
    },
    { 
      title: 'About Us', 
      description: (
        <>
          <p className="info-description"><strong>History:</strong> Il Restorante Africa serve autentica cucina africana nel cuore di Milano dal ???. Siamo orgogliosi di offrire piatti tradizionali preparati con ingredienti freschi e di alta qualità.</p>
          <p className="info-description"><strong>Orari di apertura:</strong></p>
          <ul className="info-description-list">
            <li className="info-description-item">Lunedì - Venerdì: 12:00 PM - 10:30 PM</li>
            <li className="info-description-item">Sabato - Domenica: 1:00 PM - 11:00 PM</li>
          </ul>
          <p className="info-description"><strong>Le nostre regole:</strong></p>
          <ul className="info-description-list">
            <li className="info-description-item">Si consiglia la prenotazione per i fine settimana.</li>
            <li className="info-description-item">Chiediamo gentilmente agli ospiti di rispettare la nostra politica antifumo all'interno.</li>
            <li className="info-description-item">Gli animali domestici sono ammessi sulla nostra terrazza esterna.</li>
          </ul>
        </>
      ), 
      image: 'https://github.com/dawit-abrha/cssas1/blob/main/about.png?raw=true'
    },
  ];

  return (
    <div className="info-subcategory">
      <h2>{name}</h2>
      <div className="info-menu-list">
        {infoItems.map((item, index) => (
          <div key={index} className="info-menu-item">
            <div className="info-item-left">
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img src={item.image} alt={item.title} />
                </a>
              ) : (
                <img src={item.image} alt={item.title} />
              )}
            </div>
            <div className="info-item-right">
              <h3>{item.title}</h3>
              <div className='description'>{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSubcategory;
