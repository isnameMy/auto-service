// src/components/Footer/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">🚗</span>
              <span className="logo-text">AutoService</span>
            </div>
            <p className="footer-about">
              Профессиональный автосервис с 10-летним опытом. 
              Качественный ремонт и обслуживание автомобилей всех марок.
            </p>
          </div>

          <div className="footer-section">
            <h4>Услуги</h4>
            <ul className="footer-links">
              <li><a href="#services">Ремонт двигателя</a></li>
              <li><a href="#services">Диагностика</a></li>
              <li><a href="#services">Кузовные работы</a></li>
              <li><a href="#services">Шиномонтаж</a></li>
              <li><a href="#services">Электрика</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Контакты</h4>
            <ul className="footer-contacts">
              <li>📍 г. Москва, ул. Автосервисная, д. 15</li>
              <li>📞 <a href="tel:+74951234567">+7 (495) 123-45-67</a></li>
              <li>📧 <a href="mailto:info@autoservice.ru">info@autoservice.ru</a></li>
              <li>🕒 Пн-Пт: 09:00 - 20:00, Сб-Вс: 10:00 - 18:00</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Соцсети</h4>
            <div className="footer-social">
              <a href="#" className="social-icon">📱 WhatsApp</a>
              <a href="#" className="social-icon">💬 Telegram</a>
              <a href="#" className="social-icon">📸 Instagram</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AutoService. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;