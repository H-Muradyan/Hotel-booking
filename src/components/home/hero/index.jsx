import React from "react";
import GetWidth from "../../customHooks/GetWidth";
import BackgroundEffect from "./BackgroundEffect";
import SearchForm from "./SearchForm";
import WelcomeText from "./WelcomeText";

const Hero = () => {
  const widthSize = GetWidth();

  return (
    <div className="relative md:flex justify-center items-center p-10">
      <BackgroundEffect />
      <WelcomeText />
      <div className="px-4 md:px-0 mt-8 md:absolute md:bottom-16 w-full">

      <SearchForm />
      </div>
    </div>
  );
};

export default Hero;
