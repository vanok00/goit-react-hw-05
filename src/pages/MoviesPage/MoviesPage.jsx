import { FaMagnifyingGlass } from "react-icons/fa6";
import { Field, Form, Formik } from "formik";
import { Toaster } from "react-hot-toast";
import s from "./MoviesPage.module.css";
import { useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { useMemo } from "react";
import { fetchMovieByQuery } from "../../services/api";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  useEffect(() => {
    const getData = async () => {
      if (query) {
        const data = await fetchMovieByQuery(query);
        setMovies(data);
      }
    };
    getData();
  }, [query]);

  const handleChangeQuery = (newQuery) => {
    if (!newQuery) {
      setSearchParams({ query: newQuery });
    } else {
      setSearchParams({});
    }
  };

  const initialValues = {
    query: "",
  };
  console.log(query);

  const handleSubmit = (values) => {
    handleChangeQuery(values.query);
  };

  const filteredMovies = useMemo(
    () =>
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      ),
    [query, movies]
  );

  return (
    <>
      <div>
        <Toaster />
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className={s.searchBar}>
            <button type="submit" className={s.searchBtn}>
              <FaMagnifyingGlass />
            </button>
            <Field
              className={s.searchInput}
              name="query"
              type="text"
              placeholder="Search movies..."
            />
          </Form>
        </Formik>
      </div>
      <div>
        <MovieList movies={filteredMovies} />
      </div>
    </>
  );
};

export default MoviesPage;
