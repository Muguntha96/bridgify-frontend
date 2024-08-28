import { useEffect } from "react"


const About = ({id}) => {
  useEffect(()=>{
    const field=document.getElementById(id)
    if(field){
      field.scrollIntoView({behavior:'smooth'})
    }
  },[id])

  return (

    <>
    <h2>
      About Us
    </h2>
    <p>Welcome to Bridgify, a student club dedicated to bringing together individuals from all around the world. Our mission is simple yet powerful: to serve as a bridge that connects students from different cultures, fostering understanding, friendship, and a sense of community.
In today’s increasingly interconnected world, Bridgify provides a platform where cultural diversity is not just acknowledged but celebrated. Whether you're interested in sharing your own cultural experiences, learning about others, or simply finding a place where you belong, Bridgify is here to bring our school community closer together.
Join us in bridging the gaps and building a school community where everyone's heritage and traditions are valued and appreciated. Let’s connect, share, and grow together with Bridgify</p>
    </>
  );
}

export default About;