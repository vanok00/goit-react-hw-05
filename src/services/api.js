import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const YOUR_ACCESS_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWM4ODQ3MTIyNjQwMWFjNjg4NGE5OGQ4NzA0YjcxZCIsIm5iZiI6MTcyNzI0MzUyNS4zMTE5NzQsInN1YiI6IjY2ZjNhM2M4ZjViNDk3ODY0MzIyZTc5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tOtm59wrEpA1AFBRsaAl7cHNRePqrN46NYcLozi5JO0";
const options ={
  headers: {
    Authorization: `Bearer ${YOUR_ACCESS_KEY}`,
  },
};

 const fetchTrendMovies = async () => {
  const {data} = await axios.get("trending/movie/day", options);
return data.results; 
};

 
  export const fetchMovieById = async (movieId) => {
    const {data} = await axios.get(`/movie/${movieId}`, options);
  return data; 
  };


  export const fetchCastsById = async (movieId) => {
    const {data} = await axios.get(`movie/${movieId}/credits`, options);
  return data.cast; 
  };


export const fetchReviewsById = async (movieId) => {
  const {data} = await axios.get(`movie/${movieId}/reviews`, options);
  return data.results; 
  };


export const fetchMovieByQuery = async (query) => {
  const {data} = await axios.get(`search/movie?query=${query}`, options);
  return data.results; 
  };

  export default fetchTrendMovies;


