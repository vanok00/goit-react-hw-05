import { useEffect, useState } from "react";
import s from "./HomeApp.module.css";
import { Link } from "react-router-dom";
import fetchMovies from "../../services/api";

const HomeApp = () => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    const getTrendingMovies = async () => {
      const movies = await fetchMovies();
      setResults(movies || []);
    };
    getTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul className={s.moviesList}>
        {results.map((movie) => (
          <li key={movie.id}>
            <Link to={movie.id.toString()}>
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeApp;
