import React, { useState, useEffect } from "react";

function Input() {
  const [selectedTime, setSelectedTime] = useState(20);
  const [countdown, setCountdown] = useState(selectedTime * 60);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    if (countdown > 0 && timerRunning) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (countdown == 0) {
      console.log("play sound?");
      const finish = new Audio("audio/mp3/call-to-attention.mp3");
      finish.play();
      setTimerRunning(false);
    }
  }, [countdown, timerRunning]);

  const handleButtonClick = (time) => {
    setSelectedTime(time);
    setCountdown(time * 60);
  };

  const handleStart = () => {
    setTimerRunning((old) => (old ? false : true));
  };

  const handleReset = () => {
    setCountdown(selectedTime * 60);
  };

  const displayCountdown = () => {
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div>
      <div>
        <button onClick={() => handleButtonClick(20)}>Pomodoro</button>
        <button onClick={() => handleButtonClick(0.1)}>Short Break</button>
        <button onClick={() => handleButtonClick(15)}>Long Break</button>
      </div>
      <div>
        <p>Selected Time: {selectedTime} minutes</p>
        <p>Countdown: {displayCountdown()}</p>
      </div>
      <button onClick={handleStart}>Start/Pause</button>
      <button onClick={handleReset}>Reset</button>
      <audio src="http://localhost:8000/audio/mp3/call-to-attention.mp3"></audio>
    </div>
  );
}

export default Input;
