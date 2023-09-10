import React from "react";
import CreateCategoryButton from "./buttons/CreateCategoryButton";
import { useSelector, useDispatch } from "react-redux";
import { addCategory, selectAllNotes } from "../store/categories/categories";

import SingleCategory from "./SingleCategory";
import "./Sidebar.scss";

const Sidebar = () => {
  const notesData = useSelector(selectAllNotes);
  const dispatch = useDispatch();

  // navigate(notesData[0].id);
  const onAddCategoryHandler = (newName) => {
    // array of names of categories
    const existingCategoryNames = notesData.map((category) =>
      category.name.toLowerCase()
    );

    // making a new categoryid by removing spaces
    let newCategoryId = newName.replace(/\s+/g, "").toLowerCase();

    // updating the counter based on the number of same name of categories
    let counter = existingCategoryNames.filter((category) => {
      // regular expresion to find categories with (:number)
      const regex = /^(.*?)\s\(\d+\)/;
      const match = category.match(regex);
      if (match) {
        return match[1] === newName.toLowerCase();
      } else {
        return category === newName.toLowerCase();
      }
    }).length;

    // making the new name eg. Category (1), for the repeated name
    let updatedCategoryName = `${newName}${counter > 0 ? ` (${counter})` : ""}`;

    // making the new Id, so react doesnt have a problem with keys
    newCategoryId = newCategoryId.toLowerCase() + `${counter}`;
    const newCategoryName = updatedCategoryName;

    // dispatching the action needed to add the category
    dispatch(addCategory({ newCategoryName, newCategoryId }));
  };

  return (
    <div className="sidebar">
      <CreateCategoryButton onAddCategoryHandler={onAddCategoryHandler} />
      <div className="categories">
        {notesData.map((element) => {
          return (
            <SingleCategory
              key={element.id}
              id={element.id}
              title={element.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
