const EventList = (props) => {

  return ( 
    <>
    <div>
      {props.futureEvt && (
        <>
          <h2>Upcoming Events</h2>
          {props.futureEvt.length > 0 ? (
            props.futureEvt.map(event => (
              <div key={event._id}>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <p>{new Date(event.date).toLocaleDateString()}</p>
              </div>
            ))
          ) : (
            <p>No upcoming events</p>
          )}
        </>
      )}

      {props.pastEvt && (
        <>
            {props.pastEvt.length > 0 ? (
            props.pastEvt.map(event => (
              <div key={event._id}>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <p>{new Date(event.date).toLocaleDateString()}</p>
              </div>
            ))
          ) : (
            ""
          )}
        </>
      )}
    </div>
    </>
)
}

export default EventList;