import React from 'react';
import './banner.css';
import { IMG_API } from '../../constant';
import ReactStars from 'react-rating-stars-component';
const Banner = ({ backdrop_path, title, overview, vote_average }) => {
  return (
    <div className="banner">
      <img
        className="banner-img"
        src={
          backdrop_path
            ? IMG_API + backdrop_path
            : 'http://via.placeholder.com/1500x500'
        }
        alt="title"
      />
      <div className="banner-content">
        <h1>{title}</h1>
        <h2>
          <ReactStars count={10} value={vote_average} size={30} />
        </h2>
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
