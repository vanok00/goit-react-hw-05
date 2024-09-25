// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import fetchMovies from "../../services/api";

// const MovieDetails = () => {
//   const params = useParams();
//   const [movie, setMovie] = useState(null);
//   console.log(params);
//   useEffect(() => {
//     const getMovie = async () => {
//       const data = await fetchMovies(params);
//       setMovie(data);
//     };
//     getMovie();
//   }, [params]);

//   if (!movie) {
//     return <p>Loading...</p>;
//   }

//   return <div>Detais by user</div>;
// };

// export default MovieDetails;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesById } from "../../services/api";

const MovieDetails = () => {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchMoviesById(moviesId);
      setMovie(data);
    };
    getData();
  }, [moviesId]);
  if (!movie) return <h2>Loading...</h2>;

  return (
    <div>
      <img src={movie.backdrop_path} />
      <h2> {movie.overview}</h2>
    </div>
  );
};

export default MovieDetails;
