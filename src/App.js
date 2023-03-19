import Header from "./header/Header";
import FormArea from "./components/FormArea";
import ListNote from "./components/ListNote";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem("list-notes")) ?? [];
  });
  const [isExpanded, setExpanded] = useState(false);

  const onAdd = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };
  const [count, setCount] = useState(0);

  useEffect(() => {
    localStorage.setItem("list-notes", JSON.stringify(notes));
  }, [notes]);
  return (
    <div className="App" data-background={count}>
      <Header />
      <FormArea
        addNote={onAdd}
        isExpanded={isExpanded}
        setExpanded={setExpanded}
        count={count}
        setCount={setCount}
      />
      <ListNote notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;
