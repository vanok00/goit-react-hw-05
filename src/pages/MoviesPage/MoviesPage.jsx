import { FaMagnifyingGlass } from "react-icons/fa6";
import { Field, Form, Formik } from "formik";
import { Toaster } from "react-hot-toast";
import s from "./MoviesPage.module.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMovieByQuery } from "../../services/api";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovieByQuery(query);
      setMovies(data);
    };
    getData();
  }, [query]);

  const handleChangeQuery = (newQuery) => {
    if (!newQuery) {
      return setSearchParams({});
    }
    searchParams.set("query", newQuery);
    setSearchParams(searchParams);
  };

  const initialValues = {
    query: "",
  };
  console.log(query);
  const handleSubmit = (values) => {
    console.log(values);
    handleChangeQuery(values.query);
    values.query = "";
  };

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
      <div></div>
    </>
  );
};

export default MoviesPage;
// import { FaMagnifyingGlass } from "react-icons/fa6";
// import { Field, Form, Formik } from "formik";
// import { Toaster } from "react-hot-toast";
// import s from "./MoviesPage.module.css";
// import { useState } from "react";

// const MoviesPage = () => {
//   const [movies, setMovies] = useState("");

//   const initialValues = {
//     movies: "",
//   };
//   console.log(movies);

//   const handleSubmit = (values) => {
//     console.log(values);
//     handleChangeQuery(values.movies);
//   };
//   const handleChangeQuery = (newMovie) => {
//     setMovies(newMovie);
//   };

//   return (
//     <div>
//       <Toaster />
//       <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//         <Form className={s.searchBar}>
//           <button type="submit" className={s.searchBtn}>
//             <FaMagnifyingGlass />
//           </button>
//           <Field
//             className={s.searchInput}
//             name="query"
//             type="text"
//             placeholder="Search movies..."
//           />
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default MoviesPage;
