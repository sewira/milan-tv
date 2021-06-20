import React from 'react';
import './banner.css';
import { data } from '../../constant/data';
import { FaStar } from 'react-icons/fa';

const Banner = ({ title, rating, description, poster, trailer, id }) => {
  return (
    <div className="banner">
      <div className="banner-wrapper">
        <img className="banner-img" src={poster} alt={title} />
      </div>
      <div className="banner-content">
        <h1>{title}</h1>
        <h2>
          {[...Array(rating)].map((e, i) => (
            <FaStar key={i} style={{ color: 'yellow' }} />
          ))}
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
