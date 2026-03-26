import { useState } from "react";

function AddEvent({ onAdd }) {
  const [name, setName] = useState("");

  const handleAdd = () => {
    if (!name) return;       // mos lejoi bosh
    onAdd(name);              // thërret funksionin nga Dashboard
    setName("");              // pastro inputin
  };

  return (
    <div>
      <input
        type="text"
        placeholder="New Event"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleAdd}>Add Event</button>
    </div>
  );
}

export default AddEvent;