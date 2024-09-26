import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchMovieById } from "../../services/api";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState(null);

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
    <div className={s.wrapper}>
      <div>
        <Link to="/">Back to Home</Link>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt={movie.title}
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
      </div>
    </div>
  );
};

export default MovieDetailsPage;
