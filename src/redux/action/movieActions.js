import axios from 'axios';
import {
  GET_ALL_MOVIES,
  SET_LOADING,
  GET_MOVIES_ERROR,
  SET_GENRE,
} from './types';
import { FETCH_ALL_MOVIES } from '../../constant';

export const getMovies = (page) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.get(FETCH_ALL_MOVIES(page));
    dispatch({
      type: GET_ALL_MOVIES,
      payload: res.data.data,
    });
  } catch (error) {
    // dispatch({
    //   type: GET_MOVIES_ERROR,
    //   payload: error.response.data,
    // });
    console.log(error.response.data);
  }
};

export const getMoviesByGenre = (genre_id) => {
  return (dispatch, getState) => {
    dispatch(setLoading());
    const { movies } = getState().movies;
    const res = movies.filter((movie) => movie.category_id === genre_id);
    dispatch({ type: SET_GENRE, payload: res });
  };
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

// export const getMoviesBySearch = (title, page) => async (dispatch) => {
//   try {
//     dispatch(setLoading());
//     const res = await axios.get(`${FETCH_MOVIES_BY_SEARCH(title, page)}`);
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
