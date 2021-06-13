import React from 'react';

import Header from '../components/header/Header';
import Carousel from '../components/carousel/Carousel';
import Footer from '../components/footer/footer';
import Main from '../components/main/Main';

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
