import { useState } from "react";
import s from "./style.module.css";
import { Trash, PencilSquare } from "react-bootstrap-icons";
import { validatorService } from "service/formError/formError";
import { FieldError } from "components/FieldError/FieldError";

const VALIDATOR = {
  title: (value) => {
    return validatorService.min(value, 3) || validatorService.max(value, 20);
  },
  content: (value) => {
    return validatorService.min(value, 5);
  },
};
export function NoteForm({
  titre,
  isEditable = true,
  onClickTrash,
  onClickEdit,
  onSubmit,
  note,
}) {
  const [noteValue, setNoteValue] = useState({
    title: note?.title || "",
    content: note?.content || "",
  });

  const [formError, setFormError] = useState({
    title: note?.title ? false : "",
    content: note?.content ? false : "",
  });

  const getValue = (e) => {
    setNoteValue({ ...noteValue, [e.target.name]: e.target.value });
    validate(e.target.name, e.target.value);
  };

  const validate = (fieldName, fieldValue) => {
    setFormError({
      ...formError,
      [fieldName]: VALIDATOR[fieldName](fieldValue),
    });
  };

  function hasError() {
    return Object.values(formError).some((error) => error !== false);
  }

  const onClickBtn = (e) => {
    e.preventDefault();
    onSubmit(noteValue);
  };
  return (
    <>
      <form className={s.container}>
        <div className={s.head}>
          <h2 className={s.titre}>{titre}</h2>
          {onClickEdit && (
            <PencilSquare size={20} className={s.icon1} onClick={onClickEdit} />
          )}
          {onClickTrash && <Trash size={20} className={s.icon2} onClick={onClickTrash}/>}
        </div>
        {isEditable && (
          <div className={s.title}>
            <label htmlFor="title">title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="title"
              onChange={getValue}
              value={noteValue.title}
            />
            <FieldError msg={formError.title} />
          </div>
        )}
        {isEditable ? (
          <div className={s.content}>
            <label htmlFor="content" placeholder="content">
              content
            </label>
            <textarea
              type="text"
              id="content"
              name="content"
              placeholder="content..."
              onChange={getValue}
              value={noteValue.content}
            ></textarea>
            <FieldError msg={formError.content} />
          </div>
        ) : (
          <pre className={s.textContent}>{note.content}</pre>
        )}
        {isEditable && (
          <button
            disabled={hasError()}
            className={s.button}
            onClick={onClickBtn}
          >
            Submit
          </button>
        )}
      </form>
    </>
  );
}
