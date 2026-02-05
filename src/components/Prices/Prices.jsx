// src/components/Prices/Prices.jsx
/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { priceCategories } from '../../data/prices';
import './Prices.css';

const Prices = () => {
  // Анимация для блоков цен
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
    <section className="prices section" id="prices">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Прайс-лист
        </motion.h2>

        <motion.div 
          className="prices-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {priceCategories.map((category, index) => (
            <motion.div
              key={index}
              className="price-category"
              variants={itemVariants}
              whileHover={{ transform: 'translateY(-5px)' }}
            >
              <h3 className="price-category-title">{category.category}</h3>
              <div className="price-items">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="price-item">
                    <span className="price-name">{item.name}</span>
                    <span className="price-value">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="price-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p>* Точные цены уточняйте у менеджера. Возможны скидки для постоянных клиентов.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Prices;