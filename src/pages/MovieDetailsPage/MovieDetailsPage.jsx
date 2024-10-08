import { useEffect, useRef, useState } from "react";
import {
  useParams,
  Link,
  NavLink,
  Outlet,
  useLocation,
} from "react-router-dom";
import { fetchMovieById } from "../../services/api";
import s from "./MovieDetailsPage.module.css";
import { Suspense } from "react";
import Loader from "../../components/Loader/Loader";

const MovieDetailsPage = () => {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const goBackRef = useRef(location.state);
  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const movieData = await fetchMovieById(moviesId);
        setMovie(movieData);
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      }
    };

    getMovieDetails();
  }, [moviesId]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className={s.backLink}>
        <Link className={s.link} to={goBackRef.current ?? "/movie"}>
          Back to Home
        </Link>
      </div>
      <div className={s.movie}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={250}
          />
        </div>
        <div className={s.overview}>
          <h2>{movie.original_title}</h2>
          <p>
            <strong>User Score:</strong> {Math.round(movie.vote_average * 10)}
            {"%"}
          </p>
          <p>
            <strong>Overview:</strong> {movie.overview}
          </p>
          <p>
            <strong>Genres:</strong>{" "}
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
          <hr />
        </div>
      </div>
      <div className={s.addInfo}>
        <h3>Additional information</h3>

        <NavLink to="casts">
          <p>Casts</p>
        </NavLink>
        <NavLink to="reviews">
          <p>Reviews</p>
        </NavLink>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
