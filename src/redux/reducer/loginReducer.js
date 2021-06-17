import jwt_decode from 'jwt-decode';

const store = window.localStorage;
const token = store.getItem('token') || '';

const decoded = token ? jwt_decode(token) : {};

const initialState = {
  email: decoded.email,
  fullname: decoded.full_name,
  token: token
};

const loginRed = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        email: action.payload.email,
        fullname: action.payload.fullname,
        token: action.payload.token
        // login: (state, action) => {
        //   state.user = action.state.login;
        // },
      };
    default:
      return { ...state };
  }
};

export default loginRed;
