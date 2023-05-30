import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '283606b9670e825b5faecb4b02574510';

const TREND = 'trending/movie/day';
const SEARCH = 'search/movie';

//movies by trends
const getTrendingMovies = async () => {
  const response = await axios(`${TREND}?api_key=${KEY}`);
  return response.data.results;
};

//movies by search
// TODO: add pages
const getMoviesBySearch = async query => {
  const response = await axios(`${SEARCH}?api_key=${KEY}&query=${query}`);
  return response.data.results;
};

//movie details
const getMovieDetails = async id => {
  const response = await axios(`movie/${id}?api_key=${KEY}`);
  return response.data;
};

//movie cast
const getMovieCast = async id => {
  const response = await axios(`movie/${id}/credits?api_key=${KEY}`);
  return response.data.cast;
};

//movie reviews
const getMovieReviews = async id => {
  const response = await axios(`movie/${id}/reviews?api_key=${KEY}`);
  return response.data.results;
};

const api = {
  getTrendingMovies,
  getMoviesBySearch,
  getMovieDetails,
  getMovieCast,
  getMovieReviews,
};

export default api;
