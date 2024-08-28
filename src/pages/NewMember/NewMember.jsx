import { useEffect } from "react"
const NewMember = ({id}) => {
  useEffect(()=>{
    const field=document.getElementById(id)
    if(field){
      field.scrollIntoView({behavior:'smooth'})
    }
  },[id])
  return ( 
    <>
    <h4>Registration form for new member</h4>
    </>
);
}

export default NewMember;