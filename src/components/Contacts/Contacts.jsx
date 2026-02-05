// src/components/Contacts/Contacts.jsx
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '../UI/Modal/Modal';
import './Contacts.css';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    comment: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Введите ваше имя';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Введите номер телефона';
    } else if (!/^\+?[\d\s\-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Неверный формат телефона';
    }
    if (!formData.service) {
      newErrors.service = 'Выберите услугу';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setIsModalOpen(true);
      setFormData({
        name: '',
        phone: '',
        service: '',
        comment: ''
      });
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="contacts section" id="contacts">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Контакты
        </motion.h2>

        <div className="contacts-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="info-card">
              <h3>Адрес</h3>
              <p>г. Москва, ул. Автосервисная, д. 15</p>
            </div>

            <div className="info-card">
              <h3>Телефон</h3>
              <p><a href="tel:+74951234567">+7 (495) 123-45-67</a></p>
              <p><a href="tel:+79001234567">+7 (900) 123-45-67</a></p>
            </div>

            <div className="info-card">
              <h3>Режим работы</h3>
              <p>Пн-Пт: 09:00 - 20:00</p>
              <p>Сб-Вс: 10:00 - 18:00</p>
            </div>

            <div className="info-card">
              <h3>Email</h3>
              <p><a href="mailto:info@autoservice.ru">info@autoservice.ru</a></p>
            </div>

            <div className="social-links">
              <a href="#" className="social-link">📱 WhatsApp</a>
              <a href="#" className="social-link">💬 Telegram</a>
              <a href="#" className="social-link">📸 Instagram</a>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Записаться на ремонт</h3>
            <form onSubmit={handleSubmit} className="form">
              <div className="form-group">
                <label htmlFor="name">Ваше имя *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Телефон *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'error' : ''}
                />
                {errors.phone && <span className="error-text">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="service">Услуга *</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={errors.service ? 'error' : ''}
                >
                  <option value="">Выберите услугу</option>
                  <option value="engine">Ремонт двигателя</option>
                  <option value="diagnostic">Диагностика</option>
                  <option value="bodywork">Кузовные работы</option>
                  <option value="tires">Шиномонтаж</option>
                  <option value="electric">Электрика</option>
                  <option value="ac">СТО систем</option>
                </select>
                {errors.service && <span className="error-text">{errors.service}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="comment">Комментарий</label>
                <textarea
                  id="comment"
                  name="comment"
                  rows="4"
                  value={formData.comment}
                  onChange={handleChange}
                  placeholder="Опишите проблему или пожелания..."
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Отправить заявку
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="modal-content">
          <div className="modal-icon">✅</div>
          <h3>Спасибо за заявку!</h3>
          <p>Наш менеджер свяжется с вами в ближайшее время для уточнения деталей.</p>
          <button onClick={closeModal} className="btn btn-primary">
            Понятно
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default Contacts;