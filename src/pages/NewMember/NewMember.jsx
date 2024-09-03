import { useEffect } from "react"
import { useState } from "react"
import { registrationForm } from "./registrationForm.js"
const NewMember = (props) => {
  const [formData,setFormData]=useState(registrationForm)
  const [successMessage, setSuccessMessage]=useState("")
  const [,setSuccessMsgVisible]=useState(false)

  const handleChange = event => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    const register=props.handleAddNewMember(formData)
    if(register){
      setSuccessMessage("Registered Successfully")
      setSuccessMsgVisible(true)
      setFormData(registrationForm)
      setTimeout(()=>{
        setSuccessMsgVisible(false)
        setSuccessMessage("")
      },2000)
    }
    
  }

  useEffect(()=>{
    const field=document.getElementById(props.id)
    if(field){
      field.scrollIntoView({behavior:'smooth'})
    }
  },[props.id])

  return ( 
    <>
    <h4>Registration as a New Member</h4>
    {successMessage && <p>{successMessage}</p>}
    <div>
      <form onSubmit={handleSubmit}>
      <div className="register-form">
      <label htmlFor="first_name">First Name : </label>
        <input
        required
        type="text"
        name="first_name"
        id="first_name"
        value={formData.first_name}
        placeholder="First Name"
        onChange={handleChange}/>
    </div>
    <div className="register-form">
      <label htmlFor="last_name">Last Name : </label>
        <input
        required
        type="text"
        name="last_name"
        id="last_name"
        value={formData.last_name}
        placeholder="Last Name"
        onChange={handleChange}/>
    </div>
    <div className="register-form">
      <label htmlFor="email">Email Address : </label>
        <input
        required
        type="text"
        name="email"
        id="email"
        value={formData.email}
        placeholder="email address"
        onChange={handleChange}/>
    </div>
    <div className="register-form">
      <label htmlFor="phone_number">Phone Number : </label>
        <input
        required
        type="text"
        name="phone_number"
        id="phone_number"
        value={formData.phone_number}
        placeholder="phone number"
        onChange={handleChange}/>
    </div>
    <div className="register-form">
      <label htmlFor="student_id">Student Id: </label>
        <input
        required
        type="text"
        name="student_id"
        id="student_id"
        value={formData.student_id}
        placeholder="student id"
        onChange={handleChange}/>
    </div>
    <div className="register-form">
      <label htmlFor="grade_level">Grade Level : </label>
        <select
          required
          type="text"
          name="grade_level"
          id="grade_level"
          value={formData.grade_level}
          placeholder="grade level"
          onChange={handleChange}>
            {[
                "I",
                "II",
                "III",
                "IV",
                "V",
                "VI",
                "VII",
                "VIII",
                "IX",
                "X",
                "XI",
                "XII",
              ].map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
      </select>
    </div>
    <div className="register-form">
      <label htmlFor="cultural_background">Cultural Background : </label>
        <select
          required
          type="text"
          name="cultural_background"
          id="cultural_background"
          value={formData.cultural_background}
          placeholder="cultural background"
          onChange={handleChange}>
        {[
              'African', 'African American', 'Afro-Caribbean', 'Arab', 'Asian', 'Black', 'Caribbean',
              'Central Asian', 'East Asian', 'Eastern European', 'Hispanic/Latino', 'Indigenous', 'Jewish',
              'Middle Eastern', 'Native American', 'North African', 'Pacific Islander', 'South Asian',
              'Southeast Asian', 'White/European', 'Multiracial', 'Other'
            ].map(background => (
              <option key={background} value={background}>{background}</option>
            ))}
      </select>
    </div>
    <div className="register-form">
      <label htmlFor="volunteer_interest">Volunteering Interest</label>
      <input
            type="checkbox"
            name="volunteer_interest"
            id="volunteer_interest"
            checked={formData.volunteer_interest}
            onChange={handleChange}
          />
    </div>
    <div className="register-form">
      <label htmlFor="role">Role: </label>
        <select
          required
          type="text"
          name="role"
          id="role"
          value={formData.role}
          placeholder="role"
          onChange={handleChange}>
            {["President", "Vice President", "Secretary", "Treasurer", "Volunteer Coordinator", "General Member"].map(role => (
              <option key={role} value={role}>{role}</option>
            ))}
      </select>
    </div>
    <div className="button">
      <button type="submit">Register</button>

    </div>
      </form>
    </div>
    </>
);
}

export default NewMember;