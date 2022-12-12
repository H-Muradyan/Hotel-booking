import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import { getAccountBalance } from "../../api/stripe/stripe";
import DashboardTabs from "./DashboardTabs";
import User from "./User";

const DashboardPage = () => {
  // const { auth } = useSelector((state) => ({ ...state }));

  // useEffect(() => {
  //   getAccountBalance(auth.token).then((res) => {
  //     setBalance(res.data);
  //   });
  // }, []);

  return (
    <div className="p-10">
      <User/>
      <DashboardTabs />
      <Outlet />
    </div>
  );
};

export default DashboardPage;
