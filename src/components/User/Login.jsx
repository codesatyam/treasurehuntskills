import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, Navigate } from "react-router-dom";
import { Context, server } from "../../index.js";
import "./login.css";

const Login = () => {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading, setUser } =
    useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    // console(email,password);

    try {
      const { data } = await axios.post(
        `${server}/users/login`,
        {
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
      // console.log(data.id);
      // window.alert(data.udata.name);
      setUser(data.udata);
      setIsAuthenticated(true);
      setLoading(false);
    } catch (error) {
      // console.log(error);
      toast.error(error.response.data.message);
      setLoading(false);
      setIsAuthenticated(false);
    }
  };

  if (isAuthenticated) return <Navigate to={"/"} />;

  return (
    <div className="formm">
      <section className="container">
        <h1 className="log">Login</h1>
        <h4 className="d-flex justify-content-center align-items-center">
          Play and know your Skills
        </h4>
        <form onSubmit={submitHandler}>
          <input
            className="input"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input"
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button disabled={loading} type="submit">
            Login
          </button>
          <h4>Or</h4>
          <Link className="links" to="/signup">
            Sign Up
          </Link>
        </form>
      </section>
    </div>
  );
};

export default Login;
