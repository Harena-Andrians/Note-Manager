import { NoteAPI } from "api/note-api";
import { NoteForm } from "components/NoteForm/NoteForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteNote, updateNote } from "store/note/note-slice";

export function NoteDetail() {
  const [isEditable, setIsEditable] = useState(false);
  const { noteId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const note = useSelector((store) =>
    store.NOTE.noteList.find((note) => note.id === noteId)
  );

  const editNote = async (noteValue) => {
    const noteUpdated = await NoteAPI.update({ ...noteValue, id: note.id });
    dispatch(updateNote(noteUpdated));
    setIsEditable(false);
  };
  const deleteNote_ = (note) => {
    if (window.confirm("suprimer la note")) {
      NoteAPI.delete(note.id);
      dispatch(deleteNote(note));
      navigate("/");
    }
  };
  return (
    <>
      {note && (
        <NoteForm
          note={note}
          titre={isEditable ? "Edit Note" : note.title}
          onClickEdit={() => setIsEditable(!isEditable)}
          onClickTrash={()=>deleteNote_(note)}
          isEditable={isEditable}
          onSubmit={editNote}
        />
      )}
    </>
  );
}
