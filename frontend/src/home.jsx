import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {

const [auth,setauth]=useState(false)
const [message,setmessage]=useState('')
const [name,setname]=useState('')



useEffect(() => {
  axios.get("http://localhost:8081/auth").then((res) => {
    if (res.data.Statas === "success") {
      setauth(true);
      setname(res.data.name); 
    } else {
      setauth(false);
      setmessage(res.data.Error);
    }
  }).catch((err) => console.log(err));
}, []);




const handleDelect=()=>{
  axios.get("http://localhost:8081/auth/logout").then(res=>{
  
setauth(false)
  }).catch((err)=>console.log(err));
}


  return (

<div>
    {
        auth ?
        <div>
            <h2>You are Authorized {name}</h2>
            <button className='logout' onClick={handleDelect}>Logout</button>
            </div>
            :
            <div>
                <h3>{message}</h3>
               
                <Link to="/Login"><button className='login'>Login</button></Link>
            </div>
    }
</div>

  )}

  export default Home