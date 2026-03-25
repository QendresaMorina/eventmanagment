import { useState } from "react";

function Dashboard() {
  const [events, setEvents] = useState([
    { id: 1, name: "Sample Event 1" },
    { id: 2, name: "Sample Event 2" }
  ]);
  const [name, setName] = useState("");

  const addEvent = () => {
    if (!name) return;
    const newEvent = { id: events.length + 1, name };
    setEvents([...events, newEvent]);
    setName("");
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <input
        type="text"
        placeholder="New Event"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={addEvent}>Add Event</button>

      <ul>
        {events.map(e => (
          <li key={e.id}>{e.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;