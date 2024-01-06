import { NoteAPI } from "api/note-api";
import { NoteForm } from "components/NoteForm/NoteForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNote } from "store/note/note-slice";

export function NoteCreate(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const submitNote = async (noteValue)=>{
        const newNote = await NoteAPI.create({...noteValue, created_at:new Date().toLocaleDateString()})
        dispatch(addNote(newNote))
        navigate("/")
    }
    return<>
        <NoteForm onSubmit={submitNote} titre={"Create Note"}/>
    </>
}