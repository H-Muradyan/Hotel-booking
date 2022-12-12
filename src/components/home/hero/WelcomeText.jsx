import React from "react";

const WelcomeText = () => {
  return (
    <div className="px-4 md:px-0 mt-10 flex flex-col text-center items-center md:absolute md:mt-0">
      <h2 className="text-black text-6xl md:text-white md:text-7xl font-allison lg:text-9xl font-semibold">
        Book Your Vacation
      </h2>
      <p className="text-black text-xl mt-10 md:text-white md:text-2xl lg:text-3xl">
        Explore new experience with Hotale
      </p>
    </div>
  );
};

export default WelcomeText;
