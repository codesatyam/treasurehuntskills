import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/header/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/layout/Home";
import Login from "./components/User/Login";
import Game from "./components/Puzzle/Game";
import "./index.css";
import Signup from "./components/User/Signup";
import Profile from "./components/User/profile/Profile";
import Admin from "./components/Admin/AdminDash";
import Lfirst from "./components/levels/Lfirst";
import Lsecond from "./components/levels/Lsecond";
import Lthird from "./components/levels/Lthird";
import Lfourth from "./components/levels/Lforth";
import Lfifth from "./components/levels/Lfifth";
import Winner from "./components/levels/Winner";
import Lose from "./components/levels/Lose";
import Error from "./components/Error/Error";
import FinalTable from "./components/Admin/FinalTable";
// import Lsix from   './components/levels/Lsix';
import Lsix from "./components/levels/Llast";
import { Toaster } from "react-hot-toast";
import { useContext, useEffect } from "react";
import axios from "axios";
import { Context, server } from "./index";

function App() {
  const { setUser, setIsAuthenticated, setLoading } = useContext(Context);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${server}/users/profile`, {
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res);
        setUser(res.data.user);
        setIsAuthenticated(true);
        setLoading(false);
      })
      .catch((error) => {
        setUser({});
        setIsAuthenticated(false);
        setLoading(false);
      });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/game" element={<Game />} />
        <Route exact path="/adminprofile" element={<Admin />} />
        <Route exact path="/lfirst" element={<Lfirst />} />
        <Route exact path="/lsecond" element={<Lsecond />} />
        <Route exact path="/lthird" element={<Lthird />} />
        <Route exact path="/lforth" element={<Lfourth />} />
        <Route exact path="/lfifth" element={<Lfifth />} />
        <Route exact path="/lsix" element={<Lsix />} />
        <Route exact path="/winner" element={<Winner />} />
        <Route exact path="/lose" element={<Lose />} />
        <Route exact path="/findtable" element={<FinalTable />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
