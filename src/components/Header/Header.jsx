import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
const Header = () => {
  return (
    <div className={s.wrapper}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </div>
  );
};

export default Header;
