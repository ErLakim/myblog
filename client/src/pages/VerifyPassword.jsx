import React from 'react'
import { useEffect,useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import LogoImg from "../assets/logo.png";
import { verifyFPToken } from '../services/users';
import Notify from '../assets/components/Alert';
const VerifyPassword = () => {
const navigate=useNavigate();
const location= useLocation();


const[payload, setPayload]= useState({
email: location?.state?.email,
token:"",
newPassword:"",
});

const[error,setError]=useState("");
const[message,setMessage]=useState("");

const handleSubmit=async(e)=>{
  try{
    e.preventDefault();
    const {data}=await verifyFPToken(payload);
    if(data){
      setMessage(data?.data);
      setTimeout(()=>{
        navigate("/login");
      },3000);
    }
  } catch(e){
    const error=e?.response?.data?.msg.includes("E11000")?"Email already in use":e?.response?.data?.msg;
    setError(error);
  }
    finally{
      setTimeout(()=>{
        setError("");
        setMessage("");
        setPayload({
          email: location?.state?.email,
          token:"",
          newPassword:"",
          })
      },3000);
    } 
    };
  


useEffect(()=>{
  const {state}=location;
  if(!state){
    navigate("/login");
  }
},[location, navigate]);

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
        <h1>Verify Password</h1>
      </div>
      <div> {error && <Notify msg={error} />}
      {message && <Notify variant={"success"} msg={message} />}</div>
      <form className='mb-3' onSubmit={(e)=> handleSubmit(e)}>
      <div className="d-flex flex-column card-body gap-2">
        <div className="d-flex flex-column gap-1">
          <label>Email</label>
          <input type="email" disabled required className='form-control'
          value={payload?.email}/>
        </div>
        <div className="d-flex flex-column gap-1">
          <label>Token</label>
          <input  required className='form-control' maxLength={6} onChange={(e)=>setPayload((prev)=>{
            return{
              ...prev, token: e.target.value,
            };
          })}/>
        </div>
        <div className="d-flex flex-column gap-1">
          <label className='form-label'>New Password</label>
          <input className='form-control' required onChange={(e)=>setPayload((prev)=>{
            return{
              ...prev, newPassword: e.target.value,
            };
          })}/>
        </div>
        <hr />
        <button className="btn btn-primary" type="submit">Reset Password</button>
        <hr />
        <p>
             <Link to="/login">Login</Link>
         </p>
      </div>
      </form>
     
    </div>
  </div> 
  
  )
}
export default VerifyPassword;