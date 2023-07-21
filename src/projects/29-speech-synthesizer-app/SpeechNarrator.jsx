import React, { useEffect, useState } from "react";
import { AiFillRobot, AiOutlineRobot } from "react-icons/ai";
const SpeechNarrator = ({ text }) => {
  const splitText = (text, from, to) => {
    return [text.slice(0, from), text.slice(from, to), text.slice(to)];
  };
  const [highlightSection, setHighlightSection] = useState({
    from: 0,
    to: 0,
  });
  const robotStyle = {
    fontSize: 100,
    padding: 0,
    cursor: "pointer",
  };
  const [rateValue, setRateValue] = useState(1);

  const synth = window.speechSynthesis;
  let utterance = new SpeechSynthesisUtterance(text);
  //   utterance.addEventListener("boundary", ({ charIndex, charLength }) => {
  //     setHighlightSection({ from: charIndex, to: charIndex + charLength });
  //   });
  useEffect(() => {
    // Event listener to set the initial highlighted section
    utterance.onstart = () => {
      setHighlightSection({ from: 0, to: 0 });
    };

    // Event listener to update the highlighted section as the speech progresses
    utterance.onboundary = (event) => {
      setHighlightSection({
        from: event.charIndex,
        to: event.charIndex + event.charLength,
      });
    };
  }, [text]);
  const HighlightedText = ({ text, from, to }) => {
    const [start, highlight, finish] = splitText(text, from, to);
    return (
      <div className="p-3 border rounded w-[500px]">
        {start} <span className="bg-yellow-500">{highlight}</span> {finish}
      </div>
    );
  };
  const [showPlay, setShowPlay] = useState(false);

  //handlers
  const handlePlay = () => {
    synth.speak(utterance);
    synth.resume();
    setShowPlay(true);
  };
  const handlePause = () => {
    synth.pause();
    setShowPlay(false);
  };
  utterance.rate = rateValue;
  return (
    <div className=" flex flex-col items-center my-4  gap-8">
      <h1>Speech Narrator</h1>
      {showPlay ? (
        <AiFillRobot
          style={robotStyle}
          className="text-blue-500"
          onClick={handlePause}
        />
      ) : (
        <AiOutlineRobot
          style={robotStyle}
          className="text-blue-500"
          onClick={handlePlay}
        />
      )}

      <HighlightedText text={text} {...highlightSection} />
      <div className=" flex flex-col justify-center items-center">
        <label htmlFor="">Rate: {rateValue}</label>
        <input
          type="range"
          step={0.1}
          max={2}
          min={0.5}
          value={rateValue}
          onChange={(e) => setRateValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SpeechNarrator;
