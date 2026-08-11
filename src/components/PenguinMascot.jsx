import React from 'react';
import penguinGif from '../assets/penguin_loop.gif';
import './PenguinMascot.css';

const PenguinMascot = () => {
  return (
    <div className="penguin-container">
      <img 
        src={penguinGif} 
        alt="Cute Penguin"
        className="penguin-gif"
      />
    </div>
  );
};

export default PenguinMascot;
