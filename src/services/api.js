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

export const fetchMovieById = async (moviesId) => {
  const YOUR_ACCESS_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWM4ODQ3MTIyNjQwMWFjNjg4NGE5OGQ4NzA0YjcxZCIsIm5iZiI6MTcyNzI0MzUyNS4zMTE5NzQsInN1YiI6IjY2ZjNhM2M4ZjViNDk3ODY0MzIyZTc5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tOtm59wrEpA1AFBRsaAl7cHNRePqrN46NYcLozi5JO0";

  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${moviesId}`, {
      headers: {
        Authorization: `Bearer ${YOUR_ACCESS_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movie data:", error);
    throw error;
  }
};

// export const fetchGenres = async (moviesId) => {
//   const YOUR_ACCESS_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWM4ODQ3MTIyNjQwMWFjNjg4NGE5OGQ4NzA0YjcxZCIsIm5iZiI6MTcyNzI0MzUyNS4zMTE5NzQsInN1YiI6IjY2ZjNhM2M4ZjViNDk3ODY0MzIyZTc5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tOtm59wrEpA1AFBRsaAl7cHNRePqrN46NYcLozi5JO0";

//   try {
//     const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?language=en/${moviesId}`, {

//       headers: {
//         Authorization: `Bearer ${YOUR_ACCESS_KEY}`,
//       },
//     });
// const genres = response.data.genres;
// return genres;
//   } catch (error) {
//     console.error("Error fetching movie data:", error);
//     return[];
//   }
// };
// fetchGenres();



export const fetchCastsById = async (moviesId) => {
  const YOUR_ACCESS_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWM4ODQ3MTIyNjQwMWFjNjg4NGE5OGQ4NzA0YjcxZCIsIm5iZiI6MTcyNzI0MzUyNS4zMTE5NzQsInN1YiI6IjY2ZjNhM2M4ZjViNDk3ODY0MzIyZTc5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tOtm59wrEpA1AFBRsaAl7cHNRePqrN46NYcLozi5JO0";

  const response = await axios.get(`https://api.themoviedb.org/3/movie/${moviesId}/credits`, {
    headers: {
      Authorization: `Bearer ${YOUR_ACCESS_KEY}`,
    },
  });
  return response.data.cast; 
};



