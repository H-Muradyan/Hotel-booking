import React, { useState } from "react";
import { Link } from "react-router-dom";
import HotelCard from "../../shared/HotelCard";
import NotFound from "../../shared/NotFound";

const AllHotels = ({ data, show }) => {
  console.log("AllHotels")
  const [count, setCount] = useState(6);

  const countIncrement = () => {
    setCount((prevState) => (data.length > prevState ? prevState + 6 : prevState));
  };
  return (
    <div className="md:grid grid-cols-4 gap-x-8 md:grid-cols-8 lg:grid-cols-12 md:col-start-2 max-w-screen-2xl m-auto">
      {data && data.length ? (
        data.slice(0, count).map((hotel, index) => (
          <React.Fragment key={index}>
            <div
              className="col-span-4 2xl:col-span-3 shadow-lg shadow-neutral-900/90 rounded-2xl relative md:h-72 mb-5 group md:overflow-hidden"
              key={hotel._id}
              md={3}
            >
              <Link to={`/hotels/${hotel._id}`} className="">
                <HotelCard hotel={hotel} show={show} />
              </Link>
            </div>
          </React.Fragment>
        ))
      ) : (
        <NotFound />
      )}
      {count >= 6 && count < data.length && (
        <div className="mt-5 text-center md:col-start-4 md:col-span-2 lg:col-start-6">
          <button
            onClick={countIncrement}
            className=" button1 h-12 w-28 rounded text-white bg-black/70 hover:border-2 active:border-2 hover:bg-black active:bg-black"
          >
            View More
          </button>
          </div>
      )}
    </div>
  );
};

export default AllHotels;
