import React from 'react';
import './home.css';
 import vid from "../../images/video1.mp4"
import { NavLink } from 'react-router-dom';

const Home = () => {
 
  return (
    <div className='home-head'> 
    
{/* <video autoplay muted loop id="myVideo">
  <source src={vid} type="video/mp4"/>
  Your browser does not support HTML5 video.
</video> */}
    <div className="home">
    
      <h1>Welcome to skill Judgement Puzzle game</h1>
      <p>This is the homepage of Puzzle</p>
      <button type="button" class="btn buttonh btn-outline-success">
        <NavLink
          exact
            className="nav-link"
            to="/game"
          >
            Play
        </NavLink>
      </button>
    </div>
    </div>
  );
};

export default Home;
