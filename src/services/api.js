import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US/'
const fetchMovies = async () => {
  const YOUR_ACCESS_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWM4ODQ3MTIyNjQwMWFjNjg4NGE5OGQ4NzA0YjcxZCIsIm5iZiI6MTcyNzI0MzUyNS4zMTE5NzQsInN1YiI6IjY2ZjNhM2M4ZjViNDk3ODY0MzIyZTc5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tOtm59wrEpA1AFBRsaAl7cHNRePqrN46NYcLozi5JO0";
  const { data } = await axios.get('movie', {
    headers: {
      Authorization: `Bearer ${YOUR_ACCESS_KEY}`,
    },
  });
  return data.results;
};
export default fetchMovies;

export const fetchMoviesById = async (userId) => {
  const YOUR_ACCESS_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWM4ODQ3MTIyNjQwMWFjNjg4NGE5OGQ4NzA0YjcxZCIsIm5iZiI6MTcyNzI0MzUyNS4zMTE5NzQsInN1YiI6IjY2ZjNhM2M4ZjViNDk3ODY0MzIyZTc5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tOtm59wrEpA1AFBRsaAl7cHNRePqrN46NYcLozi5JO0";
  const { data } = await axios.get(`movie/${userId}`, {
    headers: {
      Authorization: `Bearer ${YOUR_ACCESS_KEY}`,
    },
  });
  return data;
};

