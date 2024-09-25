const MovieApp = () => {
  return (
    <div>
      <ul>
        {[].map((movie) => (
          <li key={movie.id}>
            <p>Movie</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieApp;
