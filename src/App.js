import React,{useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Login from './components/Login'
import { auth } from "./firebase";
import { useAuth } from './context/GlobalState';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Payment from './components/Payment';
import Orders from './components/Orders';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


 
const App = () => {
  const {dispatch}=useAuth();
  const stripePromise=loadStripe("pk_test_51NQU0lIgRU7oVdiuajYWmWeRE9M9mcs59YVUnyAHvZNWLHGBPAOztf8DHRie4bfqW9xN7DynLDWs0ETLngdjr0ZW00BeP2UliJ")
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type:"SET_USER",
          user:authUser,
        })

      }else  {dispatch({
        type:"SET_USER",
        user:null,
      })
    }
    })
  },[])
  
  return (
    <div className='app'>
     <Routes>
      <Route path='/' element={<>
        <Header/>
        <Home/>
      </>}/>
      <Route path='/checkout' element={
      <>
      <Header/>
      <Checkout/>

      </>
      }/>
      <Route path="payment" element={
      <>
        <Header/>
        <Elements stripe={stripePromise}>
        <Payment/>
        </Elements>

      </>}/>
      <Route path='/orders' element={
      <>
        <Header/>
        <Orders/>
      </>}/>
      <Route path='*' element={<h1>page not found</h1>}/>
      <Route path="/login" element={<Login/>} />

     </Routes>
    </div> 
  )
  }

export default App