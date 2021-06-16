import axios from 'axios';
import { GET_ALL_MOVIES, SET_LOADING, GET_MOVIES_ERROR } from './types';
import {
  FETCH_MOVIES,
  FETCH_MOVIES_BY_GENRE,
  FETCH_MOVIES_BY_SEARCH,
} from '../../constant';

export const getMovies = (page) => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.get(FETCH_MOVIES(page));
    dispatch({
      type: GET_ALL_MOVIES,
      payload: res.data.results,
    });
  } catch (error) {
    dispatch({
      type: GET_MOVIES_ERROR,
      payload: error.response.data,
    });
  }
};

export const getMoviesByGenre = (genre) => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.get(`${FETCH_MOVIES_BY_GENRE(parseInt(genre))}`);
    dispatch({
      type: GET_ALL_MOVIES,
      payload: res.data.results,
    });
  } catch (error) {
    dispatch({
      type: GET_MOVIES_ERROR,
      payload: error.response.data,
    });
  }
};

export const getMoviesBySearch = (title) => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.get(`${FETCH_MOVIES_BY_SEARCH(title)}`);
    dispatch({
      type: GET_ALL_MOVIES,
      payload: res.data.results,
    });
  } catch (error) {
    dispatch({
      type: GET_MOVIES_ERROR,
      payload: error.response.data,
    });
  }
};

//set Loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
