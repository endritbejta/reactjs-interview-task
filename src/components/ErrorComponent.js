import React from "react";
import "./ErrorComponent.scss";

const ErrorComponent = ({ type }) => {
  return (
    <div className="invalid-component">
      <p>
        {type.toLowerCase() === "category"
          ? "Something went wrong... Please try to click on one of the categories you have created"
          : "Something went wrong... Please try to click on one of the notes you have created."}
      </p>
    </div>
  );
};

export default ErrorComponent;
