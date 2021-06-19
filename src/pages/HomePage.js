import React from 'react';
import Carousel from '../components/carousel/Carousel';
import Main from '../components/main/Main';
import Header from '../components/header/Header';
import Footer from '../components/footer/footer';

const HomePage = () => {
  // const showMovieBySearch = () => {
  //   setIsShow({
  //     all: false,
  //     hollywood: false,
  //     bollywood: false,
  //     drakor: false,
  //     asian: false,
  //     horror: false,
  //   });

  //   movieSearch.length > 0
  //     ? movieSearch.map((movie) => (
  //         <Movies
  //           key={movie.id}
  //           title={movie.title}
  //           poster={movie.poster}
  //           id={movie.id}
  //         />
  //       ))
  //     : null;
  // };

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
