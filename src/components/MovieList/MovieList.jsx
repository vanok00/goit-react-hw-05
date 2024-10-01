import s from "./MovieList.module.css";
import { Link, useLocation } from "react-router-dom";
import { baseImgUrl } from "../../App";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <ul className={s.list}>
        {movies.map((movie) => (
          <li key={movie.id} className={s.movieLi}>
            <Link to={`/movie/${movie.id}`} state={location}>
              <div>
                <img
                  src={
                    movie.poster_path
                      ? `${baseImgUrl}${movie.poster_path}`
                      : "https://placehold.co/300x450/0A2351/6699CC.jpg?text=Image+Not+Found"
                  }
                  alt={movie.title}
                />
                <div>
                  <h2 className={s.title}>{movie.title}</h2>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieList;
