import React from 'react'
import{useState,useEffect,useCallback} from "react";
import {Link, useNavigate} from "react-router-dom";
import LogoImg from "../assets/logo.png"
import Notify from '../assets/components/Alert';

import { login } from '../services/users';
import { setToken } from '../utils/token';

const Login = () => {
  const navigate= useNavigate();
  const[payload,setPayload]=useState({
    email:"",
    password:"",
  });

const[error,setError]=useState("");

const handleLogin=async(e)=>{
 try{
  e.preventDefault();
 const{data}= await login(payload);
 if(data?.data){
  setToken(data.data);
  navigate("/");
  }
 }catch(e){
  setError(e);
 }finally{
  setTimeout(()=>{setError("");
  },3000)
 }
};
 
return (
  <div
      className="container container-fluid d-flex justify-content-center align-items-center l-card-container vh-100 bg-red "
      style={{backgroundColor:"antiquewhite"}}
    >
      <div className="card l-card">
        <div
          className="card-title d-flex justify-content-center align-items-center gap-2"
        >
          <img
            height="40px"
            src={LogoImg}
            alt="JT icon"
          />
          <h1>Login</h1>
        </div>
        <div className="d-flex flex-column card-body gap-1 ">
          <p className="text-center">
            Login to the system by entering your email and password
            below.
          </p>
          {error&& <Notify msg={error} />}

          <form onSubmit={(e)=>handleLogin(e)}>
          <div className="d-flex flex-column gap-1">
            <label className='form-label'>Email Address</label>
            <input type="email" className='form-control' required onChange={(e)=>{setPayload((prev)=>{return{...prev,email: e.target.value};
          })}}/>
          </div>
          <div className="d-flex flex-column gap-1">
            <label className='form-label'>Password</label>
            <input type="password" className='form-control' required onChange={(e)=>{setPayload((prev)=>{return{...prev,password: e.target.value};
          })}}/>
          </div>
         
         
          <Link to="/forget-password" className="d-flex flex-row-reverse"
            >Forgot Password? </Link>
          <hr />
          <button className="btn btn-primary" type="submit">Submit</button>
          <hr />
          <p> Don't have an account? <Link to="/register" className="text-decoration-none " >Sign Up</Link></p>
          </form>
        
           </div>
      </div>
    </div>
)
}
    
  

  


export default Login