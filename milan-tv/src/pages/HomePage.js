import React from 'react';

import Header from '../components/header/Header';
import Carousel from '../components/carousel/Carousel';
import MoviesList from '../components/movieslist/MoviesList';
import Footer from '../components/footer/footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <MoviesList />
      <Footer />
    </div>
  );
};

export default HomePage;
