import React, { memo, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { nav } from "./const";
import UserAvatar from "./UserAvatar";

const Navbar = ({ activeHandler, active, logout, setActive }) => {
  const { auth } = useSelector((state) => ({ ...state }));

  const { pathname } = useLocation();

  return (
    <nav className="">
      {auth && auth.token ? (
        <UserAvatar
          activeHandler={activeHandler}
          active={active}
          auth={auth}
          logout={logout}
          pathname={pathname}
          setActive={setActive}
        />
      ) : (
        <>
          {nav.map((elem) => (
            <React.Fragment key={elem.id}>
              <Link
                to={elem.path}
                className={`${
                  pathname === elem.path ? "text-white" : "text-navText"
                } relative ml-8 font-medium text-base cursor-pointer  hover:text-white after:rounded-3xl after:absolute after:duration-300 after:bg-white after:h-1 after:w-0 after:left-0 after:-bottom-2 hover:after:w-full`}
              >
                {elem.text}
              </Link>
            </React.Fragment>
          ))}
        </>
      )}
    </nav>
  );
};

export default memo(Navbar);
