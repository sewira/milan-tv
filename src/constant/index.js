export const FETCH_ALL_MOVIES = `https://api.themoviedb.org/3/discover/movie?api_key=5c994437deded241a082aac5d31f0302&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

export const FETCH_MOVIES = (page) => {
  return `https://api.themoviedb.org/3/discover/movie?api_key=5c994437deded241a082aac5d31f0302&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;
};

export const IMG_API = 'https://image.tmdb.org/t/p/w1280';

export const FETCH_MOVIES_BY_GENRE = (id) => {
  return `https://api.themoviedb.org/3/discover/movie?api_key=5c994437deded241a082aac5d31f0302&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`;
};

export const FETCH_MOVIE_BY_ID = (id) => {
  return `https://api.themoviedb.org/3/movie/${id}?api_key=5c994437deded241a082aac5d31f0302&language=en-US`;
};

export const FETCH_MOVIES_BY_SEARCH = (title) => {
  return `https://api.themoviedb.org/3/search/movie?api_key=5c994437deded241a082aac5d31f0302&language=en-US&query=${title}&page=1&include_adult=false`;
};

export const genres = [
  {
    id: 28,
    name: 'Action',
  },
  {
    id: 12,
    name: 'Adventure',
  },
  {
    id: 16,
    name: 'Animation',
  },
  {
    id: 35,
    name: 'Comedy',
  },
  {
    id: 80,
    name: 'Crime',
  },
  {
    id: 99,
    name: 'Documentary',
  },
  {
    id: 18,
    name: 'Drama',
  },
  {
    id: 10751,
    name: 'Family',
  },
  {
    id: 14,
    name: 'Fantasy',
  },
  {
    id: 36,
    name: 'History',
  },
  {
    id: 27,
    name: 'Horror',
  },
  {
    id: 10402,
    name: 'Music',
  },
  {
    id: 9648,
    name: 'Mystery',
  },
  {
    id: 10749,
    name: 'Romance',
  },
  {
    id: 878,
    name: 'Science Fiction',
  },
  {
    id: 10770,
    name: 'TV Movie',
  },
  {
    id: 53,
    name: 'Thriller',
  },
  {
    id: 10752,
    name: 'War',
  },
  {
    id: 37,
    name: 'Western',
  },
];
