// src/components/Reviews/Reviews.jsx
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { reviews } from '../../data/reviews';
import './Reviews.css';

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerPage = 3;

  // Автоматическое переключение слайдов каждые 5 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(reviews.length / reviewsPerPage));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Функция для перехода к следующему слайду
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(reviews.length / reviewsPerPage));
  };

  // Функция для перехода к предыдущему слайду
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(reviews.length / reviewsPerPage)) % Math.ceil(reviews.length / reviewsPerPage));
  };

  // Получаем текущие отзывы для отображения
  const currentReviews = reviews.slice(
    currentIndex * reviewsPerPage,
    currentIndex * reviewsPerPage + reviewsPerPage
  );

  return (
    <section className="reviews section" id="reviews">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Отзывы клиентов
        </motion.h2>

        <div className="reviews-slider">
          <button className="slider-btn prev" onClick={prevSlide}>
            ←
          </button>

          <motion.div 
            className="reviews-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            key={currentIndex}
          >
            {currentReviews.map((review) => (
              <motion.div
                key={review.id}
                className="review-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <div className="review-header">
                  <div className="review-author">
                    <div className="review-name">{review.name}</div>
                    <div className="review-car">{review.car}</div>
                  </div>
                  <div className="review-rating">
                    {'⭐'.repeat(review.rating)}
                  </div>
                </div>
                <p className="review-text">{review.text}</p>
                <div className="review-date">{review.date}</div>
              </motion.div>
            ))}
          </motion.div>

          <button className="slider-btn next" onClick={nextSlide}>
            →
          </button>
        </div>

        {/* Индикаторы слайдов */}
        <div className="slider-dots">
          {Array.from({ length: Math.ceil(reviews.length / reviewsPerPage) }).map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;