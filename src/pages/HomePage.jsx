// src/pages/HomePage.jsx
import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Prices from '../components/Prices/Prices';
import Reviews from '../components/Reviews/Reviews';
import Contacts from '../components/Contacts/Contacts';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Prices />
      <Reviews />
      <Contacts />
    </>
  );
};

export default HomePage;