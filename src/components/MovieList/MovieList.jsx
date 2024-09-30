import { useEffect, useState } from "react";
import fetchMovies from "../../services/api";
import s from "./MovieList.module.css";
import { Link } from "react-router-dom";
import { useMemo } from "react";
const MovieList = ({ query }) => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      const movies = await fetchMovies();
      setResults(movies || []);
    };
    getTrendingMovies();
  }, [query]);

  const filteredMovies = useMemo(
    () =>
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      ),
    [query, movies]
  );

  return (
    <div>
      <h1>Trending today</h1>
      <ul className={s.moviesList}>
        {filteredMovies.map((movie) => (
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
