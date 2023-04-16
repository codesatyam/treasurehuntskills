import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./profile.css";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../../index.js";
 
 
const Profile = () => {
  const { count1,setCount1,count2,setCount2,count3,setCount3,count4,setCount4,count5,setCount5,count6,setCount6, user,stateCom } = useContext(Context);
  // console.log(user);
  // window.alert(user.name);
  function  findacc(x,y)
{
  if(stateCom<y)
  return null;
  return (1-2*x/10)*100;
}
  const accuracy1=findacc(count1,1);
  const accuracy2=findacc(count2,2);
  const accuracy3=findacc(count3,3);
  const accuracy4=findacc(count4,4);
   const accuracy5=findacc(count5,5);
   const accuracy6=findacc(count6,6);
   let scor=0;
   if(stateCom===1)
   scor=50;
   else if(stateCom===2)
   scor=150;
   else if(stateCom===3)
   scor=300;
   else if(stateCom===4)
   scor=500
   else if(stateCom===5)
   scor=750;
   else if(stateCom===6)
    scor=1050
  return (
    <div className="profile d-flex flex-column">
      <div className="upper">
        <div className="avator">
          <div className="pic">
            <FontAwesomeIcon icon={faUser} size="7x" />
          </div>

          <div className="rnk boarder mt-2 text-white">
            <h1 className="text-white">
              <b> Rank:#1</b>{" "}
            </h1>
          </div>
        </div>
        <div className="info">
          <div className="personal d-flex">
            <div className=" boarder nam">
              <h5 className="d-flex justify-content-center">
                Name: {user?.name}
              </h5>
            </div>
            <div className="  boarder email ">
              <h5 className="d-flex justify-content-center">
                Email: {user?.email}
              </h5>
            </div>
          </div>
          <div className="score  d-flex">
            <div className="sco scor boarder">
              <h4 className="scor"><span> Score: {scor} </span> </h4>
            </div>
            <div className="sco boarder">
              <h4>
                {" "}
                <span> CurrentLevel: {stateCom>=6?"Winner": stateCom+1}</span>{" "}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="middle">
        <div className="skills-info mx-3">
          <div className="skill-head text-white">
            <h2 className="d-flex justify-content-center">Soft skills:</h2>
          </div>
          <div className="rang text-white">
            <h4>Note:- </h4>
            <p>All skills are measured out of 10</p>
          </div>
          {/* <div className="note"></div> */}
        </div>
        <div className="skill text-white mx-3">
          <table className="table">
            <thead>
              <tr className="text-white">
                <th className="th">Skill</th>
                <th className="th">Problem-solving</th>
                <th className="th">Curiosity</th>
                <th className="th">Perseverance</th>
                
                <th className="th">Time management</th>
                <th className="th">Leadership</th>
                <th className="th">Patience</th>
              </tr>
              <tr></tr>
              <th className="th">Score</th>
              <td>10</td>
              <td>8</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
            </thead>
          </table>
        </div>
      </div>
      <hr />
      <div className="lower">
        <div className="level">
          <div className="level-head text-white">
            <h2 className="d-flex justify-content-center align-items-center">
              Puzzle levels status
            </h2>
          </div>
          <div className="note text-white">
            <h4>Note:- </h4>
            <p>
              First level has 50 point and each level increased by 50 points
            </p>
          </div>
        </div>
        <div className="level-info text-white mx-3">
          <table>
            <thead>
              <tr>
                <th className="th">Levels</th>
                <th className="th">Level 1</th>
                <th className="th">Level 2 </th>
                <th className="th">Level 3</th>
                <th className="th">Level 4</th>
                <th className="th">Level 5</th>
                <th className="th">Level 6</th>
              </tr>
              <tr className="text-white"></tr>
              <th className="th">Gained point</th>
              <td>{accuracy1/10}</td>
              <td>{accuracy2/10}</td>
              <td>{accuracy3/10}</td>
              <td>{accuracy4/10}</td>
              <td>{accuracy5/10}</td>
              <td>{accuracy6/10}</td>
            </thead>
            <tbody className="text-white">
              <tr>
                <th className="th text-white">Time taken</th>
                <td className="text-white align-items-center"></td>
                <td className="text-white align-items-center"></td>
                <td className="text-white align-items-center"></td>
                <td className="text-white align-items-center"></td>
                <td className="text-white align-items-center"></td>
                <td className="text-white align-items-center"></td>
              </tr>
              <tr>
                <th className="th text-white">Accuracy</th>
                <td className="text-white align-items-center">{accuracy1}</td>
                <td className="text-white align-items-center">{accuracy2}</td>
                <td className="text-white align-items-center">{accuracy3}</td>
                <td className="text-white align-items-center">{accuracy4}</td>
                <td className="text-white align-items-center">{accuracy5}</td>
                <td className="text-white align-items-center">{accuracy6}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="leader mt-2">
          <button class="button">
            <span>
              <NavLink id="link-leader" to="/findtable">
                {" "}
                Check Leaderborad
              </NavLink>
            </span>
          </button>
        </div>
      </div>
      {/* //   <div className="left m-1 d-flex flex-column justify-content-center">
    //     <div className="avator">
    //       <FontAwesomeIcon icon={faUser} size="7x" />
    //     </div>
    //     <div className="name mt-2">
    //       <h5>
    //         <b>Name: </b>{user?.name}
    //       </h5>
    //     </div>
    //     <div className="name mt-2">
    //       <h5>
    //         <b>Email: </b>{user?.email}
    //       </h5>
    //     </div>

    //     <div className="score mt-3">
    //       <h3>Score</h3>
    //       <h4>450</h4>
    //     </div>
    //     <h6 className="mt-3">All skills are measured out of 10</h6>
    //     <div className="skills bg-light mt-3 px-4">
    //       <table border="2"  className="table">
           
    //         <tr border="2" className="mx-2">
    //           <th colspan="2">Skill 1</th>
    //           <th colspan="2">Skill 2</th>
    //           <th colspan="2">Skill 3</th>
    //           <th colspan="2">Skill 4</th>
    //           <th colspan="2">Skill 5</th>
    //         </tr>
    //         <tr>
    //           <td colspan="2">5</td>
    //           <td colspan="2">5</td>
    //           <td colspan="2">5</td>
    //           <td colspan="2">5</td>
    //           <td colspan="2">5</td>
    //         </tr>
    //       </table>
    //     </div>
    //   </div>
    //   <div className="right pt-3">
    //   <div className="player">
    //    <h2 className="d-flex justify-content-center">  Game Status</h2>
    //   </div>
    //     <div className="played px-3">
    //     <table border="4"  className="table">
           
    //        <tr border="2" className="mx-2">
    //          <th colspan="2">Skill 1</th>
    //          <th colspan="2">Skill 2</th>
    //          <th colspan="2">Skill 3</th>
    //          <th colspan="2">Skill 4</th>
    //          <th colspan="2">Skill 5</th>
    //        </tr>
    //        <tr>
    //          <td colspan="2">5</td>
    //          <td colspan="2">5</td>
    //          <td colspan="2">5</td>
    //          <td colspan="2">5</td>
    //          <td colspan="2">5</td>
    //        </tr>
    //      </table>
    //     </div>
    //   </div> */}
    </div>
  );
};

export default Profile;
