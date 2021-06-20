import React from 'react';
import Carousel from '../components/carousel/Carousel';
import Main from '../components/main/Main';
import Header from '../components/header/Header';
import Footer from '../components/footer/footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <Main />
      <Footer />
    </div>
  );
};

export default HomePage;
