import { combineReducers } from 'redux';
import MoviesReducer from './reducer/moviesReducer';
import loginReducer from './reducer/loginReducer';
import userReducer from './reducer/userReducer';

const rootReducer = combineReducers({
  movies: MoviesReducer,
  login: loginReducer,
  user: userReducer,
});

export default rootReducer;
