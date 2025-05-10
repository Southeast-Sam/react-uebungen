function Profil(props) {
  return (
    <div>
      <h2>👤 Name: {props.name}</h2>
      <p>💬 Lieblingssprache: {props.sprache}</p>
    </div>
  );
}

export default Profil;
