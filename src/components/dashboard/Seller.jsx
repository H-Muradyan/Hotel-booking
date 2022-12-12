import React from "react";
import { useSelector } from "react-redux";
import Connected from "./Connected";
import NotConnected from "./NotConnected";

const Seller = () => {
  const { auth } = useSelector((state) => ({ ...state }));

  return (
    <div className="px-3 md:px-10">
      {auth?.user?.stripe_seller?.charges_enabled ? (
        <Connected />
      ) : (
        <NotConnected />
      )}
    </div>
  );
};

export default Seller;
