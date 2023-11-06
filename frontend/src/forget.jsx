import axios from 'axios'
import React, { useState } from 'react'

function Forget() {

const [userData,setUserData]=useState({email:''})
function handleForget(e){
e.preventDefault()
console.log(userData)
axios.post("http://localhost:8081/auth/forget",userData).then((res)=>{
  if(res.data.Status==="Email sent successfully"){
    alert("Email sent successfully")
  }
  if(res.data.Status==="email does not exist"){
    alert("invalid email")
}
})

}


  return (
<>
<div className="center">
      <div className="formone">
        <h3>Forget</h3>
        <form onSubmit={handleForget}>
         
          <div className="input">
            <label>Email</label>
            <input
              type="email" 
              name="email"
              value={userData.email}
              required
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            />
          </div>
         
          <div className="input">
            <button type="submit">Send</button>
          </div>
        </form>
        
      </div>
    </div>
</>

  )
}

export default Forget