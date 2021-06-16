import React, { useState, useEffect } from 'react';
import './main.css';

import { useDispatch, useSelector } from 'react-redux';
import { getMovies, getMoviesByGenre } from '../../redux/action/movieActions';

import Movies from '../movies/Movies';
import CustomPagination from '../customPagination/CustomPagination';

const Main = () => {
  const [page, setPage] = useState(1);
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

  // const buttons = [
  //   { name: 'All' },
  //   { name: 'Animation' },
  //   { name: 'Action' },
  //   { name: 'Adventure' },
  //   { name: 'Sci-fi' },
  //   { name: 'Comedy' },
  // ];

  const { movies, loading } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const [isClick, setIsClick] = useState(false);

  const sortByGenre = (e) => {
    dispatch(getMoviesByGenre(e.target.value));
    // setIsClick(!isClick);
  };

  useEffect(() => {
    dispatch(getMovies(page));
  }, [page]);

  return (
    <div className="home">
      <div className="title">
        <h1>Browse by Category</h1>
      </div>

      {/* {buttons.map((button, index) => (
        <button key={index} className={`btn`} onclick={sortByGenre}>
          {button.name}
        </button>
      ))} */}

      <button className="btn" onClick={() => dispatch(getMovies())}>
        All
      </button>
      <button
        className={'btn'}
        value={genreValue.animation.id}
        onClick={sortByGenre}
      >
        Animation
      </button>
      <button
        className={'btn'}
        value={genreValue.action.id}
        onClick={sortByGenre}
      >
        Action
      </button>
      <button
        className={'btn'}
        value={genreValue.adventure.id}
        onClick={sortByGenre}
      >
        Adventure
      </button>
      <button
        className={'btn'}
        value={genreValue.sciene_fiction.id}
        onClick={sortByGenre}
      >
        Sci-fi
      </button>
      <button
        className={'btn'}
        value={genreValue.comedy.id}
        onClick={sortByGenre}
      >
        Comedy
      </button>

      <div className="card-container">
        {loading
          ? 'Loading...'
          : movies.map((movie) => (
              <Movies
                key={movie.id}
                title={movie.title}
                genre={movie.genre_ids[0]}
                poster_path={movie.poster_path}
                id={movie.id}
              />
            ))}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Main;
