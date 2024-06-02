import React from 'react'
import { Link } from 'react-router-dom'
import LogoImg from "../assets/logo.png";
const VerifyPassword = () => {
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
      <div className="d-flex flex-column card-body gap-2">
        <div className="d-flex flex-column gap-1">
          <label>Email</label>
          <input type="email" disabled required className='form-control'/>
        </div>
        <div className="d-flex flex-column gap-1">
          <label>Token</label>
          <input  required className='form-control' maxLength={6}/>
        </div>
        <div className="d-flex flex-column gap-1">
          <label>New Password</label>
          <input  required />
        </div>
        <hr />
        <button className="btn btn-primary" type="submit">Reset Password</button>
        <hr />
        <p>
             <Link to="/login">Login</Link>
         </p>
      </div>
    </div>
  </div>  )
}

export default VerifyPassword;