import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCastsById } from "../../services/api";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { moviesId } = useParams();
  const [casts, setCasts] = useState([]);
  useEffect(() => {
    const getCasts = async () => {
      if (!moviesId) return;
      const casts = await fetchCastsById(moviesId);
      setCasts(casts);
    };
    getCasts();
  }, [moviesId]);
  return (
    <div>
      <ul className={s.actorList}>
        {casts.map((cast) => (
          <li key={cast.id}>
            <div className={s.actor}>
              <img
                width={100}
                height={150}
                src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                alt={cast.title}
              />
              <h3>{cast.name}</h3>
              <p>Character: {cast.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;

// "profile_path": "/DDeITcCpnBd0CkAIRPhggy9bt5.jpg"
