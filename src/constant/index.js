// export const FETCH_ALL_MOVIES = `https://api.themoviedb.org/3/discover/movie?api_key=5c994437deded241a082aac5d31f0302&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

// export const FETCH_MOVIES = (page) => {
//   return `https://api.themoviedb.org/3/discover/movie?api_key=5c994437deded241a082aac5d31f0302&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;
// };

// export const FETCH_MOVIES_BY_GENRE = (id) => {
//   return `https://api.themoviedb.org/3/discover/movie?api_key=5c994437deded241a082aac5d31f0302&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`;
// };

// export const FETCH_MOVIE_BY_ID = (id) => {
//   return `https://api.themoviedb.org/3/movie/${id}?api_key=5c994437deded241a082aac5d31f0302&language=en-US`;
// };

// export const FETCH_MOVIES_BY_SEARCH = (title) => {
//   return `https://api.themoviedb.org/3/search/movie?api_key=5c994437deded241a082aac5d31f0302&language=en-US&query=${title}&page=1&include_adult=false`;
// };

export const FETCH_ALL_MOVIES = (page) => {
  return `https://movie-app-teamc.herokuapp.com/api/movies/pagination?page=${page}&size=10  `;
};

export const FETCH_MOVIES_BY_ID = (id) => {
  return `https://movie-app-teamc.herokuapp.com/api/movieId/${id}`;
};

export const FETCH_MOVIES_BY_SEARCH = (title) => {
  return `https://movie-app-teamc.herokuapp.com/api/find/movies/?title=${title}`;
};

export const onlyAll = {
  all: true,
  animation: false,
  action: false,
  adventure: false,
  scifi: false,
  comedy: false,
};

export const onlyAsian = {
  all: false,
  hollywood: false,
  bollywood: false,
  drakor: false,
  asian: true,
  horror: false,
};

export const onlyHollywood = {
  all: false,
  hollywood: true,
  bollywood: false,
  drakor: false,
  asian: false,
  horror: false,
};

export const onlyBollywood = {
  all: false,
  hollywood: false,
  bollywood: true,
  drakor: false,
  asian: false,
  horror: false,
};

export const onlyDrakor = {
  all: false,
  hollywood: false,
  bollywood: false,
  drakor: true,
  asian: false,
  horror: false,
};

export const onlyHorror = {
  all: false,
  hollywood: false,
  bollywood: false,
  drakor: false,
  asian: false,
  horror: true,
};
