import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../images/login-logo.png";
import "./Login.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from '../context/GlobalState';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";



const Login = () => {
    const {user}=useAuth();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate=useNavigate();

const signIn = (e) =>{
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password).then((auth)=>{
        if(auth){navigate("/")}
    })
}

const register = (e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password).then((auth)=> 
    {
        if(auth){navigate("/")}
    }
).catch((error)=>{
    alert(error.message)
})
}
console.log(user);

  return (
    <div className='login'>
          <Link to="/">
            <img className='header-logo' src={Logo} alt='logo'/>

        </Link>
        <div className='login-container'>
            <h1>Sign in</h1>
            <form action="">
            <h5>E-mail</h5>
            <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
            <h5>password</h5>
            <input type="password"  value={password} onChange={(e)=> setPassword(e.target.value)} required/>
        
            <button className='btn-login' onClick={signIn}>
            Sign in
            </button>
            <p>By continuing, you agree to Amazon's Fake Clone Conditions of 
            Use and Privacy Notice.</p>
            <button className='btn-sign' onClick={register}>Create your Amazon Account</button>
            </form>
        </div>
        
    </div>
  )
}

export default Login