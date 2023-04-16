import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Context } from "../..";
import pic from "../../images/lose.png";
import "./level.css";
const Lose = () => {
    
//   const {setstateCom,stateCom } =useContext(Context);
//   const { count1,setCount1,count2,setCount2,count3,setCount3,count4,setCount4,count5,setCount5,count6,setCount6, user } = useContext(Context);
//   const handleclick=async ()=>{
//     setstateCom(0);
//    setCount1(0);
//    setCount2(0);
//    setCount3(0);
//    setCount4(0);
//    setCount5(0);
//    setCount6(0);
//   }
  return (
    <div className="lose-head">
      <div className="lose">
        <div className="lose-h">
          <img src={pic} alt="" />
        </div>
        <div className="lose-back d-flex justify-content-center">
        <Link to='/game'  className="link_404">Start Again</Link>
        </div>
      </div>
    </div>
  );
};

export default Lose;
