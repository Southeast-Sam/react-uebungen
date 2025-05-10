import { useState, useEffect } from "react";

function App() {
  const [bilder, setBilder] = useState([]);

  useEffect(() => {
    async function bilderHolen() {
      try {
        const res = await fetch(
          "https://api.thecatapi.com/v1/images/search?limit=5"
        );
        const daten = await res.json();
        setBilder(daten);
      } catch (err) {
        console.error(
          "Daten konnten nicht geladen werdern, bitte versuchen Sie es später",
          err
        );
      }
    }
    bilderHolen();
  }, []);

  return (
    <div>
      <h1>Zufällige Tiere</h1>
      {bilder.map((bild, index) => (
        <img key={index} src={bild.url} alt="Katze" />
      ))}
    </div>
  );
}

export default App;
