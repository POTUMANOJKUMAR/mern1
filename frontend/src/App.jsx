import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './home'
import Register from './register'
import Login from './login'
import Socialhome from './socialhome'
import Forget from './forget'
import Reset from './reset'
import PasswordInput from './revel'
function App() {



  return (
<BrowserRouter>

<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/register" element={<Register/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path="/social" element={<Socialhome/>}></Route>
  <Route path='/forget' element={<Forget/>}/>
  <Route path='/reset-password/:id/:token' element={<Reset/>}/>
  <Route path='/revel' element={<PasswordInput/>}/>
</Routes>



</BrowserRouter>


   
  )
}

export default App