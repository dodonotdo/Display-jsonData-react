import React, { useState } from "react";
import axios from "axios";
import "./App.css"

function App() {
  const [state, setState] = useState("");
  const [open, setOpen] = useState(false);

  const handleClick = async () => {
    const data = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    setState(data);
  };
  return (
    <div className="header">
      <h2
        style={{
          textAlign: "center",
          fontSize: "25px",
          letterSpacing: "2px",
        }}
      >
        Dispaly JSON Format Data
      </h2>
      <button
        onClick={() => {
          handleClick();
          setOpen(!open);
        }}
        style={{
          letterSpacing: "1px",
          width: "200px",
          background: "rgba(19, 183, 96, 1.0)",
          padding: "17px",
          marginTop: "15px",
          marginBottom: "15px",
          marginLeft: "870px",
          fontWeight: "500",
          fontSize: "20px",
        }}
      >
        Get Data
      </button>

      {open && (
        <div className="data"
          style={{
            marginTop: "15px",
            marginLeft: "70px",
            marginRight: "70px",
          }}
        >
          {JSON.stringify(state.data)}
        </div>
      )}
    </div>
  );
}

export default App;
