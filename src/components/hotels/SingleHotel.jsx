import React, { useEffect, useRef, useState } from "react";
import { BiBed, BiCalendarAlt } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { GiResize, GiFruitTree } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { getHotelById, isAlreadyBooked } from "../../api/datas/allHotels";
import useHotels from "../redux/actions/useHotels";
import room from "/images/room.jpg";
import { getSessionId } from "../../api/stripe/stripe";
import { loadStripe } from "@stripe/stripe-js";
import Loading from "../shared/Loading";

const SingleHotel = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { diffDays } = useHotels();

  const { auth } = useSelector((state) => ({ ...state }));

  const [hotel, setHotel] = useState({});
  const [alreadyBooked, setAlreadyBooked] = useState(true);
  const [loading, setLoading] = useState(false);

  const getSingleHotel = async () => {
    try {
      const res = await getHotelById(params.id);
      if (res.data) {
        console.log(res.data);
        setHotel(res.data);
      }
    } catch (err) {
      toast.error(err);
    }
  };
  const myRef = useRef();

  useEffect(() => {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!auth || !auth.token) {
      navigate("/login");
      return;
    }

    setLoading(true);

    let res = await getSessionId(auth.token, params.id);
    console.log("get sessionid resposne", res.data.sessionId);

    const stripe = await loadStripe(`${import.meta.env.VITE_APP_STRIPE_KEY}`);

    stripe
      .redirectToCheckout({
        sessionId: res.data.sessionId,
      })
      .then((result) => console.log("Shitak e)) ", result));
  };

  useEffect(() => {
    getSingleHotel();
  }, []);

  useEffect(() => {
    if (auth && auth.token) {
      isAlreadyBooked(auth.token, params.id).then((res) => {
        // if (res.data.ok)
        setAlreadyBooked(false);
      });
    }
  }, []);

  return (
    <div ref={myRef}>
      {Object.keys(hotel).length ? (
        <div>
          <div className="relative flex justify-center items-center p-3">
            <h1 className="absolute text-4xl flex justify-center text-center items-center text-[#77ffbf] md:text-6xl font-allison lg:text-8xl font-semibold">
              {hotel.title}
            </h1>
            <img src={room} alt={hotel.title} className="rounded-3xl" />
          </div>

          <div className="p-10 md:px-14 grid grid-cols-4 gap-x-8 md:grid-cols-8 lg:grid-cols-12 max-w-screen-2xl m-auto">
            <img
              src={`${import.meta.env.VITE_APP_API}/hotel/image/${params.id}`}
              alt={hotel.title}
              className="rounded-3xl w-full col-span-4 md:col-span-6 lg:col-span-10"
            />

            <div className="mt-10 col-span-4 md:col-span-6 lg:col-span-10 lg:flex lg:justify-between">
              <div className="mb-2">
                <h2 className="text-4xl font-medium">{hotel.title}</h2>
                <div className="flex items-center">
                  <BiCalendarAlt className="w-6 h-8 mr-3 text-gray-600" />
                  <div className="font-semibold text-xl mt-1 text-gray-600">
                    for {diffDays(hotel.from, hotel.to)}{" "}
                    {diffDays(hotel.from, hotel.to) <= 1 ? " day" : " days"}
                  </div>
                </div>
              </div>
              <div className="lg:text-end">
                <p className="text-2xl font-medium">From ${hotel.price}</p>
                <small className="text-lg text-gray-600">per night</small>
                <p className="text-lg text-gray-600">Room Features</p>
                <p className="text-lg text-gray-600">
                  Available from {new Date(hotel.from).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="my-10 border border-gray-300 col-span-4 md:col-span-6 lg:col-span-10"></div>

            <div className="space-y-9 md:space-y-0 md:space-x-9 col-span-4 md:flex">
              <div className="space-y-9">
                <div className="flex items-center">
                  <BiBed className="w-12 h-10 mr-5" />
                  <div>
                    <p className="font-semibold text-xl">Bed</p>
                    <p className="text-gray-600">{hotel.bed} Single Beds</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <IoIosPeople className="w-12 h-10 mr-5" />
                  <div>
                    <p className="font-semibold text-xl">Max Guest</p>
                    <p className="text-gray-600">{hotel.bed * 2} Guests</p>
                  </div>
                </div>
              </div>
              <div className="space-y-9">
                <div className="flex items-center">
                  <GiResize className="w-12 h-9 mr-5" />
                  <div>
                    <p className="font-semibold text-xl">Room Space</p>
                    <p className="text-gray-600">45 sqm.</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <GiFruitTree className="w-12 h-10 mr-5" />
                  <div>
                    <p className="font-semibold text-xl">Room View</p>
                    <p className="text-gray-600">Ocean View</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" text-gray-600 col-span-4 mt-12 md:col-span-6 lg:col-span-10">
              {hotel.content}
            </div>

            <button
              disabled={loading || alreadyBooked}
              className="bg-headerbg text-white cursor-pointer hover:bg-black md:col-span-3 md:col-start-4 lg:col-start-8 rounded-xl py-3 col-span-4 mt-6"
              onClick={handleBooking}
            >
              {loading
                ? "Loading..."
                : alreadyBooked
                ? "Already Booked"
                : auth && auth.token
                ? "Book Now"
                : "Login to Book"}
            </button>
          </div>
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center">
          <Loading />
        </div>
      )}
    </div>
  );
};

export default SingleHotel;
