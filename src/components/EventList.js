function EventList({ events }) {
  return (
    <ul>
      {events?.map(e => (
        <li key={e.id}>{e.name}</li>
      ))}
    </ul>
  );
}

export default EventList;