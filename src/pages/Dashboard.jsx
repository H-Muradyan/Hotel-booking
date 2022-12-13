import React, { useEffect, useRef } from "react";
import DashboardPage from "../components/dashboard";

const Dashboard = () => {
  const myRef = useRef();

  useEffect(() => {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div ref={myRef}>
      <DashboardPage />
    </div>
  );
};

export default Dashboard;
