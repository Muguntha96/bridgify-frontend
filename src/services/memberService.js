const BASE_URL=`${import.meta.env.VITE_BACK_END_SERVER_URL}/api/members`

async function index() {
  try {
    const res=await fetch(BASE_URL)
    return res.json()
  } catch (error) {
    return error
  }
  
}

async function create(newMemberFormData) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newMemberFormData)
    });
    
    if (!res.ok) {
      // Log detailed information
      const errorText = await res.text();
      console.error(`Error: ${res.status} - ${res.statusText}`, errorText);
      throw new Error('Failed to create new member');
    }

    return res.json();
  } catch (error) {
    console.error('Network error:', error.message); // Enhanced error logging
    return { error: 'Error creating new member' };
  }
}


export {
  index,
  create
}