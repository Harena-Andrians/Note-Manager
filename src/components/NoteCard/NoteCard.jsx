import { useState } from "react";
import s from "./style.module.css";
import { Trash } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { NoteAPI } from "api/note-api";
import { deleteNote } from "store/note/note-slice";
export function NoteCard({ note }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteNote_ = (note) => {
    if (window.confirm("suprimer la note")) {
      NoteAPI.delete(note.id);
      dispatch(deleteNote(note));
      navigate("/");
    }
  };

  const [cardHover, setCardHover] = useState(false);
  const [trashHover, setTrashHover] = useState(false);
  function TrashClick(e) {
    deleteNote_(note);
    e.stopPropagation();
  }
  return (
    <>
      <div
        className={s.container}
        onMouseEnter={() => setCardHover(true)}
        style={{ borderColor: cardHover ? `#7D80DA` : "white" }}
        onClick={() => navigate("/note/" + note.id)}
        onMouseLeave={() => setCardHover(false)}
      >
        <div className={s.head}>
          <h2 className={s.title}>{note.title}</h2>
          <Trash
            size={22}
            onMouseEnter={() => setTrashHover(true)}
            onMouseLeave={() => setTrashHover(false)}
            style={{
              color: trashHover && "#dc3545",
              display: cardHover ? "block" : "none",
            }}
            onClick={TrashClick}
          />
        </div>
        <span className={s.subtitle}>{note.created_at}</span>
        <p className={s.text}>{note.content}</p>
      </div>
    </>
  );
}
