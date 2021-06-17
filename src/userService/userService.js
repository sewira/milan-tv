export const login = async (email, password) => {
  const url = "https://movie-app-teamc.herokuapp.com/api/users/login";
  const data = {
    email,
    password,
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    throw error;
  }
};


export const registrasi = async (full_name, username, email, password, profile_picture) => {
  const url = "https://movie-app-teamc.herokuapp.com/api/users/register";
  const data = {
    full_name, 
    username, 
    email, 
    password, 
    profile_picture

  };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    throw error;
  }
};
