import React from "react";
import "./CartNote.css";

function CartNote({ note, id, deleteCard }) {
  const handleDelete = () => {
    deleteCard(id);
  };
  return (
    <li key={id} id={id} className="note_card_wrap">
      <div className="cart_title">
        <h3 className="crt_title">{note.title}</h3>
      </div>
      <div className="cart_content">
        <p className="crt_content">{note.content}</p>
      </div>
      <button className="delete_cart_note" onClick={handleDelete}>
        delete
      </button>
    </li>
  );
}

export default CartNote;
