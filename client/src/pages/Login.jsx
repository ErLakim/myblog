import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogoImg from "../assets/logo.png";
import Notify from '../assets/components/Alert';
import { login } from '../services/users';
import { setToken , getToken} from '../utils/token';

const Login = () => {
  const navigate = useNavigate();
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login(payload);
      if (data?.data) {
        setToken(data.data);
        navigate("/");
      }
    } catch (err) {
      setError(err.message || "An error occurred"); // Ensure the error message is set correctly
    } finally {
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  useEffect(()=>{
    const token = getToken();
    if(token) {
      alert("You are already logged in");
      navigate("/");}
  },[navigate]);

  return (
    <div
      className="container container-fluid d-flex justify-content-center align-items-center l-card-container vh-100 bg-red"
      style={{ backgroundColor: "antiquewhite" }}
    >
      <div className="card l-card">
        <div className="card-title d-flex justify-content-center align-items-center gap-2">
          <img height="40px" src={LogoImg} alt="JT icon" />
          <h1>Login</h1>
        </div>

        {error && <Notify msg={error} />}

        <div className="d-flex flex-column card-body gap-1">
          <p className="text-center">
            Login to the system by entering your email and password below.
          </p>

          <form onSubmit={handleLogin}>
            <div className="d-flex flex-column gap-1">
              <label className='form-label'>Email Address</label>
              <input
                type="email"
                className='form-control'
                required
                onChange={(e) => setPayload((prev) => ({ ...prev, email: e.target.value }))}
              />
            </div>
            <div className="d-flex flex-column gap-1">
              <label className='form-label'>Password</label>
              <input
                type="password"
                className='form-control'
                required
                onChange={(e) => setPayload((prev) => ({ ...prev, password: e.target.value }))}
              />
            </div>

            <Link to="/forget-password" className="d-flex flex-row-reverse">Forgot Password?</Link>
            <hr />
            <button className="btn btn-primary" type="submit">Submit</button>
            <hr />
            <p> Don't have an account? <Link to="/register" className="text-decoration-none">Sign Up</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
