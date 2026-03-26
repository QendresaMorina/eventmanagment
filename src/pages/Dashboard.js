import { useState } from "react";
import EventList from "../components/EventList";
import AddEvent from "../components/AddEvent";

function Dashboard() {
  const [events, setEvents] = useState([
    { id: 1, name: "Sample Event 1" },
    { id: 2, name: "Sample Event 2" }
  ]);

  const addEvent = (name) => {
    const newEvent = { id: events.length + 1, name };
    setEvents([...events, newEvent]);
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <AddEvent onAdd={addEvent} />
      <EventList events={events} />
    </div>
  );
}

export default Dashboard;