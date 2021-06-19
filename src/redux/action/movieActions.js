import axios from 'axios';
import {
  GET_ALL_MOVIES,
  SET_LOADING,
  GET_MOVIES_ERROR,
  SET_GENRE,
  SET_MOVES_SEARCH,
} from './types';
import { FETCH_ALL_MOVIES, FETCH_MOVIES_BY_SEARCH } from '../../constant';

export const getMovies = (page) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.get(FETCH_ALL_MOVIES(page));
    dispatch({
      type: GET_ALL_MOVIES,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getMoviesByGenre = (genre_id) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.get(
      'https://movie-app-teamc.herokuapp.com/api/movies'
    );
    const result = res.data.data.movies.filter(
      (movie) => movie.category_id === genre_id
    );
    dispatch({ type: SET_GENRE, payload: result });
  } catch (error) {
    console.log(error);
  }
};

export const getMoviesBySearch = (title) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.get(`${FETCH_MOVIES_BY_SEARCH(title)}`);
    console.log(res.data.data);
    dispatch({
      type: GET_ALL_MOVIES,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_MOVIES_ERROR,
      payload: error.response.data,
    });
  }
};

// export const getMoviesByGenre = (genre) => async (dispatch) => {
//   try {
//     dispatch(setLoading());
//     const res = await axios.get(`${FETCH_MOVIES_BY_GENRE(parseInt(genre))}`);
//     dispatch({
//       type: GET_ALL_MOVIES,
//       payload: res.data.results,
//     });
//   } catch (error) {
//     dispatch({
//       type: GET_MOVIES_ERROR,
//       payload: error.response.data,
//     });
//   }
// };

//set Loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
