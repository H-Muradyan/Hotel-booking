import React from "react";
import { Link, useLocation } from "react-router-dom";

const DashboardTabs = () => {
  const params = useLocation();

  return (
    <div className="flex px-3 md:px-10 mb-12 space-x-4 justify-center w-full">
      <Link to="/dashboard/bookings">
        <div
          className={`${
            params.pathname === "/dashboard/bookings" && "bg-headerbg text-white "
          } bg-slate-300 py-4 w-28 md:w-36 rounded-b-3xl text-center cursor-pointer duration-200`}
        >
          Your Bookings
        </div>
      </Link>

      <Link to="/dashboard/seller">
        <div
          className={`${
            params.pathname === "/dashboard/seller" && "bg-headerbg text-white"
          } bg-slate-300 py-4 w-28 md:w-36 rounded-b-3xl text-center cursor-pointer duration-200`}
        >
          Your Hotels
        </div>
      </Link>
    </div>
  );
};

export default DashboardTabs;
