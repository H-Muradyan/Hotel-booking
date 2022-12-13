import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import { deleteHotel } from "../../api/datas/allHotels";
import useSeller from "../redux/actions/useSeller";
import { toast } from "react-toastify";
import HotelCard from "../shared/HotelCard";
import NotFound from "../shared/NotFound";

const Connected = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const sellerData = useSelector((data) => data.sellerData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState(null);

  const { token } = auth;
  const { getSellerHotels } = useSeller(token);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const deleteHandler = async () => {
    try {
      const res = await deleteHotel(token, id);
      toast.success("Hotel delted successfully! 🔥");
      setIsModalOpen(false);
      getSellerHotels();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSellerHotels();
  }, []);

  return (
    <>
      <div className="grid grid-cols-4 gap-x-8 md:grid-cols-8 lg:grid-cols-12 md:col-start-2 max-w-screen-2xl m-auto">
        <Link
          to="/hotels/new"
          className="text-headerbg font-bol text-7xl bg-slate-300 hover:bg-headerbg mb-5 cursor-pointer col-span-4 h-72 rounded-2xl shadow-lg shadow-neutral-900/90 flex items-center justify-center "
        >
          +
        </Link>

        {sellerData && sellerData.length ? (
          sellerData.map((hotel) => (
            <div
              className="col-span-4 2xl:col-span-3 shadow-lg shadow-neutral-900/90 rounded-2xl relative md:h-72 mb-5 group md:overflow-hidden"
              key={hotel._id}
              md={3}
            >
              <Link to={`/hotels/${hotel._id}`}>
                <HotelCard
                  hotel={hotel}
                  show={true}
                  setIsModalOpen={setIsModalOpen}
                  setId={setId}
                />
              </Link>
            </div>
          ))
        ) : (
          <NotFound />
        )}
      </div>
      <Modal open={isModalOpen} onCancel={handleCancel}>
        <h4 className="text-white fonr-bold text-2xl text-center mb-10">Are you sure?</h4>
        <div className="text-end space-x-4">
          <button
            className="button1 h-12 w-28 rounded-xl mt-4 mb-6 text-white bg-black/70 hover:border-2 active:border-2 hover:bg-black active:bg-black"
            onClick={deleteHandler}
          >
            Delete
          </button>
          <button
            className="button1 h-12 w-28 rounded-xl mt-4 mb-6 text-white bg-black/70 hover:border-2 active:border-2 hover:bg-black active:bg-black"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Connected;
