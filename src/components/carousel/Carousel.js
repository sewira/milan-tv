import React from 'react';

import './carousel.css';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import satu from '../../assets/landscape1.jpg';
import dua from '../../assets/landscape2.jpeg';
import tiga from '../../assets/landscape3.jpg';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="image-container">
          <div className="image-overlay">
            <img src={satu} alt="" />
          </div>
        </div>
        <div className="image-container">
          <img src={dua} alt="" />
        </div>
        <div className="image-container">
          <img src={tiga} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
