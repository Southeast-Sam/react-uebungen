import React from "react";
import "./imageCard.css";

function ImageCard({ bild, toggleLike }) {
  return (
    <div className="karte">
      <img src={bild.url} alt="Tierbild" className="tierBild" />
      <button className="like-btn" onClick={() => toggleLike(bild.id)}>
        {bild.liked ? "❤️ Gefällt mir" : "🤍 Like"}
      </button>
      {bild.liked && <p>Cooles Bild, oder? 😎</p>}
    </div>
  );
}

export default ImageCard;
