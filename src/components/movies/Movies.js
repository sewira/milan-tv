import React, { useState } from 'react';
import { genres, IMG_API } from '../../constant';
import { Link } from 'react-router-dom';

const Movies = ({ title, poster_path, genre, id }) => {
  //   const IMG_API = 'https://image.tmdb.org/t/p/w1280';

  // console.log({
  //   id,
  // });

  return (
    <div className="card">
      <Link to={`/detail/${id}`}>
        <img
          src={
            poster_path
              ? IMG_API + poster_path
              : 'http://via.placeholder.com/300x400'
          }
          alt={title}
        />
        <h3>{title}</h3>
        {genres.map((item) =>
          genre === item.id ? <p key={item.id}>{item.name}</p> : null
        )}
      </Link>
    </div>
  );
};

export default Movies;
