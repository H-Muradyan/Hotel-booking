import React from "react";
import Carousel from "./carousel";
import Hero from "./hero";
import Hotels from "./hotels";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Hotels />
      <Carousel />
    </main>
  );
};

export default HomePage;
