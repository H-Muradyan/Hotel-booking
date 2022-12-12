import React, { memo } from "react";
import { Link } from "react-router-dom";
import logo from "/images/logo.png";

const HeaderLogo = ({setActive}) => {
  return (
    <Link onClick={() => setActive(false)} to="/">
      <img src={logo} alt="logo" className="cursor-pointer" />
    </Link>
  );
};

export default memo(HeaderLogo);
