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

import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { moviesId } = useParams();
  console.log(moviesId);

  return <div>Detais by user</div>;
};

export default MovieDetails;
