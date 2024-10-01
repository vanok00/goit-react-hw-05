import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewsById } from "../../services/api";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getReviews = async () => {
      if (!moviesId) return;
      const reviews = await fetchReviewsById(moviesId);
      setReviews(reviews);
    };
    getReviews();
  }, [moviesId]);
  return (
    <>
      {reviews.length === 0 ? (
        <h2>Sorry, there are no reviews available.</h2>
      ) : (
        <ul className={s.reviews}>
          {reviews.map((review) => (
            <li key={review.id} className={s.review}>
              <h3 className={s.author}>Author: {review.author}</h3>
              <p className={s.content}>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MovieReviews;
