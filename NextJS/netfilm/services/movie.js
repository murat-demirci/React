const API_URL = "https://api.themoviedb.org/3";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  },
};

const fethcMovieAPI = async (path_name, query = "") => {
  try {
    const response = await fetch(`${API_URL}/${path_name}?${query}`, options);
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
};

const getSingleCategory = async (genreId) => {
  return fethcMovieAPI("discover/movie", `with_genres=${genreId}`);
};

const getPouplarMovies = async () => {
  return fethcMovieAPI("movie/popular", `page=1&language=tr-TR`);
};

const getTopRatedMovies = async () => {
  return fethcMovieAPI("movie/top_rated", `language=tr-TR&page=1`);
};

const getCategories = async () => {
  return fethcMovieAPI("genre/movie/list", `language=tr`);
};

const getMovie = async (movieId) => {
  return fethcMovieAPI(`movie/${movieId}`, "language=tr");
};

export {
  fethcMovieAPI,
  getSingleCategory,
  getPouplarMovies,
  getTopRatedMovies,
  getCategories,
  getMovie,
};
