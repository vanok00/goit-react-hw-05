import { useState } from "react";
import fetchTrendMovies from "../../services/api";
import s from "./MovieList.module.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const MovieList = ({ query }) => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    const getTrendingMovies = async () => {
      const movies = await fetchTrendMovies();
      setResults(movies || []);
    };
    getTrendingMovies();
  }, [query]);
  return (
    <>
      <h1>Trending today</h1>
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
