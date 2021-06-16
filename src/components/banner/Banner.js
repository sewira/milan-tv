import React from 'react';
import './banner.css';
import { IMG_API } from '../../constant';
const Banner = ({ backdrop_path, title, overview }) => {
  return (
    <div className="banner">
      <img className="banner-img" src={IMG_API + backdrop_path} alt="" />
      <div className="banner-content">
        <h1>{title}</h1>
        <h2>***** 2200 reviews</h2>
        <p>{overview}</p>
        <div className="btn-banner">
          <button className="satu">Watch Trailer</button>
          <button className="dua">Add to Watchlist</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
