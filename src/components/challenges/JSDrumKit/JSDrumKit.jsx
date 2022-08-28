import React from "react";
import "./JSDrumKit.css";

function JSDrumKit(props) {
  function playsound(e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
  }

  window.addEventListener("keydown", playsound);

//   function removeClass(e) {
//     if (e.propertyName !== "transform") return;
//     this.classList.remove("playing");
//   }

//   let keys = document.querySelectorAll(".key");
//   keys.forEach((key) => key.addEventListener("transitionend", removeClass));

  function removeClass(e) {
    let key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    key.classList.remove("playing")
  }
  window.addEventListener("keyup", removeClass)

  return (
    <div className="main-container">
      <div className="keys">
        <div data-key="65" className="key">
          <kbd>A</kbd>
          <span className="sound">clap</span>
        </div>
        <div data-key="83" className="key">
          <kbd>S</kbd>
          <span className="sound">hihat</span>
        </div>
        <div data-key="68" className="key">
          <kbd>D</kbd>
          <span className="sound">kick</span>
        </div>
        <div data-key="70" className="key">
          <kbd>F</kbd>
          <span className="sound">openhat</span>
        </div>
        <div data-key="71" className="key">
          <kbd>G</kbd>
          <span className="sound">boom</span>
        </div>
        <div data-key="72" className="key">
          <kbd>H</kbd>
          <span className="sound">ride</span>
        </div>
        <div data-key="74" className="key">
          <kbd>J</kbd>
          <span className="sound">snare</span>
        </div>
        <div data-key="75" className="key">
          <kbd>K</kbd>
          <span className="sound">tom</span>
        </div>
        <div data-key="76" className="key">
          <kbd>L</kbd>
          <span className="sound">tink</span>
        </div>
      </div>
      <audio
        data-key="65"
        src="../src/components/challenges/JSDrumKit/sounds/clap.wav"
      ></audio>
      <audio
        data-key="83"
        src="../src/components/challenges/JSDrumKit/sounds/hihat.wav"
      ></audio>
      <audio
        data-key="68"
        src="../src/components/challenges/JSDrumKit/sounds/kick.wav"
      ></audio>
      <audio
        data-key="70"
        src="../src/components/challenges/JSDrumKit/sounds/openhat.wav"
      ></audio>
      <audio
        data-key="71"
        src="../src/components/challenges/JSDrumKit/sounds/boom.wav"
      ></audio>
      <audio
        data-key="72"
        src="../src/components/challenges/JSDrumKit/sounds/ride.wav"
      ></audio>
      <audio
        data-key="74"
        src="../src/components/challenges/JSDrumKit/sounds/snare.wav"
      ></audio>
      <audio
        data-key="75"
        src="../src/components/challenges/JSDrumKit/sounds/tom.wav"
      ></audio>
      <audio
        data-key="76"
        src="../src/components/challenges/JSDrumKit/sounds/tink.wav"
      ></audio>
    </div>
  );
}

export default JSDrumKit;
