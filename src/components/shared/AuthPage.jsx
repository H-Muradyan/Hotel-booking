import React, { useEffect, useRef } from "react";
import loginImg from "/images/loginImg.jpg";
import loginImgMob from "/images/loginImgMob.jpg";
import GetWidth from "../customHooks/GetWidth";

const AuthPage = ({ children, text }) => {
  const myRef = useRef();

  useEffect(() => {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const widthSize = GetWidth();

  return (
    <div ref={myRef} className="relative flex justify-center h-screen">
      <img
        className=" "
        src={widthSize >= 768 ? loginImg : loginImgMob}
        alt="login picture"
        width="100%"
      />
      <div className="absolute px-3 mt-28 w-full grid grid-cols-4 gap-x-8 md:grid-cols-8 lg:grid-cols-12 max-w-screen-2xl">
        <div className="bg-headerbg/60 rounded-3xl col-span-4 md:col-start-3 lg:col-start-4 lg:col-span-6 ">
          <h2 className="text-white text-center rounded-t-3xl bg-black/70 py-3 text-2xl">{text}</h2>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
