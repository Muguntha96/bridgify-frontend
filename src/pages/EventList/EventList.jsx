const EventList = (props) => {

  return ( 
    <>
    <h4>List of Events</h4>
    {!props.events.length && <h2>No events here</h2>}
    <ul>
      {props.events.map((event)=>(
        <li key={event._id}>
          <h4>Title:{event.title}</h4>
          <h5>Description:{event.description}</h5>
          <h5>Date:{event.date}</h5>
          <h5>Venue:{event.location}</h5>
          <button>Attend</button>       
        </li>
      ))}
    </ul>
    </>
)
}

export default EventList;