export const userAct = (email, token) => {
  return {
    type: "user/login",
    payload: {
      email,
      token,
    },
  };
};
