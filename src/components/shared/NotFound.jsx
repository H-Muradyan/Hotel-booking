import React from "react";
import noData from "/images/noData.gif";

const NotFound = () => {
  return (
    <div className="col-start-2 col-span-2 md:col-span-4 md:col-start-3 lg:col-start-4 lg:col-span-6">
      <div className="text-2xl font-bold text-center w-full mb-4">No hotels found!</div>
      <img className="w-full" src={noData} alt="gif" />
    </div>
  );
};

export default NotFound;
