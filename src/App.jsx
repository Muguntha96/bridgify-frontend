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

//components
import Nav from './components/Nav/Nav'
import MemberList from './pages/MemberList/MemberList'


function App() {
  const [newMembers,setNewMembers]=useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    const fetchMembers= async ()=>{
      const newMember=await memberService.index()
      setNewMembers(newMember)
    }
    fetchMembers()
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


  return (
    <>
      <Nav handleScroll={handleScroll} />
      <Routes>
        <Route path='/' element={<Landing id="landing"/>} />
        <Route path='/about' element={<About id="about"/>}/>
        <Route path='/contacts' element={<Contact id="contacts"/>}/>
        <Route path='/events' element={<EventList id="events"/>}/>
        <Route path='/newMember' element={<NewMember id="newMember" />} />
        <Route path='/members' element={<MemberList newMembers={newMembers} />}/>
      </Routes>

          </>
  )
}

export default App
