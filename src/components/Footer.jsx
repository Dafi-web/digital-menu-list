import React from 'react'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Your Company. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="/about" className="footer-link">About Us</a>
          <a href="/contact" className="footer-link">Contact</a>
          <a href="/privacy" className="footer-link">Privacy Policy</a>
        </div>
        <div className="social-icons">
          <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div className="language-selector">
          <select>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="it">Italian</option>
            <option value="ru">Russian</option>
            <option value="zh">Chinese</option>
            <option value="jp">Japanese</option>
          </select>
        </div>
        <div className="logo">
          <img src="https://github.com/Dafi-web/digital-menu/blob/main/WhatsApp%20Image%202025-03-29%20at%2015.15.31%20(1).jpeg?raw=true" alt="Logo" />
        </div>
      </div>
    </div>
  )
}

export default Footer
