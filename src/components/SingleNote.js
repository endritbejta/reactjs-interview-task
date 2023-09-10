import React from "react";
import "./SingleNote.scss";
import { NavLink } from "react-router-dom";

const SingleNote = ({ id, title, description }) => {
  return (
    <NavLink to={id} className="single-note">
      <p className="title">{title}</p>
      <p className="description">{description}</p>
    </NavLink>
  );
};

export default SingleNote;
