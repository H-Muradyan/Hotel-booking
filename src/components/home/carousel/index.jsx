import React, { memo, useEffect, useState } from "react";
import { slidingData } from "./const";

const Carousel = () => {

  let [percent, setPercent] = useState(0);
  let [prevPercent, setPrevPercent] = useState(0);
  let timer;
  useEffect(() => {

    if (percent < slidingData.length * 100) {
    timer = setTimeout(() => {
        setPercent((percent += 100));
      }, 100);
    } else {
      setPercent(0);
    }
    setPrevPercent(percent);

    return () => clearTimeout(timer);
}, []);
  return (
    <div className="col-span-4 md:col-span-8 lg:col-span-10 lg:col-start-2 my-20">
      <div className="flex overflow-hidden max-w-full min-w-full">
        {slidingData.map((elem, index) => {
          return (
            <div
              style={{ transform: `translate(-${percent}%)` }}
              key={elem.id}
              className={`min-w-full m-auto max-w-full ease-out ${
                percent - prevPercent !== 100 ? "duration-100" : "duration-500"
              } ${percent - prevPercent !== -100 ? "duration-100" : "duration-500"}`}
            >
              <div className="bg-headerbg flex flex-col items-center justify-center py-16 px-8 h-580 ml-1 rounded-2xl  md:h-474">
                <h2 className="font-semibold text-5xl text-center text-white mb-6">{elem.title}</h2>
                <ul className="ml-6">
                  {elem.text.map((liText, index) => {
                    return (
                      <div key={index} className="text-white leading-7">
                        {liText}
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center p-0 mt-6">
        {slidingData.map((elem) => {
          return (
            <div
              type="radio"
              name="checkBox"
              key={elem.id}
              onClick={() => setPercent(elem.id * 100)}
              className={`w-4 h-4 rounded-full cursor-pointer ml-2 mr-2 duration-500 
                ${elem.id * 100 === percent ? " bg-[#d0bd6e]" : "bg-headerbg"}`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(Carousel);
