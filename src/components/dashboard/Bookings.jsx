import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userHotelBookings } from "../../api/datas/allHotels";
import HotelCard from "../home/hotels/HotelCard";
import noData from "/images/noData.gif";

const Bookings = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = auth;

  const [hotels, setHotels] = useState([]);

  const getBookedHotels = async () => {
    try {
      const res = await userHotelBookings(token);
      setHotels(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBookedHotels();
  }, []);

  return (
    <div className="px-3 md:px-10 grid grid-cols-4 gap-x-8 md:grid-cols-8 lg:grid-cols-12 md:col-start-2 max-w-screen-2xl m-auto">
      {hotels && hotels.length > 1 ? (
        hotels.map((hotel) => (
          <div
            className="col-span-4 2xl:col-span-3 shadow-lg shadow-neutral-900/90 rounded-2xl relative md:h-72 mb-5 group md:overflow-hidden"
            key={hotel._id}
            md={3}
          >
            <Link to={`/hotels/${hotel._id}`}>
              <HotelCard hotel={hotel} />
            </Link>
          </div>
        ))
      ) : (
        <div className="col-start-2 col-span-2 md:col-span-4 md:col-start-3 lg:col-start-4 lg:col-span-6">
          <div className="text-2xl font-bold text-center w-full mb-4">No hotels found!</div>
          <img className="w-full" src={noData} alt="gif" />
        </div>
      )}
    </div>
  );
};

export default Bookings;
