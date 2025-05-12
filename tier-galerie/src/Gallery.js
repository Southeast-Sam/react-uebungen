import React from "react";
import ImageCard from "./ImageCard";

function Gallery({ bilder, toggleLike }) {
  return (
    <div className="galerie">
      {bilder.map((bild) => (
        <ImageCard key={bild.id} bild={bild} toggleLike={toggleLike} />
      ))}
    </div>
  );
}

export default Gallery;
