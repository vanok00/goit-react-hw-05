import axios from 'axios';

export const fetchMovies = async (pageNumber, searchQuery) => {
  const YOUR_ACCESS_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWM4ODQ3MTIyNjQwMWFjNjg4NGE5OGQ4NzA0YjcxZCIsIm5iZiI6MTcyNzI0MzUyNS4zMTE5NzQsInN1YiI6IjY2ZjNhM2M4ZjViNDk3ODY0MzIyZTc5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tOtm59wrEpA1AFBRsaAl7cHNRePqrN46NYcLozi5JO0";
  const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US/', {
    params: {
      query: searchQuery,
      page: pageNumber,
      per_page: 20,
    },
    headers: {
      Authorization: `Bearer ${YOUR_ACCESS_KEY}`,
    },
  });

  return response.data;
};
