import s from "./style.module.css";
import { Search } from "react-bootstrap-icons";
export function NoteSearch({ recherche }) {
  return (
    <>
      <div className={s.container}>
        <Search className={s.icon} size={25}/>
        <input
          type="text"
          className={s.search}
          name="search"
          onChange={(e) => recherche(e.target.value)}
        />
      </div>
    </>
  );
}
