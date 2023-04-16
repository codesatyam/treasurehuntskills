import React, { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { AiOutlineUp } from 'react-icons/ai';
export default function ToggleBtn() {
  const [direction, setDirection] = useState('down');

  function handleClick() {
    setDirection(direction === 'down' ? 'top' : 'down');
  }

  return (
    <>
    
    <div onClick={handleClick} >
      {direction === 'down' ? (
        <div className='updown'>
      <AiOutlineDown style={{position:'absolute',right:'13',top:'33%'}} />
      </div>
      ) : (
        <div className='updown'>
        <AiOutlineUp style={{position:'absolute',right:'13',top:'33%'}}/>
        </div>
      )}
    </div>
    <style jsx>
{`
.updown:hover{
cursor:pointer;
}
`}
    </style>
    </>
  );
}
