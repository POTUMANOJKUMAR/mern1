import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const nav = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [show ,setshow]=useState(false)
  function togglePasswordVisiblity(){
    setshow( show? false:true)
  }

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8081/auth/register", userData);
      console.log(userData)

      if (response.data.Status === "Email is already existed plz login") {
        alert("Email is already existed plz login")
        
        nav("/Login");
      }
      else if(response.data.Status==="success") {
        alert("user successfully registered")
        nav("/Login")
      }
        else {
       
        alert("Error in registration");
      }
    } catch (error) {
      console.error(error);
     
      alert("Error during registration");
    }
  };

  return (
    <div className="center">
      <div className="formone">
        <h3>Register</h3>
        <form onSubmit={handleRegister}>
          <div className="input">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={userData.name}
              required
              onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            />
          </div>
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
            <label>Password</label>
            <div className="icon">
             <input
              type={show ? "type":"password"}
              name="password"
              value={userData.password}
              required
              onChange={(e) => setUserData({ ...userData, password: e.target.value })}
            /> <i onClick={togglePasswordVisiblity} >
            {show ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
          </i></div>

          </div>
          <div className="input">
            <button type="submit">Submit</button>
          </div>
        </form>
        <div className="input">
          <p>Already have an account? Click on</p>
          <Link to="/Login"><button>Login</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
