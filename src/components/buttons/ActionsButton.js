import React from "react";
import "./ActionsButton.scss";

const ActionsButton = ({ type, onClickHandler }) => {
  return (
    <button
      onClick={onClickHandler}
      className={`button ${
        type.toLowerCase() === "save" ? "button--save" : "button--delete"
      }`}
    >
      <p>{type === "save" ? "Save Changes" : "Delete Note"}</p>
      {type === "save" ? (
        <i className="fa-solid fa-check"></i>
      ) : (
        <i className="fa-solid fa-trash"></i>
      )}
    </button>
  );
};

export default ActionsButton;
