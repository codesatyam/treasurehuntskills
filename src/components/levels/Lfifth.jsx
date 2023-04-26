import React, { useContext, useState } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import "./level.css";
import { Context } from "../..";
import { toast } from "react-hot-toast";
import axios from "axios";

const Lfifth = () => {
  const navigate = useNavigate();

  const {    loading, setLoading, user, setstateCom,stateCom} =useContext(Context);
    const { count1,setCount1,count2,setCount2,count3,setCount3,count4,setCount4,count5,setCount5,count6,setCount6 } = useContext(Context);
  // if (user.games.level1.attempt) {
  //   navigate("/lsecond");
  // }
  const [ans, setAns] = useState({ answer: "" });
  // const [count, setCount] = useState(0);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setAns({ ...ans, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const res = await axios.post(`/api/v1/users/answer/${user._id}`, {
    //   answer: ans.answer,
    // });
    if (ans.answer === user.games.level5.answer) {
      // window.alert("success");
      toast.success("Congratulation, Your answer is correct and we procced to next level");
      setstateCom(5);
      navigate("/lsix")
    } else {
      setCount5(count5 + 1);
      toast.success(`Incorrect answer,left attempt ${5-count5}`);
      if(count5>=5){
        setstateCom(0);
        setCount1(0);
        setCount2(0);
        setCount3(0);
        setCount4(0);
        setCount5(0);
        setCount6(0);
      navigate("/lose");
      }
      // window.alert("incorrect answer: attempt left", 5 - count);
      
    }
  };
  const Handlemove=()=>{
    document.getElementById("clue").innerHTML =user.games.level5.question;
  }
  const Handleout=()=>{
    document.getElementById("clue").innerHTML ="Clue";
  }
  return (
    <div className="game-level">
    <div className="l-h">
      <div className="head-l">
      <h1 className="d-flex justify-content-center mt-3">
          Level 5
        </h1>
        <h6 className="d-flex justify-content-center mt-3">
          {user.games.level1.level1}
        </h6>
      </div>
    </div>
    <div className="clue">
      <div className="box-clue" id="clue" onMouseMove={Handlemove} onMouseOut={Handleout}>
        <h1   >Clue</h1>
      </div>
    </div>
    <div className="answer">
      <div id="ans">
        <form action="">
          <input
            type="text"
            className="inpt"
            placeholder="Clue answer"
            name="answer"
            onChange={handleChange}
          />
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
    {/* <div className="nextl d-flex justify-content-center align-items-center">
      <div className="next-link ">
        <NavLink to="/lsix">
          <h3> Next Level</h3>
        </NavLink>
      </div>
    </div> */}
  </div>
);
}

export default Lfifth