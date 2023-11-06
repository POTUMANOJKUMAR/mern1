import React, { useState ,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import{ imageUrls} from "./assets/image.jsx"
import axios from "axios";
function Login() {
const nav=useNavigate()
axios.defaults.withCredentials=true;
  const [userData, setuserData] = useState([{ email: "", password: "" }]);
  function reveal(){
    nav("/revel")
  }
function google(){
  window.open("http://localhost:8081/auth/google")
 
}

function facebook(){
  window.open("http://localhost:8081/auth/facebook");
}

  function handleclick(e) {
e.preventDefault();
    axios.post("http://localhost:8081/auth/Login",userData).then(res=>{console.log(res)
      if(res.data.Status=== "success"){
    nav("/")
      }
     else if(res.data.Status==="Password not matched"){
        alert("password notmatched")
      }
      else if(res.data.Status=== "Email does not exist" ){
        alert("Email does not exist")
      }
      else{
        alert("Error in login")
      }
      }).catch(err=>console.log(err))
    
       
      };

   function forget(){
    nav("/forget")
   }
  return (
    <div className="center">
      <div className="formtwo" >
        <div>
          <h3>Login</h3>
        </div>
        <div className="input">
          <label>email</label>
          <input
            type="email"
            value={userData.email}
            required
            onChange={(e) =>
              setuserData({ ...userData, email: e.target.value })
            }
          />
        </div>
        <div className="input">
          <label>password</label>
          <input
            type="password"
            value={userData.password}
            required
            onChange={(e) =>
              setuserData({ ...userData, password: e.target.value })
            }
          />
        </div>
        <div className="input"><p className="p" onClick={forget}>Forget Password*</p>
          <button onClick={handleclick} className="log">Login</button>
        </div>
       
        <div className="input1">
        <p>_____________OR______________</p>
        </div>
       
        <div className="input">
        <button class="social"onClick={facebook}><img  height="15" width="15"src={imageUrls.facebook} alt="Image"/>
  <span>Sign in With Facebook</span>
</button>

        </div>
        <div className="input">
        <button class="social" onClick={google}>
  <img src={imageUrls.apple} height="15" width="15"alt="Image"/>
  <span>Sign in with Google</span>
</button>

        </div>
        <div className="input">
        <button class="social" onClick={reveal}>
  <img src={imageUrls.google}  style={{ color: 'black' }} height="15" width="15" alt="Image"/>
  <span>Sign in With AppleId</span>
</button>

        </div>
       <div className="input">
       <p>  Don't have an account yet?</p><Link to="/Register"><button> Sign Up</button></Link> 
          </div>
      </div>
    </div>
  );
}

export default Login;
