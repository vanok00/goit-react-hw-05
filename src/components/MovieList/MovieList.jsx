import { useEffect, useState } from "react";
import fetchMovies from "../../services/api";
import s from "./MovieList.module.css";
import { Link } from "react-router-dom";
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
    <div>
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
    </div>
  );
};

export default MovieList;
