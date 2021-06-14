import {
  GET_ALL_MOVIES,
  SET_LOADING,
  GET_MOVIES_ERROR,
  GET_MOVIES_BY_GENRE,
} from '../action/types';

const initialState = {
  movies: [],
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
      };
    case SET_LOADING: {
      return {
        ...state,
        loading: true,
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
