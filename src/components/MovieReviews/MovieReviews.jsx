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
    <div className={s.reviewsList}>
      {reviews.length === 0 ? (
        <h2>Sorry, there are no reviews available.</h2>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <div className={s.review}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;
