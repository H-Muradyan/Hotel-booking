import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { nav, authNav } from "./const";
const MobileNavbar = ({ showMobNav, openMobileNav, logout }) => {
  const { auth } = useSelector((state) => ({ ...state }));
  const items = auth ? authNav : nav;

  return (
    <nav
      className={`${
        showMobNav ? "translate-y-0" : "-translate-y-64"
      } absolute bg-headerbg duration-500 w-full text-center flex flex-col font-medium text-base`}
    >
      <>
        {items.map((elem) => (
          <React.Fragment key={elem.id}>
            <Link
              to={elem.path}
              onClick={elem.text === "Logout" ? logout : openMobileNav}
              className="py-4 text-navText cursor-pointer hover:text-black hover:bg-navText"
            >
              {elem.text}
            </Link>
          </React.Fragment>
        ))}
      </>
    </nav>
  );
};

export default MobileNavbar;
