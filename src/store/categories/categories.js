import { createSlice } from "@reduxjs/toolkit";
import { data as notesData } from "../../data/data";

// notes data represent an array of dummydata that usually would be fetched from backend
const initialState = {
  categories: notesData,
  status: "idle",
  error: null,
};

// createing the slice of categories state
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addNote: (state, action) => {
      const { categoryId, newNote } = action.payload;
      const category = state.categories.find((cat) => cat.id === categoryId);
      if (category) {
        category.notes.push(newNote);
      }
    },
    addCategory: (state, action) => {
      const { newCategoryName, newCategoryId } = action.payload;
      let newCategory = {
        id: newCategoryId,
        name: newCategoryName,
        notes: [],
      };

      state.categories.push(newCategory);
    },

    deleteNote: (state, action) => {
      const { categoryId, noteId } = action.payload;
      const category = state.categories.find((cat) => cat.id === categoryId);
      if (category) {
        category.notes = category.notes.filter((note) => note.id !== noteId);
      }
    },
    updateNote: (state, action) => {
      const { categoryId, noteId, newTitle, newDescription } = action.payload;
      const category = state.categories.find((cat) => cat.id === categoryId);

      if (category) {
        const note = category.notes.find((note) => note.id === noteId);

        if (note) {
          note.title = newTitle;
          note.description = newDescription;
        }
      }
    },
  },
});

// exporting the selectore of the categories state
export const selectAllNotes = (state) => state.categories.categories;

// exporting the reducer actions
export const { deleteNote, updateNote, addNote, addCategory } =
  categoriesSlice.actions;

// exprting the reducer to use it on store
export default categoriesSlice.reducer;
