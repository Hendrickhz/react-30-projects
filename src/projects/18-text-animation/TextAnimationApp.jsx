import React, { useEffect, useRef, useState } from "react";
import Button from "../../components/Button";
import FormGroup from "../../components/FormGroup";
import AnimatedText from "react-animated-text-content";
const TextAnimationApp = () => {
  const [inputValue, setInputValue] = useState("");
  const [animatedText, setAnimatedText] = useState("");
  const [showAnimate, setShowAnimate] = useState(false);
  const handleInput = (e) => {
    setInputValue(e.target.value);
    setShowAnimate(false)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAnimate(true);
  };
  const handleClear = () => {
    setAnimatedText(inputValue);
    setShowAnimate(true);
    setInputValue(() => "");
  };
  const inputValueRef = useRef(null);
  useEffect(() => {
    inputValueRef.current.focus();
  }, []);
  return (
    <div className="w-[90%] mx-auto">
      <div className="flex flex-col mt-5 items-center justify-center gap-4  py-4">
        <form
          className=" flex gap-4 items-center border p-4"
          onSubmit={handleSubmit}
        >
          <FormGroup
            label={"Type in your text to be animated"}
            placeholder={"Your text"}
            values={inputValue}
            onChange={handleInput}
            reference={inputValueRef}
          />
          <Button text={"Clear"} classes={"btn-danger"} onClick={handleClear} />
        </form>
        { showAnimate && animatedText && (
          <AnimatedText
            //   type="words"
            type="chars"
            interval={0.04}
            duration={1.1}
            animation={{
              x: "-100px",
              y: "-20px",
              ease: "linear",
            }}
            className=" text-2xl font-semibold"
          >
            {animatedText}
          </AnimatedText>
        )}
      </div>
    </div>
  );
};

export default TextAnimationApp;
