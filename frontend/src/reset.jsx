import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Reset() {
    const nav=useNavigate()
const {id,token}=useParams()
const [userData,setUserData]=useState({password:''})
function handleForget(e){
e.preventDefault()
console.log(userData)
axios.post(`http://localhost:8081/auth/reset-password/${id}/${token}`,userData).then((res)=>{
if(res.data.Status===`successfully`){
    alert("password successfully updated")
    nav("/Login")
}


}).catch(err=>{
    if(err){
    alert("error in password update")}
})

}


  return (
<>
<div className="center">
      <div className="formone">
        <h3>Reset Password</h3>
        <form onSubmit={handleForget}>
         
          <div className="input">
            <label>New password</label>
            <input
              type="password" 
              name="password"
              value={userData.password}
              required
              onChange={(e) => setUserData({ ...userData, password: e.target.value })}
            />
          </div>
         
          <div className="input">
            <button type="submit">Update</button>
          </div>
        </form>
        
      </div>
    </div>
</>

  )
}

export default Reset