import React, { useEffect, useState } from "react";
import "./Note.scss";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteNote,
  selectAllNotes,
  updateNote,
} from "../store/categories/categories";
import ErrorComponent from "./ErrorComponent";
import ActionsButton from "./buttons/ActionsButton";

const Note = () => {
  const [title, setTitle] = useState();
  const [text, setText] = useState();
  const notesData = useSelector(selectAllNotes);

  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // finding the category and the exact note
  const category =
    notesData[notesData?.findIndex((el) => el.id === params.category)];
  const notes = category?.notes;
  const noteIndex = notes?.findIndex((el) => el.id === params.noteId);
  const note = notes[noteIndex];
  // this makes sure that when we switch note, by looking at the note and the noteId
  useEffect(() => {
    if (note) {
      setText(note.description);
      setTitle(note.title);
    }
  }, [params.noteId, note]);

  const onDeleteHandler = () => {
    dispatch(deleteNote({ categoryId: category.id, noteId: note.id }));
    // after we delete a note, we are redirected to the route of that same category showing the notes
    navigate(`/${category.id}`);
  };

  const onSaveHandler = () => {
    dispatch(
      updateNote({
        categoryId: category.id,
        noteId: note.id,
        newTitle: title,
        newDescription: text,
      })
    );
    // redirecting after save again
    navigate(`/${category.id}`);
  };

  let content;
  // safety measures in case that the url does match any note id
  if (notes.find((el) => el.id === params.noteId)) {
    content = (
      <div className="note">
        <textarea
          className="note__title"
          value={title}
          rows={1}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="note__text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="actions">
          <ActionsButton type="delete" onClickHandler={onDeleteHandler} />
          <ActionsButton type="save" onClickHandler={onSaveHandler} />
        </div>
      </div>
    );
  } else {
    // generating an error component if the route is wrong
    content = <ErrorComponent type="note" />;
  }
  return content;
};

export default Note;
