// npm modules
import { Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'

//CSS
import './App.css'

//Pages
import Landing from './pages/Landing/Landing'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import EventList from './pages/EventList/EventList'
import NewMember from './pages/NewMember/NewMember'

//Services
import * as memberService from './services/memberService'
import * as eventService from './services/eventService'
//components
import Nav from './components/Nav/Nav'


function App() {
  const [newMembers,setNewMembers]=useState([])
  const [events,setEvents]=useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    const fetchMembers= async ()=>{
      const newMember=await memberService.index()
      setNewMembers(newMember)
    }
    const fetchEvents=async ()=>{
      const newEvent=await eventService.index()
      setEvents(newEvent)
    }
    fetchMembers()
    fetchEvents()
  },[])
  const handleScroll = (fieldId,path) =>{
    navigate(path)
    setTimeout(()=>{
    const field=document.getElementById(fieldId)
    if(field){
      field.scrollIntoView({behavior:'smooth'})
    }
  },100)

  }
const handleAddNewMember = async(newMemberFormData)=>{
  const newMem=await memberService.create(newMemberFormData)
  if (!newMem || newMem.error) {
    console.log('Error adding new member:', newMem ? newMem.error : 'Unknown error')
    return
  }
  setNewMembers([newMem,...newMembers])
  return newMem
}

const handleAddNewEvent = async(newEventFormData)=>{
  const evt=await eventService.create(newEventFormData)
  setEvents([evt,...events])
  return evt
}

  return (
    <>
      <Nav handleScroll={handleScroll} />
      <Routes>
        <Route path='/' element={<Landing id="landing" newMembers={newMembers}/>} />
        <Route path='/about' element={<About id="about"/>}/>
        <Route path='/contacts' element={<Contact id="contacts"/>}/>
        <Route path='/events' element={<EventList id="events" events={events}/>}/>
        <Route path='/members' element={<NewMember id="newMember" handleAddNewMember={handleAddNewMember}/>} />
    
      </Routes>

          </>
  )
}

export default App
