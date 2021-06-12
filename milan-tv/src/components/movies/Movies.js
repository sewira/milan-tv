import React, { useState } from 'react';
import { genres, IMG_API } from '../../constant';

const Movies = ({ title, poster_path, genre }) => {
  //   const IMG_API = 'https://image.tmdb.org/t/p/w1280';

  //   console.log({
  //     title,
  //     poster_path,
  //     genre,
  //   });

  return (
    <div className="card">
      <img src={IMG_API + poster_path} alt="" />
      <h3>{title}</h3>
      {genres.map((item) =>
        item.id === genre ? <p key={item.id}>{item.name}</p> : null
      )}
    </div>
  );
};

export default Movies;
