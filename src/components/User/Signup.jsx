import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios"; 
import toast from "react-hot-toast";
import "./signup.css";
import { Context, server } from "../../index";
// import {Context,server} from '..../index.js';
// import { Context, server } from "..../index.js";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Cpassword, setCPassword] = useState("");
  const { isAuthenticated, setIsAuthenticated, loading, setLoading,setlogU,logU } =
    useContext(Context);

  const submitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      console.log(e);
      const { data } = await axios.post(
        `${server}/users/signup`,
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      toast.success(data.message);
      setLoading(false);
      setlogU(true);
      // setIsAuthenticated(true);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(false);
      setLoading(false);
    }
     
  };

  if(logU || isAuthenticated)  return <Navigate to={"/login"} />;

  return (
    <div className="log-Head"> 
      <section className="login">
      <h1 className="d-flex justify-content-center">Signup</h1>
      <h4 className="d-flex justify-content-center align-items-center">Let's create account and play</h4>
        <form onSubmit={submitHandler}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            required
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
           <input
            type="password"
            required
            placeholder="Confirm Password"
            value={Cpassword}
            onChange={(e) => setCPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
          <b>Or</b>
          <Link className="links" to="/login">Log In</Link>
        </form>
      </section>
 
    </div>
  );
};

 
 export default Signup;