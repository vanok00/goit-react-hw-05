import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCastsById } from "../../services/api";
import s from "./MovieCast.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

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
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={5}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
    >
      <ul className={s.actorList}>
        {casts.map((cast) => (
          <SwiperSlide key={cast.id}>
            <li className={s.actor}>
              <img
                src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                alt={cast.title}
              />
              <h3>{cast.name}</h3>
              <p>Character: {cast.character}</p>
            </li>
          </SwiperSlide>
        ))}
      </ul>
    </Swiper>
  );
};

export default MovieCast;
