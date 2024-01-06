import { NoteList } from "components/NoteList/NoteList";
import { NoteSearch } from "components/NoteSearch/NoteSearch";
import { useState } from "react";
import { useSelector } from "react-redux";

export function Acceuil() {
    const [searchNote, setSearchNote] = useState("")
  const notes = useSelector((store) => store.NOTE.noteList);
  const filterList = notes.filter((note) => {
    const filterTitle = note.title
      .toUpperCase()
      .includes(searchNote.toUpperCase().trim());
    const filterContent = note.content
      .toUpperCase()
      .includes(searchNote.toUpperCase().trim());

    return filterTitle || filterContent;
  });
  return (
    <>
      <NoteSearch recherche={setSearchNote}/>
      <NoteList noteList={filterList}/>
    </>
  );
}
