import React from "react";
import "./controls.css";
import { IconContext } from "react-icons";
import { IoPlay, IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5";
import { FaPause } from "react-icons/fa";

export default function Controls({
  isPlaying,
  setIsPlaying,
  handleNext,
  handlePrev,
}) {
  return (
    <IconContext.Provider value={{ size: "35px", color: "#c4d0e3" }}>
      <div className="controls-wrapper flex">
        <div className="action-btn flex" onClick={handlePrev}>
          <IoPlaySkipBack />
        </div>
        <div
          className={
            isPlaying ? "play-pause-btn flex active" : "play-pause-btn flex"
          }
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <FaPause /> : <IoPlay />}
        </div>
        <div className={"action-btn flex"} onClick={handleNext}>
          <IoPlaySkipForward />
        </div>
      </div>
      ;
    </IconContext.Provider>
  );
}
