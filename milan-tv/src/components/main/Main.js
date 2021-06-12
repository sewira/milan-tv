import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './main.css';
import { GET_ALL_MOVIES } from '../../constant';

import Movies from '../movies/Movies';

const Main = () => {
  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);
  const [genreValue, setGenreValue] = useState({
    action: 28,
    animation: 16,
    adventure: 12,
    sciene_fiction: 878,
    comedy: 35,
  });

  //   const filterMovieByGenre = (e) => {
  //     console.log(data);
  //   };

  const getMovies = async (url) => {
    const res = await axios.get(url);
    setMovies(res.data.results);
    // setData(res.data.results);
    // console.log(res.data.results);
  };

  useEffect(() => {
    getMovies(GET_ALL_MOVIES);
  }, []);

  return (
    <div className="home">
      <div className="title">
        <h1>Browse by category</h1>
      </div>

      <button className="btn">All</button>
      <button className="btn" value={genreValue.animation}>
        Animation
      </button>
      <button
        className="btn"
        value={genreValue.action}
        onClick={(e) => console.log(e.target.value)}
      >
        Action
      </button>
      <button
        className="btn"
        value={genreValue.adventure}
        onClick={(e) => console.log(e.target.value)}
      >
        Adventure
      </button>
      <button
        className="btn"
        value={genreValue.sciene_fiction}
        onClick={(e) => console.log(e.target.value)}
      >
        Sci-fi
      </button>
      <button
        className="btn"
        value={genreValue.comedy}
        onClick={(e) => console.log(e.target.value)}
      >
        Comedy
      </button>

      <div className="card-container">
        {movies.length > 0 &&
          movies.map((movie) => (
            <Movies
              key={movie.id}
              title={movie.title}
              genre={movie.genre_ids[0]}
              poster_path={movie.poster_path}
            />
          ))}
      </div>
    </div>
  );
};

export default Main;
