import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./login.css"
const Login = () => {

    let navigate = useNavigate()
    
    let [loginDetails, setLoginDetails] = useState({
        email:"",
        password:"",
    })

    const handleChange = (e) => {
        let {name, value} = e.target
        setLoginDetails({...loginDetails, [name]: value})
        console.log(name, value)
    }
    const handleSubmit = (e) => {
        axios.post("/login",loginDetails)
        .then(res =>{
            console.log(res.data)
            localStorage.setItem("Authorization",res.data.token)
            localStorage.setItem("isAdmin",res.data.isAdmin)
            alert("Loggedin successfully")

            navigate("/dashboard")
        })
        .catch(err =>{alert(err.response.data.message)})


    }
  return (
    <div className='signup-container'>
        <div className='signup-form'>
            <h1>Login</h1>
            <div className = "signup-form-input"> 
            <input onChange={handleChange} required type='text' name='email' value={loginDetails.email}/><label>E-mail</label>
            </div>
            <div className = "signup-form-input"> 
            <input onChange={handleChange} required type='text' name='password' value={loginDetails.password}/><label>Password</label>
            </div>
            
            <Link to="/">Not Registed?</Link>
            
            <button onClick={handleSubmit} >Register</button>
        </div>
    </div>
  )
}

export default Login