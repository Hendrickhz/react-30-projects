import React, { useContext } from "react";
import Title from "../../components/Title";
import Button from "../../components/Button";
import { ThemeContext } from "./context/theme-context";
const Blog = () => {
  const {theme,changeTheme} = useContext(ThemeContext);
  return (
    <div className=" container mx-auto">
      <div className="mt-8">
        <Title text={`This is my blog with ${theme} theme`} />
      </div>
      <span className=" absolute top-4 right-4">
        <Button text={`${theme == "dark" ? "light": "dark"}`} onClick={changeTheme} classes={`${theme == "dark" ? "btn-outline":' bg-black text-white'} `} />
      </span>
      <p className=" mt-6">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta atque,
        quae voluptates ducimus aperiam harum, laudantium maxime repellat
        inventore eius magnam facere, beatae consequatur ipsam? Nulla quasi
        eveniet alias placeat?
      </p>
    </div>
  );
};

export default Blog;
