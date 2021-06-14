import React from 'react';
import './banner.css';
import { IMG_API } from '../../constant';
const Banner = ({ backdrop_path }) => {
  return (
    <div className="banner">
      <img className="banner-img" src={IMG_API + backdrop_path} alt="" />
      <div className="banner-content">
        <h1>SAINT SEIYA</h1>
        <h2>***** 2200 reviews</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          quaerat similique quibusdam laborum, dicta eius ratione voluptatibus
          quidem saepe illum molestiae doloremque quas, quis totam itaque
          dolorem minima fugiat tempore.
        </p>
        <div className="btn-banner">
          <button className="satu">Watch Trailer</button>
          <button className="dua">Add to Watchlist</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
