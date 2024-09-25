import { useEffect, useState } from "react";
import { fetchMovies } from "../../services/api";
import s from "./HomeApp.module.css";

const HomeApp = () => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    const getTrendingMovies = async () => {
      const data = await fetchMovies();
      setResults(data.results || []);
    };
    getTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul className={s.moviesList}>
        {results.map((result) => (
          <li key={result.id}>
            <p>{result.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeApp;
