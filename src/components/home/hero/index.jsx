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
      <SearchForm />
    </div>
  );
};

export default Hero;
