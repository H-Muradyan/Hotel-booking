import React, { useState, useEffect, memo } from "react";
import HeaderLogo from "./HeaderLogo";
import Navbar from "./Navbar";
import MobileIcon from "./MobileIcon";
import MobileNavbar from "./MobileNavBar";
import GetWidth from "../customHooks/GetWidth";
import { GetScroll } from "../customHooks/GetScroll";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

const Header = () => {
  const [showMobNav, setShowMobNav] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [currentScroll, setCurrentScroll] = useState(null);
  const [active, setActive] = useState(false);

  const widthSize = GetWidth();
  const scrollPosition = GetScroll();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (scrollPosition > currentScroll) {
      setActive(false);
      setShowMobNav(false);
      setShowHeader(false);
    } else {
      setActive(false);
      setShowMobNav(false);
      setShowHeader(true);
    }
    setCurrentScroll(scrollPosition);
  }, [scrollPosition]);

  const openMobileNav = () => {
    setShowMobNav(!showMobNav);
  };

  const activeHandler = () => {
    setActive(!active);
  };

  const logout = (e) => {
    e.preventDefault();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    window.localStorage.clear();
    navigate("/");
    setShowMobNav(false);
  };

  return (
    <header className={`fixed w-full duration-300 z-20 top-0 shadow-headershadow ${!showHeader && "-top-24"}`}>
      <div className="bg-headerbg relative z-10 w-full">
        <div className="flex justify-between items-center h-20 px-4 md:px-10 max-w-screen-2xl m-auto">
          <HeaderLogo setActive={setActive}/>
          {widthSize >= 768 && (
            <Navbar activeHandler={activeHandler} active={active} logout={logout} setActive={setActive}/>
          )}
          {widthSize <= 767 && <MobileIcon openMobileNav={openMobileNav} showMobNav={showMobNav} />}
        </div>
      </div>
      {widthSize <= 767 && (
        <MobileNavbar openMobileNav={openMobileNav} showMobNav={showMobNav} logout={logout} />
      )}
    </header>
  );
};

export default Header;
