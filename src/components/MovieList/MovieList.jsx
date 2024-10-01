import s from "./MovieList.module.css";
import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={s.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={s.card}>
          <Link to={`/movies/${movie.id}`} state={location}>
            <h2 className={s.title}>{movie.title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
