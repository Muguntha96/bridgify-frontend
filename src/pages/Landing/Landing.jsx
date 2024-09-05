import MemberList from "../MemberList/MemberList"
import EventList from "../EventList/EventList"
import Contact from "../Contact/Contact"
const Landing = (props) => {
  return ( 
    <>
    <h1>Bridgify</h1>
    <p>Bridgify aims to create a welcoming space where students from diverse cultural backgrounds can connect, learn from one another, and celebrate the beauty of global diversity.</p>
    <div>
      <EventList pastEvt={props.pastEvt}/>
    </div>
    <MemberList newMembers={props.newMembers} />
    <div>
    <Contact id="contacts" handleContactUs={props.handleContactUs}/>
    </div>
      </>
  );
}

export default Landing;