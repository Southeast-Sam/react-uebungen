import { useState, useEffect } from "react";

function App() {
  // Speicher für Nutzer
  const [users, setUsers] = useState([]);

  // Wird beim Start der Seite einmal ausgeführt
  useEffect(() => {
    async function datenHolen() {
      try {
        const res = await fetch("https://randomuser.me/api/?results=5");
        const daten = await res.json();
        console.log("Antwort von der API:", daten.results);
        setUsers(daten.results); // ← Diese Zeile speichert die Daten
      } catch (err) {
        console.error("Fehler beim Laden:", err);
      }
    }

    datenHolen();
  }, []);

  return (
    <div>
      <h1>API Übung – Zufallsnutzer</h1>
      {users.map((person, index) => (
        <div key={index}>
          <p>
            {person.name.first} {person.name.last}
          </p>
          <p>{person.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
