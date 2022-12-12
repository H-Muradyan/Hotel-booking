import React from "react";
import { BiCalendarAlt } from "react-icons/bi";
import { BiBed } from "react-icons/bi";
import moment from "moment/moment";
import { GoLocation } from "react-icons/go";
import useHotels from "../../redux/actions/useHotels";

const HotelDetails = ({ hotel }) => {
  const { diffDays } = useHotels();

  return (
    <div className="md:bg-headerbg rounded-b-2xl h-[249px] pb-10 md:pb-0 bg-gray-800 flex flex-col justify-between text-white font-semibold text-sm w-full md:absolute md:bottom-0 md:top-full md:opacity-0 md:rounded-none md:duration-500 md:group-hover:top-0 md:group-hover:opacity-100 ">
      <div className="px-3 mt-3 space-y-3">
        <p className="flex items-center">
          <GoLocation className="text-xl" />
          <span className="ml-2"> {hotel.location}</span>
        </p>
        <p className="flex items-center">
          <BiBed className="text-xl" /> <span className="ml-2">{hotel.bed} bed</span>
        </p>
        <div className=" flex items-center">
          <BiCalendarAlt className="text-xl" />
          <span className="ml-2">
            for {diffDays(hotel.from, hotel.to)}
            {diffDays(hotel.from, hotel.to) <= 1 ? " day" : " days"}
          </span>
        </div>
      </div>
      <div className="bg-black px-3 text-end w-fit text-xl text-[#d0bd6e]">$ {hotel.price}</div>
      <div className="px-3 mb-4 flex justify-between items-center">
        <div>
          <small className="">Available from {new Date(hotel.from).toLocaleDateString()}</small>
          <small className="block">
            <i>Posted {moment(hotel.createdAt).fromNow()}</i>
          </small>
        </div>

      </div>
      
    </div>
  );
};

export default HotelDetails;
