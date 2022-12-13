import React, { useEffect, useRef } from "react";
import Carousel from "./carousel";
import Hero from "./hero";
import Hotels from "./hotels";

const HomePage = () => {
  const myRef = useRef();

  useEffect(() => {
    myRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);
  
  return (
    <main ref={myRef}>
      <Hero />
      <Hotels />
      <Carousel />
    </main>
  );
};

export default HomePage;
