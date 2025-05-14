import { useState } from "react";
import "./App.css";

function App() {
  const [stimmung, setStimmung] = useState("");

  const texte = {
    "☺️": "Du bist glücklich - das freut mich sehr",
    "😐": "Neutraler Tag, alles Okay.",
    "😢": "Du bist traurig - ich bin für dich da",
    "😠": "Wütend? Atme tief durch bro",
    "😮": "Überrascht? Was ist passiert?",
  };

  return (
    <div className="emoji-container">
      <h1>Wie fühlst du dich heute</h1>
      {Object.keys(texte).map((emoji) => (
        <button className="emoji-Btn" onClick={() => setStimmung(emoji)}>
          {emoji}
        </button>
      ))}
      {stimmung && <p className="text">{texte[stimmung]}</p>}
    </div>
  );
}

export default App;
