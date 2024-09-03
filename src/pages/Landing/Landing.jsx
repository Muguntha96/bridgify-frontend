import { useEffect } from "react"
import MemberList from "../MemberList/MemberList"
import EventList from "../EventList/EventList"
const Landing = (props) => {

  useEffect(()=>{
    const field=document.getElementById(props.id)
    if(field){
      field.scrollIntoView({behavior:'smooth'})
    }
  },[props.id])
  return ( 
    <>
    <h1>Bridgify</h1>
    <p>Bridgify aims to create a welcoming space where students from diverse cultural backgrounds can connect, learn from one another, and celebrate the beauty of global diversity.</p>
    <div>
      <EventList pastEvt={props.pastEvt}/>
    </div>
    <MemberList newMembers={props.newMembers} />
    </>
  );
}

export default Landing;