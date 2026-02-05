// src/components/Hero/Hero.jsx
/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="container">
          <motion.div
            className="hero-text"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants} className="hero-title">
              Профессиональный ремонт авто
            </motion.h1>
            <motion.p variants={itemVariants} className="hero-subtitle">
              Качественный сервис, современное оборудование, опытные мастера
            </motion.p>
            <motion.div variants={itemVariants} className="hero-buttons">
              <a href="#services" className="btn btn-primary">
                Наши услуги
              </a>
              <a href="#contacts" className="btn btn-secondary">
                Записаться
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;    