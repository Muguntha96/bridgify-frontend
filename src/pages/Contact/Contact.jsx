import { useState } from "react";

const Contact = (props) => {
  const [cntFormData,setCntFormData]=useState(
    {
      name:'',
      email:'',
      message:''
    }
  )
  const [sendSuccessMsg,setSendSuccessMsg]=useState("")
  const [,setVisibility]=useState(false)

  const handleChangeMsg = (event) => {
    const { name, value } = event.target
    setCntFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  
  const handleSubmitMsg = async (event) => {
    event.preventDefault()
    const send=await props.handleContactUs(cntFormData)
    if(send){
      setSendSuccessMsg("Message Sent")
      setVisibility(true)
      setCntFormData(
        {
          name:'',
          email:'',
          message:''
        }
      )
      setTimeout(()=>{
        setVisibility(false)
        setSendSuccessMsg("")
      },2000)

    }
  }

  return ( 
    <>
    <h3>Conact US</h3>
    {sendSuccessMsg && <p>{sendSuccessMsg}</p>}
    <div>
      <form onSubmit={handleSubmitMsg}>
        <div className="contact-form">
          <label htmlFor="name">Name : </label>
          <input
            required
            type="text"
            name="name"
            id="name"
            value={cntFormData.name}
            onChange={handleChangeMsg}
          />
        </div>
        <div className="contact-form">
        <label htmlFor="email">email : </label>
          <input
            required
            type="text"
            name="email"
            id="email"
            value={cntFormData.email}
            onChange={handleChangeMsg}
          />
        </div>
        <div className="contact-form">
        <label htmlFor="message">Message : </label>
          <input
            required
            type="text"
            name="message"
            id="message"
            value={cntFormData.message}
            onChange={handleChangeMsg}
          />
        </div>
        <div>
      <button type="submit">Send Message</button>
    </div>
      </form>

    </div>
    </>
  )
}

export default Contact;