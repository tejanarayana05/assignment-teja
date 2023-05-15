import "./Response.css";
import React, { useState, useEffect } from "react";

const Response = (props) => {
  const [currentTime, setCurrentTime] = useState(60);
  const [squares, setSquares] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setSquares(Array.from({ length: 16 }));
  }, []);

  let timerId = null;
  let moveId = null;

  useEffect(() => {
    if (isActive) {
      // eslint-disable-next-line
      timerId = setInterval(() => {
        setCurrentTime((currentTime) => currentTime - 1);
      }, 1000);
      // eslint-disable-next-line
      moveId = setInterval(toggleColor, 500);
    }
    return () => {
      clearInterval(timerId);
      clearInterval(moveId);
    };
  });

  useEffect(() => {
    if (currentTime === 0) {
      clearInterval(timerId);
      clearInterval(moveId);
    } // eslint-disable-next-line
  }, [currentTime]);

  const startGame = () => {
    setIsActive(true);
  };

  const toggleColor = () => {
    document.querySelectorAll(".square").forEach((square) => {
      square.classList.remove("mole");
    });
    const randomIndex = Math.floor(Math.random() * 16);
    document.getElementById(randomIndex + 1).classList.toggle("mole");
  };

  const countClicks = (e) => {
    if (e.target.classList.contains("mole") && currentTime > 0) {
      setScore((score) => score + 1);
    }
  };

  const Refresh = () => {
    window.location.reload();
  };



  return (
    <div className="response-page">
      <h1>2. Response Test</h1>
      <p>
        Test your reflexes and click on the highlighted boxes as many times as
        you can in given time.
      </p>
      {currentTime !== 0 && (
        <p>
          Time Left : <b>{currentTime}</b> s
        </p>
      )}
      <div className="grid">
        {squares.map((_, index) => (
          <div
            className="square"
            id={index + 1}
            key={index + 1}
            onClick={countClicks}
          ></div>
        ))}
      </div>
      {currentTime !== 0 && (
        <button onClick={startGame} className="start-btn">
          Start
        </button>
      )}

      {currentTime === 0 && (
        <div className="result-block">
          <h2>Game Over, your Score : {score}</h2>
          <button onClick={Refresh} className="start-btn">
            Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default Response;
