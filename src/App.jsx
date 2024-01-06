import { NoteAPI } from "api/note-api";
import { Header } from "components/Header/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { setNoteList } from "store/note/note-slice";
export function App() {
    const dispatch = useDispatch()
    const fetchAll = async ()=>{
        const noteList = await NoteAPI.fetchAll()
        dispatch(setNoteList(noteList))
    }
    useEffect(()=>{
        fetchAll()
    },[])
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
