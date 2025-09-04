import React, { useState } from "react";
import "./App.css";

function App() {
  const [chatList, setChatList] = useState([]);
  const [person, setPerson] = useState("");
  const [note, setNote] = useState("");

  function postMsg(e) {
    e.preventDefault();
    if (person.trim() === "" || note.trim() === "") return;

    const newLine = { who: person, text: note };
    setChatList([...chatList, newLine]);

    setPerson("");
    setNote("");
  }

  return (
    <div className="box">
      <h2 className="head">Mini Chat Demo</h2>

      <div className="screen">
        {chatList.map((x, i) => (
          <p key={i}>
            <b>{x.who}:</b> {x.text}
          </p>
        ))}
      </div>

      <form onSubmit={postMsg} className="formarea">
        <input
          type="text"
          placeholder="Enter name"
          value={person}
          onChange={(e) => setPerson(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter message"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
