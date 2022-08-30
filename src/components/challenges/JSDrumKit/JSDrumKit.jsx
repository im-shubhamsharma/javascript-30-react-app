import React, { useEffect } from "react";
import "./JSDrumKit.css";
import boom from "../../../assets/sounds/boom.wav"
import clap from "../../../assets/sounds/clap.wav"
import hihat from "../../../assets/sounds/hihat.wav"
import kick from "../../../assets/sounds/kick.wav"
import openhat from "../../../assets/sounds/openhat.wav"
import ride from "../../../assets/sounds/ride.wav"
import snare from "../../../assets/sounds/snare.wav"
import tink from "../../../assets/sounds/tink.wav"
import tom from "../../../assets/sounds/tom.wav"

function JSDrumKit(props) {
  function playsound(e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
  }

  function onClickPlay(keyCode) {
    let audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    let key = document.querySelector(`div[data-key="${keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
  }

  window.addEventListener("keydown", playsound);

  function removeClass(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
  }

  useEffect(() => {
    let keys = document.querySelectorAll(".key");
    keys.forEach((key) => key.addEventListener("transitionend", removeClass));
  }, []);

  // function removeClass(e) {
  //   let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  //   key.classList.remove("playing");
  // }
  // window.addEventListener("keyup", removeClass);

  return (
    <div className="main-container">
      <div className="keys">
        <div onClick={() => onClickPlay("65")} data-key="65" className="key">
          <kbd>A</kbd>
          <span className="sound">clap</span>
        </div>
        <div onClick={() => onClickPlay("83")} data-key="83" className="key">
          <kbd>S</kbd>
          <span className="sound">hihat</span>
        </div>
        <div onClick={() => onClickPlay("68")} data-key="68" className="key">
          <kbd>D</kbd>
          <span className="sound">kick</span>
        </div>
        <div onClick={() => onClickPlay("70")} data-key="70" className="key">
          <kbd>F</kbd>
          <span className="sound">openhat</span>
        </div>
        <div onClick={() => onClickPlay("71")} data-key="71" className="key">
          <kbd>G</kbd>
          <span className="sound">boom</span>
        </div>
        <div onClick={() => onClickPlay("72")} data-key="72" className="key">
          <kbd>H</kbd>
          <span className="sound">ride</span>
        </div>
        <div onClick={() => onClickPlay("74")} data-key="74" className="key">
          <kbd>J</kbd>
          <span className="sound">snare</span>
        </div>
        <div onClick={() => onClickPlay("75")} data-key="75" className="key">
          <kbd>K</kbd>
          <span className="sound">tom</span>
        </div>
        <div onClick={() => onClickPlay("76")} data-key="76" className="key">
          <kbd>L</kbd>
          <span className="sound">tink</span>
        </div>
      </div>
      <audio
        data-key="65"
        src={clap}
      ></audio>
      <audio
        data-key="83"
        src={hihat}
      ></audio>
      <audio
        data-key="68"
        src={kick}
      ></audio>
      <audio
        data-key="70"
        src={openhat}
      ></audio>
      <audio data-key="71" src={boom}></audio>
      <audio
        data-key="72"
        src={ride}
      ></audio>
      <audio
        data-key="74"
        src={ride}
      ></audio>
      <audio
        data-key="75"
        src={tom}
      ></audio>
      <audio
        data-key="76"
        src={tink}
      ></audio>
    </div>
  );
}

export default JSDrumKit;
