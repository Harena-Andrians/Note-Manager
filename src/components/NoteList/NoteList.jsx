// import { useSelector } from "react-redux";
import s from "./style.module.css";
import { NoteCard } from "components/NoteCard/NoteCard";
export function NoteList({noteList}) {
//   const noteList = useSelector((store) => store.NOTE.noteList);
  
  return (
    <div className={s.container}>
      {noteList &&
        noteList.map((note) => (
            <NoteCard key={note.id} note={note}  />
        ))}
    </div>
  );
}
