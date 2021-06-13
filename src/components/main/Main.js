import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './main.css';
import { GET_ALL_MOVIES, GET_MOVIES_BY_GENRE } from '../../constant';

import Movies from '../movies/Movies';

const Main = () => {
  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);

  const [genreValue, setGenreValue] = useState({
    action: {
      id: 28,
      isCLicked: false,
    },
    animation: {
      id: 16,
      isCLicked: false,
    },
    adventure: {
      id: 12,
      isCLicked: false,
    },
    sciene_fiction: {
      id: 878,
      isCLicked: false,
    },
    comedy: {
      id: 35,
      isCLicked: false,
    },
  });

  // const filteredByGenre = (e) => {
  //   const result = data.filter(
  //     (item) => item.genre_ids[0] === parseInt(e.target.value)
  //   );
  //   setMovies(result);
  // };

  const fetchMoviesByGenre = async (e) => {
    const res = await axios.get(
      `${GET_MOVIES_BY_GENRE(parseInt(e.target.value))}`
    );

    setMovies(res.data.results);
  };

  const getAllMovies = () => {
    setMovies(data);
  };

  const getMovies = async (url) => {
    const res = await axios.get(url);
    // setMovies(res.data.results);

    setData(res.data.results);
    setMovies(res.data.results);
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

      <button className="btn " onClick={getAllMovies}>
        All
      </button>
      <button
        className={genreValue.animation.isCLicked ? 'btn active' : 'btn'}
        value={genreValue.animation.id}
        onClick={fetchMoviesByGenre}
      >
        Animation
      </button>
      <button
        className="btn "
        value={genreValue.action.id}
        onClick={fetchMoviesByGenre}
      >
        Action
      </button>
      <button
        className="btn "
        value={genreValue.adventure.id}
        onClick={fetchMoviesByGenre}
      >
        Adventure
      </button>
      <button
        className="btn"
        value={genreValue.sciene_fiction.id}
        onClick={fetchMoviesByGenre}
      >
        Sci-fi
      </button>
      <button
        className="btn "
        value={genreValue.comedy.id}
        onClick={fetchMoviesByGenre}
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
