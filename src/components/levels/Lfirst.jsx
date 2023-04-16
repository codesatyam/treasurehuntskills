import React, { useContext, useState } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import "./level.css";
import { Context } from "../..";
import { toast } from "react-hot-toast";
import axios from "axios";
const Lfirst = () => {
  const navigate = useNavigate();

  const { isAuthenticated, setIsAuthenticated, loading, setLoading, user,stateCom,setstateCom } =useContext(Context);
  const { count1,setCount1,count2,setCount2,count3,setCount3,count4,setCount4,count5,setCount5,count6,setCount6 } = useContext(Context);
  // if (user.games.level1.attempt) {
  //   navigate("/lsecond");
  // }
  const [ans, setAns] = useState({ answer: "" });
   
  const handleChange = (e) => {
    let { name, value } = e.target;
    setAns({ ...ans, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const res = await axios.post(`/api/v1/users/answer/${user._id}`, {
    //   answer: ans.answer,
    // });
    if (ans.answer === user.games.level1.answer) {
      // window.alert("success");
      toast.success("Congratulation, Your answer is correct and we procced to next level");
      // toast.success("congo::correct");
      setstateCom(1);
      navigate("/lsecond")
    } else {
      setCount1(count1 + 1);
      toast.success(`Incorrect answer,left attempt ${5-count1}`);
      if(count1>=5)
      {
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
    document.getElementById("clue").innerHTML =user.games.level1.question;
  }
  return (
    <div className="game-level">
      <div className="l-h">
        <div className="head-l">
        <h1 className="d-flex justify-content-center mt-3">
            Level 1
          </h1>
          <h1 className="d-flex justify-content-center mt-3">
            {user.games.level1.level1}
          </h1>
        </div>
      </div>
      <div className="clue">
        <div className="box-clue">
          <h1 id="clue" onMouseMove={Handlemove}>Clue</h1>
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
          <NavLink to="/lsecond">
            <h3> Next Level</h3>
          </NavLink>
        </div>
      </div> */}
    </div>
  );
};

export default Lfirst;
