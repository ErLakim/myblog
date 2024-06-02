import React, { useState } from 'react'
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Notify from '../assets/components/Alert';
import LogoImg from "../assets/logo.png";
import { register } from '../services/users';

const Register = () => {
  const navigate=useNavigate();
  const [error,setError]= useState("");
  const[message,setMessage]=useState("");
  const registerForm=useRef();

  const handleSubmit =async(e)=>{
    try{
      e.preventDefault();
      const form=registerForm.current;
      const formData= new FormData(form);
      const {data}= await register(formData)
      if(data){
        setMessage(data?.data?.message);
        setTimeout(()=>{
          navigate("/login");
        },3000);
      }
    }catch(e){
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
        <div className="card-title d-flex justify-content-center align-items-center gap-2">
          <img height="32px" src={LogoImg} alt="JT icon" />
          <h1>Register</h1>
        </div>
        <div> {error && <Notify msg={error} />}
        {message && <Notify variant={"success"} msg={message} />}</div>
        <form ref={registerForm} onSubmit={(e) => handleSubmit(e)}>
          <div className="d-flex flex-column card-body gap-2">
            <div className="d-flex flex-column gap-1">
              <label className="form-label">Name</label>
              <input
                type="text"
                required
                className="form-control"
                name="name"
              />
            </div>
            <div className="d-flex flex-column gap-1">
              <label className="form-label">Email</label>
              <input
                type="email"
                required
                className="form-control"
                name="email"
              />
            </div>
            <div className="d-flex flex-column gap-1">
              <label className="form-label">Password</label>
              <input
                type="password"
                required
                className="form-control"
                name="password"
              />
            </div>
            <div className="d-flex flex-column gap-1">
              <label className="form-label">Upload your picture</label>
              <input type="file" className="form-control" name="pictureUrl" />
            </div>

            <hr />
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
            <hr />
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register