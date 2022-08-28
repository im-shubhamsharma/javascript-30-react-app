import React, { useState, useEffect } from "react";
import "./Clock.css";

function Clock(props) {
  const [time, setTime] = useState({
    hour: 0,
    minutes: 0,
    seconds: 0,
  });

  function clock() {
    const now = new Date();

    setTime({
      hour: now.getHours(),
      minutes: now.getMinutes(),
      seconds: now.getSeconds(),
    });

    const hour = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    console.log(minutes);

    const secondsHand = document.querySelector(".seconds");
    let secondsDegree = (seconds / 60) * 360;
    secondsHand.style.transform = `rotate(${secondsDegree}deg)`;

    const minutesHand = document.querySelector(".minutes");
    let minutesDegree = (minutes / 60) * 360;
    minutesHand.style.transform = `rotate(${minutesDegree}deg)`;

    const hourHand = document.querySelector(".hour");
    let hourDegree = (hour / 12) * 360;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
  }

  useEffect(() => {
    setInterval(clock, 1000);
  }, []);

  return (
    <div className="clock-container">
      <div className="digital-clock">
        <h1>
          {time.hour < 10 ? `0${time.hour} ` : `time.hour `} :
          {time.minutes < 10 ? ` 0${time.minutes}` : ` ${time.minutes}`} :
          {time.seconds < 10 ? ` 0${time.seconds}` : ` ${time.seconds}`}
        </h1>
      </div>
      <div className="analog-clock">
        <div className="clock-face">
          <div className="hour"></div>
          <div className="minutes"></div>
          <div className="seconds"></div>
        </div>
      </div>
    </div>
  );
}

export default Clock;
