import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import "./game.css";
import { Button } from "@mui/material";
import { Context } from "../..";
import Lsecond from "../levels/Lsecond";
const Game = () => {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading, user,stateCom } =
    useContext(Context);
  // if (!isAuthenticated) return <Navigate to={"/login"} />;
  let golevel="/lfirst";
//   if(stateCom===1)
//     golevel="/lsecond";
//     else if(stateCom===2)
//     golevel="/lthird";
//     else if(stateCom===3)
//     golevel="/lforth";
//     else if(stateCom===4)
//     golevel="/lfifth"
//     else
//     golevel="/lfirst";

  return (
    <div className="game">
      <div className="game-up">
        <div className="g-head">
          <h2>Skill test Puzzle(Treasere hunt)</h2>
        </div>
        <div className="theme">
          <h3>Theme: "Pirate's Treasure Hunt"</h3>
        </div>
      </div>
      <div className="intro">
        <div className="intro-h">
          <h2>Introduction:</h2>
          <h6>
            Welcome to "The Lost City" treasure hunt ! You are a treasure hunter
            on a mission to find a lost city that is said to contain
            unimaginable riches and wealthy. Your journey will begin with the
            first clue below. Good luck!
          </h6>
        </div>
        <div className="le d-flex flex-column justify-content-center">
          <h2>Rules:-</h2>
          <h6>1.You have to complete each level to win th game</h6>
          <h6>
            2.Try to decode th clue in best accuracy as it will effect your
            score
          </h6>
          <h6>3.Each level has score as 50, 100, 150, 200, 250, 300</h6>
        </div>
      </div>
     
      <div className="levels text-white">
        <div className="l1 box  d-flex justify-content-center align-items-center">
          <h4>Level 1</h4>
        </div>
        <div className="lin">
          <div className="line"></div>
        </div>
        <div className="l2 box d-flex justify-content-center align-items-center">
          <h4>Level 2</h4>
        </div>
        <div className="lin">
          <div className="line"></div>
        </div>
        <div className="l3 box  d-flex justify-content-center align-items-center">
          <h4>Level 3</h4>
        </div>
        <div className="lin">
          <div className="line"></div>
        </div>
        <div className="l4 box  d-flex justify-content-center align-items-center">
          <h4>Level 4</h4>
        </div>
        <div className="lin">
          <div className="line"></div>
        </div>
        <div className="l5 box  d-flex justify-content-center align-items-center">
          <h4>Level 5</h4>
        </div>
        <div className="lin">
          <div className="line"></div>
        </div>
        <div className="l6 box  d-flex justify-content-center align-items-center">
          <div>
            <h4 className="d-flex justify-content-center align-items-center">
              Level 6
            </h4>
            <h2>Winner</h2>
          </div>
        </div>
      </div>
      <div className="start d-flex align-items-center justify-content-center mt-4">
        {/* {user.games.level1.attempt ? (
          <Button>Completed</Button>
        ) : ( */}
          <Link exact to={golevel}>
            <button class="btnh third d-flex justify-content-center align-items-center">
              <h1 className="d-flex text-white justify-content-center align-items-center">
               {stateCom>0 ? "Resume Game": "Start"}
              </h1>
            </button>
          </Link>
        {/* )} */}
      </div>
    </div>
  );
};

export default Game;
