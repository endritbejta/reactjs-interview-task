import React, { useState } from "react";
import "./Category.scss";
import { Outlet, useLocation, useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllNotes } from "../store/categories/categories";

import SingleNote from "./SingleNote";
import ErrorComponent from "./ErrorComponent";

const Category = () => {
  const [userInput, setUserInput] = useState("");
  const params = useParams();
  const location = useLocation();

  // getting all the data from the categoriesSlice
  const notesData = useSelector(selectAllNotes);

  // extrating the the notes of the current folder
  const notes =
    notesData[notesData.findIndex((el) => el.id === params.category)]?.notes;

  // in case that user types something in search input, this function searches for that word or letter in any of the title or description of notes
  const filteredData = notes?.filter((note) => {
    const titleMatch = note.title
      .toLowerCase()
      .includes(userInput.toLowerCase());
    const descriptionMatch = note.description
      .toLowerCase()
      .includes(userInput.toLowerCase());
    return titleMatch || descriptionMatch;
  });

  // first array of notes represents all of the notes
  let arrayOfNotes = notes;
  // in case user typed anythingm then we get the filtered notes
  if (userInput) arrayOfNotes = filteredData;

  let content;
  // first as a measure of security we check if the written url for category exist within our data, if yes we proceed to generate the content desired
  if (notesData.find((el) => el.id === params.category)) {
    content = (
      <div className="category">
        {params.category &&
          location.pathname !== `/${params.category}/create-note` && (
            <div className="category__notes-container">
              <div className="category__create-note">
                <NavLink to="create-note" className="create-note-button">
                  <p>Create Note</p>
                  <i className="fa-solid fa-add"></i>
                </NavLink>
                <label className="input-label" for="userInput">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <input
                    value={userInput}
                    onChange={(e) => {
                      setUserInput(e.target.value);
                    }}
                    id="user-input"
                    type="text"
                    className="input"
                    placeholder="Search..."
                  />
                </label>
              </div>
              <div className="category__notes">
                {arrayOfNotes.map((note) => {
                  return (
                    <SingleNote
                      key={note.id}
                      id={note.id}
                      title={note.title}
                      description={note.description}
                    />
                  );
                })}
              </div>
            </div>
          )}
        <Outlet />
      </div>
    );
  } else {
    // in case the condition above doesnt match, if the url is written with mistakes, we generate error component
    content = <ErrorComponent type="category" />;
  }
  return content;
};

export default Category;
