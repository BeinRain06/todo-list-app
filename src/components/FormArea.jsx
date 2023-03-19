import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import "./FormArea.css";

function FormArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  };

  const setEmptyContent = (event) => {
    setNote({ content: "" });
    event.preventDefault();
  };

  const submitNote = (event) => {
    props.addNote(note);
    setNote({ title: "", content: "" });

    props.setExpanded(false);

    props.setCount(() => {
      let newCount = props.count + 1;
      if (newCount === 4) {
        newCount = 0;
      }
      return newCount;
    });
    event.preventDefault();
  };
  return (
    <form className="form_container">
      {props.isExpanded && (
        <input
          type="text"
          name="title"
          className="input_title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
        />
      )}
      <textarea
        name="content"
        rows={props.isExpanded ? 5 : 2}
        className="content_todo"
        placeholder="Take A Note..."
        value={note.content}
        onFocus={() => props.setExpanded(true)}
        onChange={handleChange}
      ></textarea>
      {props.isExpanded && (
        <button className="back_to_empty" onClick={setEmptyContent}>
          <AutoModeIcon />
        </button>
      )}
      {props.isExpanded && (
        <button className="submit_note" onClick={submitNote}>
          <AddIcon htmlColor="white" opacity="0.68" />
        </button>
      )}
    </form>
  );
}

export default FormArea;
