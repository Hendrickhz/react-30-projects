import React, { useEffect, useRef, useState } from "react";
import Title from "../../components/Title";
import { BsSearch } from "react-icons/bs";

const HiddenSearchBar = () => {
  const inputEl = useRef(null);
  const [uiProps, setUiProps] = useState({
    bg: "purple",
    shadow: "",
    transitions: "all 0.3s ease",
    opacity: 0,
    showSearchIcon: true,
    showSearchBar: false,
    borderBottomColor: "#ff",
  });
  let body = document.body.style;

  let inputStyle = {
    margin: "10vh 25vw",
    width: "20vw",
    height: "30px",
    padding: "3rem .3rem",
    border: "none",
    outline: "none",
    background: "transparent",
    borderBottom: `1px solid #333`,
    fontSize: "1.3rem",
    color: "#eee",
    // boxShadow: "0px 55px 60px -15px rgba(0,0,0,0.75)",
    opacity: uiProps.opacity,
    transitions: "all .3s ease",
  };
  useEffect(
    () => {
      body.background = uiProps.bg;
      body.boxShadow = uiProps.shadow;
      body.transition = uiProps.transitions;
      uiProps.showSearchBar && inputEl.current.focus();
    },
    [uiProps.shadow],
    [uiProps.showSearchBar]
  );
  const showSearch = () => {
    setUiProps({
      opacity: 1,
      showSearchIcon: false,
      showSearchBar: true,
    });
  };
  const handleSearchFocus = () => {
    setUiProps({
      shadow: "inset  0 -60vh 30vw 200px rgba(0,0,0,0.8)",
      borderBottomColor: "green",
    });
  };
  const handleSearchBlur = () => {
    setUiProps({
      shadow: "none",
      opacity: 0,
      borderBottomColor: "#fff",
      showSearchIcon: true,
    });
  };

  return (
    <div className=" flex items-center flex-col  h-screen">
      {uiProps.showSearchIcon ? (
        <BsSearch
          onClick={showSearch}
          className=" text-white absolute top-5 right-5 text-4xl cursor-pointer"
        />
      ) : (
        <input
          type="text"
          style={inputStyle}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
          placeholder=" Search ..."
          ref={inputEl}
        />
      )}
    </div>
  );
};

export default HiddenSearchBar;
