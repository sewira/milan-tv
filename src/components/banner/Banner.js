import React from 'react';
import './banner.css';
import { IMG_API } from '../../constant';
import ReactStars from 'react-rating-stars-component';
const Banner = ({ title, rating, description, poster, trailer }) => {
  return (
    <div className="banner">
      <div className="banner-wrapper">
        <img className="banner-img" src={poster} alt="title" />
      </div>
      <div className="banner-content">
        <h1>{title}</h1>
        <h2>
          <ReactStars count={10} value={rating} size={30} />
        </h2>
        <p>{description}</p>
        <div className="btn-banner">
          <button className="satu">
            <a href={trailer} target="_blank">
              Watch Trailer
            </a>
          </button>
          <button className="dua">Add to Watchlist</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
