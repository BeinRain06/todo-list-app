import React from "react";
import CartNote from "./CartNote";
import "./ListNote.css";

function ListNote({ notes, setNotes }) {
  const deleteCard = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="notes_container">
      <ul className="notes_inside">
        {notes.map((note, index) => {
          return (
            <CartNote
              key={index}
              note={note}
              id={index}
              deleteCard={deleteCard}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ListNote;
