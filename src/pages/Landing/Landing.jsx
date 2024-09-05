import MemberList from "../MemberList/MemberList"
import EventList from "../EventList/EventList"
import Contact from "../Contact/Contact"

//assets
import banner from '../../assets/banner/banner.jpeg'
//css
import './Landing.css'
const Landing = (props) => {
  return ( 
    <div className="landing-page">
    <div className="header-bridgify">
      <img src={banner} className="w-full h-auto" alt="banner" />
    </div>
    <p className="summary-bridgify">
      <i>
      Bridgify aims to create a welcoming space where students from diverse cultural backgrounds can connect, <br/>learn from one another, and celebrate the beauty of global diversity.
      </i>
    </p>
    <div>
      <EventList pastEvt={props.pastEvt}/>
    </div>
    <MemberList newMembers={props.newMembers} />
    <div>
    <Contact id="contacts" handleContactUs={props.handleContactUs}/>
    </div>
    </div>
  );
}

export default Landing;