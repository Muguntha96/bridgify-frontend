const BASE_URL=`${import.meta.env.VITE_BACK_END_SERVER_URL}`

async function index() {
  try {
    const res=await fetch(`${BASE_URL}/api/events`)
    return res.json()
  } catch (error) {
    return error
  }
}

async function createContact(contactFormData) {
  try {
    const res=await fetch(`${BASE_URL}/api/contacts`,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(contactFormData)
    })
    return res.json()
  } catch (error) {
    return error
  }
  
}

export{
  index,
  createContact
}
