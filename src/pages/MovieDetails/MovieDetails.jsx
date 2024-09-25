import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchMovies from "../../services/api";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      const data = await fetchMovies(movieId);
      setMovie(data);
    };
    getMovie();
  }, [movieId]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return <div>Detais by user</div>;
};

export default MovieDetails;
