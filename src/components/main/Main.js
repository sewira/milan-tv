import React, { useState, useEffect } from 'react';
import './main.css';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies, getMoviesByGenre } from '../../redux/action/movieActions';
import {
  onlyAll,
  onlyAsian,
  onlyHollywood,
  onlyBollywood,
  onlyDrakor,
  onlyHorror,
} from '../../constant/';

import Movies from '../movies/Movies';
import CustomPagination from '../customPagination/CustomPagination';

const Main = () => {
  const [page, setPage] = useState(0);
  const [isShow, setIsShow] = useState({
    all: true,
    hollywood: false,
    bollywood: false,
    drakor: false,
    asian: false,
    horror: false,
  });

  console.log(page);

  const showAllMovies = () => {
    setIsShow(onlyAll);
  };
  const showAsianMovie = () => {
    setIsShow(onlyAsian);
  };
  const showHollywoodMovie = () => {
    setIsShow(onlyHollywood);
  };
  const showBollywoodMovie = () => {
    setIsShow(onlyBollywood);
  };
  const showDrakorMovie = () => {
    setIsShow(onlyDrakor);
  };
  const showHorrorMovie = () => {
    setIsShow(onlyHorror);
  };

  const { movies, movieGenre } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies(page));
  }, [page]);

  const showAll = isShow.all
    ? movies.map((movie) => (
        <Movies
          key={movie.id}
          title={movie.title}
          poster={movie.poster}
          id={movie.id}
        />
      ))
    : null;

  const showAsian = isShow.asian
    ? movieGenre.map((movie) => (
        <Movies
          key={movie.id}
          title={movie.title}
          poster={movie.poster}
          id={movie.id}
        />
      ))
    : null;

  const showHollywood = isShow.hollywood
    ? movieGenre.map((movie) => (
        <Movies
          key={movie.id}
          title={movie.title}
          poster={movie.poster}
          id={movie.id}
        />
      ))
    : null;

  const showBollywood = isShow.bollywood
    ? movieGenre.map((movie) => (
        <Movies
          key={movie.id}
          title={movie.title}
          poster={movie.poster}
          id={movie.id}
        />
      ))
    : null;

  const showDrakor = isShow.drakor
    ? movieGenre.map((movie) => (
        <Movies
          key={movie.id}
          title={movie.title}
          poster={movie.poster}
          id={movie.id}
        />
      ))
    : null;

  const showHorror = isShow.horror
    ? movieGenre.map((movie) => (
        <Movies
          key={movie.id}
          title={movie.title}
          poster={movie.poster}
          id={movie.id}
        />
      ))
    : null;

  return (
    <div className="home">
      <div className="title">
        <h1>Browse by Category</h1>
      </div>

      <button
        className={`btn ${isShow.all ? 'active' : null}`}
        onClick={() => {
          dispatch(getMovies());
          showAllMovies();
        }}
      >
        All
      </button>
      <button
        className={`btn  ${isShow.asian ? 'active' : null}`}
        onClick={() => {
          dispatch(getMoviesByGenre(6)), showAsianMovie();
        }}
      >
        Asian
      </button>
      <button
        className={`btn  ${isShow.hollywood ? 'active' : null}`}
        onClick={() => {
          dispatch(getMoviesByGenre(8)), showHollywoodMovie();
        }}
      >
        Hollywood
      </button>
      <button
        className={`btn  ${isShow.bollywood ? 'active' : null}`}
        onClick={() => {
          dispatch(getMoviesByGenre(7)), showBollywoodMovie();
        }}
      >
        Bollywood
      </button>

      <button
        className={`btn  ${isShow.drakor ? 'active' : null}`}
        onClick={() => {
          dispatch(getMoviesByGenre(4)), showDrakorMovie();
        }}
      >
        Drakor
      </button>

      <button
        className={`btn  ${isShow.horror ? 'active' : null}`}
        onClick={() => {
          dispatch(getMoviesByGenre(2)), showHorrorMovie();
        }}
      >
        Horror
      </button>

      <div className="card-container">
        {showAll}
        {showAsian}
        {showHollywood}
        {showBollywood}
        {showDrakor}
        {showHorror}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Main;
