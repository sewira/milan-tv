export const handleLogin = (email, token, fullname) => {
  return {
    type: 'LOGIN',
    payload: {
      email: email,
      token: token,
      fullname: fullname,
    },
  };
};
