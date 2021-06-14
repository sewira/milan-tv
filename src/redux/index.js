import { combineReducers } from 'redux';
import MoviesReducer from './reducer/moviesReducer';

const rootReducer = combineReducers({
  movies: MoviesReducer,
});

export default rootReducer;
