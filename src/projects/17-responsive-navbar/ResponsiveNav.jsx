import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";
import { NavStyle } from "./NavStyle";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Title from "../../components/Title";
const ResponsiveNav = () => {
  const [showElement, setShowElement] = useState({
    navbarNav: true,
    hamburgerIcon: false,
    closeIcon: false,
    navOpened: false,
  });
  const iconStyle = {
    cursor: "pointer",
    fontSize: "20px",
  };
  const [title, setTitle] = useState("Home");
  useEffect(() => {
    window.onresize = () => {
      let windowWidth = window.innerWidth;
      console.log(windowWidth);
      if (windowWidth >= 700) {
        setShowElement({
          navbarNav: true,
          hamburgerIcon: false,
        });
      } else if (windowWidth < 700) {
        setShowElement({
          navbarNav: false,
          hamburgerIcon: true,
        });
      }
    };
  }, []);
  const openNav = () => {
    setShowElement({
      navbarNav: true,
      hamburgerIcon: false,
      closeIcon: true,
      navOpened: true,
    });
  };
  const closeNav = () => {
    setShowElement({
      navbarNav: false,
      hamburgerIcon: true,
      closeIcon: false,
      navOpened: false,
    });
  };
  const handleActive = (e) => {
    document
      .querySelectorAll(".nav-link")
      .forEach((navLink) => navLink.classList.remove("active"));
    e.target.classList.add("active");
    setTitle(e.target.innerText);
  };

  return (
    <>
      <NavStyle
        className={`bg-blue-500 text-lime-50 p-4 flex justify-between items-center ${
          showElement.navOpened && "showNavbar"
        }`}
      >
        <div className=" flex justify-between w-full items-center">
          <a href="#">let code</a>
          {showElement.hamburgerIcon && (
            <AiOutlineMenu onClick={openNav} style={iconStyle} />
          )}
          {showElement.closeIcon && (
            <AiOutlineClose onClick={closeNav} style={iconStyle} />
          )}
        </div>
        {showElement.navbarNav ? (
          <div className="navbar-collapse">
            <ul
              className={`nav-items ${showElement.navOpened && "showNavbar"}`}
            >
              <NavItem active="active" text={"Home"} onClick={handleActive} />
              <NavItem text={"Contact"} onClick={handleActive} />
              <NavItem text={"About"} onClick={handleActive} />
            </ul>
          </div>
        ) : (
          ""
        )}
      </NavStyle>
      <div className= " my-4">
        <Title text={title} />
      </div>
    </>
  );
};

export default ResponsiveNav;
