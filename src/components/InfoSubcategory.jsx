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
      description: <p className="info-description">Find our location here.</p>, 
      image: 'https://github.com/dawit-abrha/cssas1/blob/main/location.png?raw=true',
      link: 'https://www.google.com/maps/place/Corso+Concordia,+9,+20129+Milano+MI,+Italy/' 
    },
    { 
      title: 'About Us', 
      description: (
        <>
          <p className="info-description"><strong>History:</strong> Restorante Africa has been serving authentic African cuisine in the heart of Milan since ???. We take pride in offering traditional dishes prepared with fresh, high-quality ingredients.</p>
          <p className="info-description"><strong>Opening Hours:</strong></p>
          <ul className="info-description-list">
            <li className="info-description-item">Monday - Friday: 12:00 PM - 10:30 PM</li>
            <li className="info-description-item">Saturday - Sunday: 1:00 PM - 11:00 PM</li>
          </ul>
          <p className="info-description"><strong>Our Rules:</strong></p>
          <ul className="info-description-list">
            <li className="info-description-item">Reservations recommended for weekends.</li>
            <li className="info-description-item">We kindly ask guests to respect our no-smoking policy inside.</li>
            <li className="info-description-item">Pets are allowed on our outdoor terrace.</li>
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
