// src/components/Header/Header.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Функция для закрытия меню
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Функция для переключения меню (для мобильных)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Навигационные ссылки
  const navLinks = [
    { name: 'Главная', path: '/' },
    { name: 'Услуги', path: '#services' },
    { name: 'Цены', path: '#prices' },
    { name: 'Отзывы', path: '#reviews' },
    { name: 'Контакты', path: '#contacts' },
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Логотип */}
          <Link to="/" className="logo" onClick={closeMenu}>
            <span className="logo-icon">🚗</span>
            <span className="logo-text">AutoService</span>
          </Link>

          {/* Навигация для десктопа */}
          <nav className="nav">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.path} className="nav-item">
                  <a
                    href={link.path}
                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Кнопка контактов */}
          <a href="#contacts" className="header-contact-btn" onClick={closeMenu}>
            Записаться
          </a>

          {/* Бургер-меню для мобильных */}
          <button className="burger-menu" onClick={toggleMenu}>
            <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>

        {/* Мобильное меню */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.path} className="mobile-nav-item">
                  <a
                    href={link.path}
                    className="mobile-nav-link"
                    onClick={closeMenu}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a href="#contacts" className="mobile-contact-btn" onClick={closeMenu}>
            Записаться на ремонт
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;