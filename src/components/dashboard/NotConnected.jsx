import React, { useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createConnectAccount } from "../../api/stripe/stripe";
import Loading from "../shared/Loading";

const NotConnected = () => {
  // Will be deleted
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => ({ ...state }));

  const [loading, setLoading] = useState(false);

  const submitHandler = async () => {
    setLoading(true);
    try {
      let res = await createConnectAccount(auth.token);
      window.location.href = res.data;
    } catch (err) {
      toast.error("Stripe connect failed, Try again.");
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center">
      <div className="text-center">
        <div className="p-5 pointer flex flex-col items-center">
          <BiHomeAlt className="h-12 w-12" />
          <h4 className="text-2xl font-semibold">Setup payouts to post hotel rooms</h4>
          <p className="text-gray-500 text-xl md:w-96 mt-4">
            <strong className="text-black">HotelBooking.am</strong> partners with stripe to transfer
            earnings to your bank accout
          </p>
          {!loading ? (
            <button
              className="button1 h-12 w-28 rounded-xl mt-4 mb-6 text-white bg-black/70 hover:border-2 active:border-2 hover:bg-black active:bg-black"
              onClick={submitHandler}
              disabled={loading}
            >
              Setup Payouts
            </button>
          ) : (
            <Loading />
          )}

          <p className="">
            <small>You'll be redirected to Stripe to complete the onboarding process.</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotConnected;
