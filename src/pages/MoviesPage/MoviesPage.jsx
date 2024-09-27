import { FaMagnifyingGlass } from "react-icons/fa6";
import { Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import s from "./MoviesPage.module.css";

const MoviesPage = ({ setQuery }) => {
  const initialValues = {
    query: "",
  };
  const handleSubmit = (values) => {
    if (!values.query) {
      toast.error("Sorry, your input field can`t be empty!", {
        style: {
          color: "red",
        },
        duration: 3000,
        position: "top-right",
      });
      return;
    }
    setQuery(values.query);
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
            placeholder="Search images and photos"
          />
        </Form>
      </Formik>
    </div>
  );
};

export default MoviesPage;
