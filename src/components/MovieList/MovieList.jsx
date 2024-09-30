// import s from "./MovieList.module.css";
// import { Link, useLocation } from "react-router-dom";

// const MovieList = ({ movies }) => {
//   const location = useLocation();

//   if (!movies || movies.length === 0) {
//     return <p>IDI NAHUY</p>;
//   }

//   return (
//     <div>
//       <h1>Trending today</h1>
//       <ul className={s.moviesList}>
//         {movies.map((movie) => (
//           <li key={movie.id}>
//             <Link to={`/movie/${movie.id}`} state={location}>
//               <p>{movie.title}</p>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MovieList;

import { useState } from "react";
import fetchMovies from "../../services/api";
import s from "./MovieList.module.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const MovieList = ({ query }) => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    const getTrendingMovies = async () => {
      const movies = await fetchMovies();
      setResults(movies || []);
    };
    getTrendingMovies();
  }, [query]);
  return (
    <>
      <h1>{query ? `Search results for: ${query}` : "Trending today"}</h1>
      <ul className={s.moviesList}>
        {results.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieList;
