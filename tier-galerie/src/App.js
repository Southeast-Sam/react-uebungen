import React, { useState, useEffect } from "react";
import Gallery from "./Gallery";
import "./App.css";

function App() {
  const [bilder, setBilder] = useState([]);

  async function bilderHolen() {
    try {
      const res = await fetch("https://dog.ceo/api/breeds/image/random/5");
      const daten = await res.json();
      console.log(daten);
      const neueBilder = daten.message.map((url, index) => ({
        id: index,
        url: url,
        liked: false,
      }));
      setBilder(neueBilder);
    } catch (err) {
      console.error("Die Daten konnten nicht geladen werden", err);
    }
  }
  useEffect(() => {
    bilderHolen();
  }, []);

  function toggleLike(id) {
    const bildToggle = bilder.map((bild) =>
      bild.id === id ? { ...bild, liked: !bild.liked } : bild
    );
    setBilder(bildToggle);
  }

  const likeCount = bilder.filter((bild) => bild.liked).length;

  return (
    <div className="">
      <h1 className="ueberschrift">🐾 Tier Galerie</h1>
      <p className="counter">
        Du hast {likeCount} {likeCount === 1 ? "Bild" : "Bilder"} geliked.
      </p>
      <button className="lade-btn" onClick={bilderHolen}>
        🔄 Neue Bilder
      </button>
      <Gallery bilder={bilder} toggleLike={toggleLike} />
    </div>
  );
}

export default App;
