import { configureStore } from "@reduxjs/toolkit";
import { NoteSlice } from "./note/note-slice";

export const store = configureStore({
  reducer: {
    NOTE:NoteSlice.reducer
  },
});
