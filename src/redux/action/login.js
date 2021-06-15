export const handleLogin = (email, password) => {
    return {
      type: "LOGIN",
      payload: {
        email:email,
        password:password,
      },
    };
  };
  