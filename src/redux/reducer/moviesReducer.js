import {
  GET_ALL_MOVIES,
  SET_LOADING,
  GET_MOVIES_ERROR,
  SET_GENRE,
  SET_MOVES_SEARCH,
} from '../action/types';

const initialState = {
  movies: [],
  movieGenre: [],
  movieSearch: [],
  loading: false,
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_MOVIES:
      return {
        ...state,
        movies: payload,
        loading: false,
      };
    case SET_GENRE:
      return {
        ...state,
        movieGenre: payload,
        loading: false,
      };
    case SET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case SET_MOVES_SEARCH: {
      return {
        ...state,
        loading: false,
        movieSearch: payload,
      };
    }
    case GET_MOVIES_ERROR:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};
