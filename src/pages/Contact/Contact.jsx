import { useEffect } from "react"
const Contact = ({id}) => {

  useEffect(()=>{
    const field=document.getElementById(id)
    if(field){
      field.scrollIntoView({behavior:'smooth'})
    }
  },[id])
  return ( 
    <>
    <h3>Conact US</h3></>
   );
}
 
export default Contact;