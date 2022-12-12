import React from "react";
import { Link } from "react-router-dom";

const UserAvatar = ({ activeHandler, active, auth, logout, pathname, setActive }) => {
  return (
    <div className="relative group flex items-center">
      <Link
        onClick={() => setActive(false)}
        className={`${
          pathname === "/" ? "text-white" : "text-navText"
        } relative mr-8 font-medium text-base cursor-pointer  hover:text-white after:rounded-3xl after:absolute after:duration-300 after:bg-white after:h-1 after:w-0 after:left-0 after:-bottom-2 hover:after:w-full`}
        to="/"
      >
        Home
      </Link>
      <div
        onClick={activeHandler}
        className={` text-black text-2xl font-bold cursor-pointer`}
        size="large"
      >
        <img width={60} src={`https://api.multiavatar.com/${auth.user.name[0]}.svg`} />
      </div>
      {active && (
        <div className="dropdown-content w-40 top-[70px] absolute -right-10 rounded-b-2xl bg-headerbg z-10 [&>a]:text-white text-center [&>a]:block [&>a]:px-3 [&>a]:py-4 [&>a]:no-underline">
          <Link onClick={activeHandler} className="hover:bg-navText" to="/dashboard/bookings">
            Dashboard
          </Link>
          <Link onClick={logout} className="hover:bg-navText rounded-b-2xl">
            Log out
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserAvatar;
