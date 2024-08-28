import { useEffect } from "react"
const Landing = ({ id }) => {

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
    </>
   );
}
 
export default Landing;