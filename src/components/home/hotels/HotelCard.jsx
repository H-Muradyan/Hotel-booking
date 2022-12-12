import React from "react";
import HotelDetails from "./HotelDetails";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router";

const HotelCard = ({ hotel, show, setIsModalOpen, setId }) => {
  const navigate = useNavigate();
  const navigateToEdit = (e) => {
    e.preventDefault();
    navigate("/hotels/edit", { state: { id: hotel._id } });
  };
  const openDeleteModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    setId(hotel._id);
  };
  return (
    <>
      <img
        className="h-80 md:h-full w-full relative"
        src={`${import.meta.env.VITE_APP_API}/hotel/image/${hotel._id}`}
        alt={hotel.title}
      />
      <div className="absolute px-3 py-1 bottom-0 bg-headerbg rounded-b-2xl text-2xl z-20 group-hover:bg-black w-full flex justify-between">
        <h1 className=" w-4/5 truncate text-[#d0bd6e]">{hotel.title}</h1>
        {show && (
          <div className="flex">
            <button onClick={navigateToEdit}>
              <FiEdit2 className="text-[#d0bd6e] hover:bg-[#d0bd6e] rounded hover:text-black mr-3 ml-5" />
            </button>
            <button onClick={openDeleteModal}>
              <AiOutlineDelete className="text-[#d0bd6e] hover:bg-[#d0bd6e] rounded hover:text-black" />
            </button>
          </div>
        )}
      </div>

      <HotelDetails hotel={hotel} />
    </>
  );
};

export default HotelCard;
