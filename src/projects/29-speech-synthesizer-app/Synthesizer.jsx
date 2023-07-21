import React, { useState } from "react";
import SpeechNarrator from "./SpeechNarrator";

const Synthesizer = () => {
  const [text, setText] = useState("text");
  return (
    <div className=" container mx-auto m-5">
      <div className=" flex flex-col justify-center items-center w-[500px] mx-auto">
        <SpeechNarrator text={text} />
        <textarea
          cols={30}
          rows={10}
          value={text}
          className="border p-3"
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default Synthesizer;
