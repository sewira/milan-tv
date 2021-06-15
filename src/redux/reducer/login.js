const initialState = {
  email: '',
  password: ''
};

const loginRed = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: (state, action) => {
          state.user = action.state.login;
        },
      };
    default:
      return { ...state };
  }
};

export default loginRed;
