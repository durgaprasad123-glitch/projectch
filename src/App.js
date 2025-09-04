import React, { useState } from "react";
import "./App.css";

function App() {
  const [uname, setUname] = useState("");
  const [msg, setMsg] = useState("");
  const [allmsg, setAllmsg] = useState([]);
  const [enter, setEnter] = useState(false);

  function handleJoin(e) {
    e.preventDefault();
    if (uname !== "") {
      setEnter(true);
    }
  }

  function handleSend(e) {
    e.preventDefault();
    if (msg === "") return;
    let temp = [...allmsg];
    temp.push({ who: uname, what: msg });
    setAllmsg(temp);
    setMsg("");
  }

  if (!enter) {
    return (
      <div className="box">
        <h2>Enter Name</h2>
        <form onSubmit={handleJoin}>
          <input
            type="text"
            value={uname}
            onChange={(e) => setUname(e.target.value)}
          />
          <button type="submit">Join</button>
        </form>
      </div>
    );
  }

  return (
    <div className="box">
      <h2>Simple Chat</h2>
      <div className="chatarea">
        {allmsg.map((m, i) => (
          <p key={i}>
            <b>{m.who}</b>: {m.what}
          </p>
        ))}
      </div>
      <form onSubmit={handleSend} className="sendform">
        <input
          type="text"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
