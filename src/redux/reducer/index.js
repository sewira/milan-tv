import { combineReducers } from "redux";
import loginRed from "../../redux/reducer/login";
import userRed from '../../redux/reducer/user';

const rootReducer = combineReducers({
  loginRed: loginRed,
  userRed: userRed,
});

export default rootReducer;
