import React from 'react'
import pic from "../../images/congo.png"
const Winner = () => {
  return (
    <div className='winner'>
        <div className="congo">
          <div className="congo-pic">
             <img src={pic} alt="Congrates" />
          </div>
          <div className="congo-h">
            <h1>Congratulations</h1>
            <h2>You won the game</h2>
          </div>
        </div>

    </div>
  )
}

export default Winner