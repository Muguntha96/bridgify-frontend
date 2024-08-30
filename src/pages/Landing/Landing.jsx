import { useEffect } from "react"
import MemberList from "../MemberList/MemberList"
const Landing = ({ id,newMembers }) => {

  useEffect(()=>{
    const field=document.getElementById(id)
    if(field){
      field.scrollIntoView({behavior:'smooth'})
    }
  },[id])
  return ( 
    <>
    <h1>Bridgify</h1>
    <p>Bridgify aims to create a welcoming space where students from diverse cultural backgrounds can connect, learn from one another, and celebrate the beauty of global diversity.</p>
    <MemberList newMembers={newMembers} />
    </>
  );
}

export default Landing;