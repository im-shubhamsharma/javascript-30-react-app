import React, { useEffect, useRef, useState } from "react";
import videoData from "../../assets/bunny.mp4";
import "./CustomVideoPlayer.style.css";

const CustomVideoPlayer = () => {
  const videoRef = useRef();
  const progressBarRef = useRef();
  const progressRef = useRef();

  const [video, setVideo] = useState("");
  const [videoStatus, setVideoStaus] = useState(false);
  const [range, setRange] = useState({
    volume: "1",
    playbackRate: "1",
  });

  useEffect(() => {
    setVideo(videoRef.current);
  }, [videoRef]);

  // function for volume and playbackRate
  function handleChange(e) {
    const { name, value } = e.target;
    setRange((prevRange) => ({
      ...prevRange,
      [name]: value,
    }));
    videoRef.current[name] = value;
  }

  // function to toggle Play Pause
  function togglePlayPause() {
    setVideoStaus((prevStatus) => !prevStatus);
    videoRef.current.paused
      ? videoRef.current.play()
      : videoRef.current.pause();
  }

  // function to skip video
  function skip(e) {
    videoRef.current.currentTime += parseFloat(e.target.dataset.skip);
  }

  //functions for video progress
  function scrub(e) {
    let value =
      (e.nativeEvent.offsetX / progressRef.current.offsetWidth) *
      video.duration;
    video.currentTime = value;
  }

  useEffect(() => {
    const progressInterval = setInterval(() => {
      const percent = (video.currentTime / video.duration) * 100;
      progressBarRef.current.style.flexBasis = `${percent}%`;
    }, 1000);

    return () => clearInterval(progressInterval);
  }, [videoStatus]);

  const [mouseDown, setMouseDown] = useState(false);

  function scrubOnMouseMove(e) {
    if (mouseDown) {
      let value =
        (e.nativeEvent.offsetX / progressRef.current.offsetWidth) *
        video.duration;
      video.currentTime = value;
    }
  }

  //   -----------------------------

  return (
    <div className="cvpContainer">
      <div className="player">
        <video
          ref={videoRef}
          className="player__video viewer"
          src={videoData}
          onClick={togglePlayPause}
        ></video>

        <div className="player__controls">
          <div
            onClick={scrub}
            ref={progressRef}
            className="progress"
            onMouseDown={() => setMouseDown(true)}
            onMouseUp={() => setMouseDown(false)}
            onMouseMove={scrubOnMouseMove}
          >
            <div ref={progressBarRef} className="progress__filled"></div>
          </div>
          <button
            onClick={togglePlayPause}
            className="player__button toggle"
            title="Toggle Play"
          >
            {videoStatus ? "❚ ❚" : "►"}
          </button>
          <input
            type="range"
            name="volume"
            className="player__slider"
            min="0"
            max="1"
            step="0.05"
            value={range.volume}
            onChange={handleChange}
          />
          <input
            type="range"
            name="playbackRate"
            className="player__slider"
            min="0.5"
            max="2"
            step="0.1"
            value={range.playbackRate}
            onChange={handleChange}
          />
          <button data-skip="-10" className="player__button" onClick={skip}>
            « 10s
          </button>
          <button data-skip="25" className="player__button" onClick={skip}>
            25s »
          </button>
        </div>
      </div>

      <script src="scripts.js"></script>
    </div>
  );
};

export default CustomVideoPlayer;
