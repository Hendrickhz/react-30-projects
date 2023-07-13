import React from "react";

const NavItem = ({text , active="", onClick}) => {
  return (
    <li  onClick={onClick}>
      <a className={`${active} nav-link`} href={`#${text}`}>{text}</a>
    </li>
  );
};

export default NavItem;
