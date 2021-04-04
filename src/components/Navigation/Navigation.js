import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={s.header}>
      <nav>
        <NavLink to={routes.home} className={s.link_home}>
          HOME
        </NavLink>
        <NavLink to={routes.movies} className={s.link_movie}>
          MOVIES
        </NavLink>
      </nav>
    </header>
  );
};
export default Navigation;
