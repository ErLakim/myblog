import React from 'react'
import { useState } from 'react';
import LogoImg from "../assets/logo.png";
import { Link, useNavigate } from 'react-router-dom';
import Notify from '../assets/components/Alert';
import { generateFPToken } from '../services/users';
const ForgetPassword = () => {
  const[error,setError]=useState("");
  const[email,setEmail]=useState("");
  const[message,setMessage]=useState("");

  const handleSubmit=(e)=>{
    try{
      e.preventDefault();
      const {data}=await generateFPToken({email});
      if(data){
        
      }
    }
    catch(e){
      const error=e?.response?.data?.msg.includes("E11000")?"Email already in use":e?.response?.data?.msg;
      setError(error);
    }finally{
      setTimeout(()=>{
        setError("");
        setMessage("");
      },3000);
    }
  }; 
  
  return (
    <div
    className="container container-fluid d-flex justify-content-center align-items-center l-card-container vh-100"
    style={{ backgroundColor: "antiquewhite" }}
  >
    <div className="card l-card">
      <div
        className="card-title d-flex justify-content-center align-items-center gap-2"
      >
        <img
          height="32px"
          src={LogoImg} alt="JT icon"
        />
        <h1>Forget Password</h1>
      </div>
      <div> {error && <Notify msg={error} />}
        {message && <Notify variant={"success"} msg={message} />}</div>
      <form onSubmit={(e)=>handleSubmit(e)}>
      <div className="d-flex flex-column card-body gap-2">
        <div className="d-flex flex-column gap-1">
          <label>Email</label>
          <input type="email" required className='form-control' onChange={(e)=>
            setEmail(e.target.value)
          } />
        </div>
        <hr />
        <button
          className="btn btn-primary"
          type="submit"
         
        >
         Send an email
        </button>
        <hr />
        <p>
           <Link to="/verify-password">Verify Password</Link>
            </p>
      </div>
      </form>
      
    </div>
  </div>
  )
}

export default ForgetPassword;