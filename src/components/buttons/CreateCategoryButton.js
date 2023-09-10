import React, { useState } from "react";
import "./CreateCategoryButton.scss";

const CreateCategoryButton = ({ onAddCategoryHandler }) => {
  // state for the input of the category
  const [title, setTitle] = useState("");

  // added state to listen when the user clicks the create category button, then showing the proper category input conditionally
  const [createCategory, setCreateCategory] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    onAddCategoryHandler(title);
    setTitle("");
    setCreateCategory(false);
  };

  const onCancelHandler = () => {
    setTitle("");
    setCreateCategory(false);
  };
  return (
    <>
      <div
        onClick={() => setCreateCategory((prev) => !prev)}
        className="create-category-container"
      >
        <p>Create Category</p>
        <i className="fa-solid fa-add"></i>
      </div>
      {createCategory && (
        <div className="create-category">
          <form onSubmit={submitHandler}>
            <input
              autoFocus={true}
              placeholder="Add title..."
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit" className="done">
              <i className="fa-solid fa-check"></i>
            </button>
            <button onClick={onCancelHandler} className="cancel">
              <i className="fa-solid fa-x"></i>
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default CreateCategoryButton;
