import { createSlice } from "@reduxjs/toolkit";

export const NoteSlice = createSlice({
  name: "NoteSlice",
  initialState: {
    noteList: [],
  },
  reducers: {
    setNoteList: (currentSlice, action) => {
      currentSlice.noteList = action.payload;
    },
    addNote: (currentSlice, action) => {
      currentSlice.noteList.unshift(action.payload);
    },
    updateNote: (currentSlice, action) => {
      const noteByIndex = currentSlice.noteList.findIndex(
        (note) => note.id === action.payload.id
      );
      currentSlice.noteList[noteByIndex] = action.payload;
    },
    deleteNote: (currentSlice, action) => {
      const noteFilter = currentSlice.noteList.filter(
        (note) => note.id !== action.payload.id
        );
        currentSlice.noteList = noteFilter
    },
  },
});

export const { setNoteList, addNote, updateNote,deleteNote } = NoteSlice.actions;
