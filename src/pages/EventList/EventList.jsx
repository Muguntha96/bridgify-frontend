import { useEffect } from "react"
const EventList = ({id}) => {
  useEffect(()=>{
    const field=document.getElementById(id)
    if(field){
      field.scrollIntoView({behavior:'smooth'})
    }
  },[id])
  return ( 
    <>
    <h4>List of Events</h4>
    </>
   );
}
 
export default EventList;