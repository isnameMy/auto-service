// src/components/About/About.jsx
/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  // Анимация при скролле
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="about section" id="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          О нас
        </motion.h2>

        <div className="about-content">
          <motion.div 
            className="about-text"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={itemVariants}>
              Наш автосервис работает на рынке уже более 10 лет. Мы гордимся 
              репутацией надежного партнера для владельцев автомобилей всех марок.
            </motion.p>
            <motion.p variants={itemVariants}>
              В нашем сервисе работают только сертифицированные специалисты с 
              многолетним опытом. Мы используем современное оборудование и 
              качественные запчасти от проверенных поставщиков.
            </motion.p>
            <motion.p variants={itemVariants}>
              Наша миссия — обеспечить каждому клиенту максимальный комфорт и 
              уверенность в надежности своего автомобиля.
            </motion.p>
          </motion.div>

          <motion.div 
            className="about-stats"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Лет на рынке</div>
            </motion.div>
            <motion.div variants={itemVariants} className="stat-item">
              <div className="stat-number">5000+</div>
              <div className="stat-label">Довольных клиентов</div>
            </motion.div>
            <motion.div variants={itemVariants} className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Гарантия на работы</div>
            </motion.div>
            <motion.div variants={itemVariants} className="stat-item">
              <div className="stat-number">24ч</div>
              <div className="stat-label">Эвакуатор</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;