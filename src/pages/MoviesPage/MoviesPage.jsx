import { FaMagnifyingGlass } from "react-icons/fa6";
import { Field, Form, Formik } from "formik";
import { Toaster } from "react-hot-toast";
import s from "./MoviesPage.module.css";
import { useState } from "react";
// import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [query, setQuery] = useState("");

  const initialValues = {
    query: "",
  };
  console.log(query);

  const handleSubmit = (values) => {
    console.log(values);
    handleChangeQuery(values.query);
  };
  const handleChangeQuery = (newQuery) => {
    setQuery(newQuery);
  };

  return (
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
  );
};

export default MoviesPage;
