import React from "react";
import "./SingleCategory.scss";
import { NavLink } from "react-router-dom";

const SingleCategory = ({ id, title }) => {
  return (
    <NavLink to={`${id}`} className="single-category">
      <i className="fa-solid fa-folder"></i>
      <p>{title}</p>
      <i className="fa-solid fa-caret-down"></i>
    </NavLink>
  );
};

export default SingleCategory;
