import React, { useState } from "react";
import "./CreateNote.scss";
import { useDispatch } from "react-redux";
import { addNote } from "../store/categories/categories";
import { useParams, useNavigate } from "react-router";
import ActionsButton from "./buttons/ActionsButton";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const onSaveChanges = () => {
    const newNote = {
      title,
      description,
      // here we remove any space from the title and turn it to lowercase, to make an id.
      id: title.replace(/\s+/g, "").toLowerCase(),
    };
    // getting the current category from params
    const categoryId = params.category;
    // dispatching the action with the found category, and the newNote, provided by input
    dispatch(addNote({ categoryId, newNote }));
    navigate(`/${categoryId}`);
  };
  return (
    <div className="create-note">
      <textarea
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        rows={1}
        placeholder="Add a title"
      />
      <hr />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Write your note here..."
      />
      <div className="actions">
        <ActionsButton type="save" onClickHandler={onSaveChanges} />
      </div>
    </div>
  );
};

export default CreateNote;
