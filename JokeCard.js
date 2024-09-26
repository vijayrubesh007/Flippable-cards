import React, { useState } from 'react';
import './JokeCard.css';

const JokeCard = ({ setup, punchline }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`joke-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="joke-card-inner">
        <div className="joke-card-front">
          <p>{setup}</p>
        </div>
        <div className="joke-card-back">
          <p>{punchline}</p>
        </div>
      </div>
    </div>
  );
};

export default JokeCard;

