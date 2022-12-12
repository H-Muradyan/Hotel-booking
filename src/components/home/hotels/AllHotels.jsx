import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../carousel";
import HotelCard from "./HotelCard";
import GetWidth from "../../customHooks/GetWidth"

const AllHotels = ({ data, show }) => {
  const widthSize = GetWidth();
  return (
    <div className="md:grid grid-cols-4 gap-x-8 md:grid-cols-8 lg:grid-cols-12 md:col-start-2 max-w-screen-2xl m-auto">
      {data && data.length ? (
        data.map((hotel, index) => (
          <React.Fragment key={index}>
          {index === 8 && widthSize >= 1536 && <Carousel index={index}/>}
          {index === 6 && widthSize < 1536 && <Carousel key={index}/>}

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
        <span>No hotels found!</span>
      )}
    </div>
  );
};

export default AllHotels;
