import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import fetchTrendMovies from "../../services/api";

const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    const getTrendMovies = async () => {
      const movies = await fetchTrendMovies();
      setTrendMovies(movies);
    };
    getTrendMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MovieList movies={trendMovies} />
    </div>
  );
};

export default HomePage;
