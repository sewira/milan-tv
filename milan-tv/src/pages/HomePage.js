import React from 'react';

import Header from '../components/header/Header';
import Carousel from '../components/carousel/Carousel';
import MoviesList from '../components/movieslist/MoviesList';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <MoviesList />
    </div>
  );
};

export default HomePage;
