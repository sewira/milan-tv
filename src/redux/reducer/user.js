const store = window.localStorage;

const temp = JSON.parse(store.getItem("data"));

const initialState = {
  currentUser: temp || {
    email: "",
    token: "",
  },
  allUsers: {
    list: [],
    error: {},
  },
};

const userRed = (state = initialState, action) => {
  const { type, payload: { email, token } = {} } = action;
  switch (type) {
    case "user/login":
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          email,
          token,
        },
      };
    default:
      return state;
  }
};

export default userRed;
